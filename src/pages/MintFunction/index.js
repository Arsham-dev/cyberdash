import { CircularProgress, Typography } from '@material-ui/core'
import { useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import SwitchSelector from 'react-switch-selector'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import useStyles from './styles/index.styles'
import TransactionModal from './TransactionModal'
import { Form, Formik } from 'formik'

import { MetaMask } from '../../libs/wallets'
import mintFunctionValidation from './validation'
import SuccessModal from './SuccessModal'
import FailedModal from './FailedModal'
import MoreInfoModal from './MoreInfoModal'
import { toast } from 'react-toastify'

const toolTipMessage = {
  gasLimit: `Gas limit is the maximum amount of gas you wish to spend on a transaction. Normally, for minting an NFT, you need between 100000 to 150000 but for hyped projects, you should increase that. Something between 200000 and 350000 would suffice in 99% of the time. Note that you only pay the gas necessary for a transaction and if you enter higher than needed, it’s not deducted from your account, however, you need enough money in your account to cover the fee you enter.`,
  maxFee: `This is the maximum gas fee you pay for your transaction to be accepted by miners. In a normal mint event, you can only enter the gas fee shown above, however, in a hyped project mint you need to pay higher gas fees in order to secure your transaction. In general, 2 to 3 times would be enough in this situation. Note that you only pay the gas necessary for a transaction and if you enter higher than needed, it’s not deducted from your account, however, you need enough money in your account to cover the fee you enter.`,
  maxPriorityFee: `It’s an 'optional' additional fee that is paid directly to miners in order to incentivize them to include your transaction in a block. Normally, you can enter '2' for this but if you enter higher numbers the changes on the fee is nominal. We haven’t seen any tangible difference in accepting transactions by miners when adding higher tips.`,
  value: `Enter mint price. Note that if you mint more than 1 piece, enter the total value of all pieces. For example, if mint price is 0.08 eth and you want to mint 3 NFTs, enter 0.24`,
  flag: `This is the function in the contract that when it’s turned on, the bot starts minting process. If you don’t know which one the function is, just select main flag. The bot automatically finds the relevant function and mints as soon as it’s flipped from off to on.`,
  mint: `Select the relevant mint function; Whitelist, public sale, etc.`
}

const MintFunction = () => {
  const [provider, setProvider] = useState({})

  useEffect(() => {
    setProvider(window.ethereum)
  }, [])

  const [transactionModalIsOpen, settransactionModalIsOpen] = useState(false)
  const [successModalIsOpen, setsuccessModalIsOpen] = useState(false)
  const [failedModalIsOpen, setFailedModalIsOpen] = useState(false)
  const [moreInfoModalIsOpen, setMoreInfoModalIsOpen] = useState(false)
  const [isLooping, setisLooping] = useState(false)
  const [isConnect, setisConnect] = useState(false)
  const [isSign, setisSign] = useState(false)
  const [MinimumEther, setMinimumEther] = useState('')
  const [sucessfullModaAddress, setsucessfullModaAddress] = useState('')
  const [failedModalMessage, setfailedModalMessage] = useState('')
  const stopWhileRef = useRef()

  const [data, setdata] = useState({})

  const location = useLocation()
  const flagAbi = location?.state?.flagAbi
  const mintAbi = location?.state?.mintAbi
  const initialValues = {
    flagFunction: !!mintAbi.defaultMintFunction
      ? mintAbi.allMintFunctions.findIndex(
          (item) => item.name === mintAbi.defaultMintFunction.name
        )?.name
      : '',
    mintFunction: !!mintAbi.defaultMintFunction
      ? mintAbi.allMintFunctions.findIndex(
          (item) => item.name === mintAbi.defaultMintFunction.name
        )?.name
      : '',
    mintArgs: [''],
    flagArgs: [],
    maxPriorityFeePerGas: '',
    maxFeePerGas: '',
    gasLimit: '',
    value: ''
  }
  const history = useHistory()
  const contractAddress = location?.state?.contractAddress

  const metaMask = new MetaMask(provider)

  const calculateMinimumEther = async (
    value,
    maxFeePerGas,
    maxPriorityFeePerGas,
    gasLimit
  ) => {
    const resCalculate = await metaMask.calculateEtherValue(
      value,
      maxFeePerGas,
      maxPriorityFeePerGas,
      gasLimit
    )
    setMinimumEther(resCalculate)
  }

  const checkValidateMintInputs = (mintAbi, inputsData) => {
    try {
      let mintInputsType = []

      for (let i = 0; i < mintAbi.inputs.length; i++) {
        mintInputsType.push(mintAbi.inputs[i].type)
      }

      if (mintInputsType.length !== inputsData.length)
        return {
          status: 400,
          content: { message: 'Invalid Inputs Item Length' }
        }

      for (let k = 0; k < mintInputsType.length; k++) {
        // console.log(inputsData[k], )
        console.log(mintInputsType[k], 'asadsasd')
        if (String(mintInputsType[k]).toLowerCase().includes('bool')) {
          if (
            String(inputsData[k]).toLowerCase() === 'false' ||
            String(inputsData[k]).toLowerCase() === 'true'
          )
            inputsData[k] = Boolean(String(inputsData[k]).toLowerCase())
          else
            return {
              status: 400,
              content: { message: 'Invalid Type of Boolean' }
            }
        }
        if (String(mintInputsType[k]).toLowerCase().includes('int')) {
          if (String(inputsData[k]).match(/^[0-9]+$/) == null)
            return {
              status: 400,
              content: { message: 'Invalid Type uint256' }
            }

          inputsData[k] = parseInt(inputsData[k])
        }
        if (String(mintInputsType[k]).toLowerCase().includes('byte')) {
          inputsData[k] = String(inputsData[k])
        }
      }

      return {
        status: 200,
        content: { inputData: inputsData }
      }
    } catch (e) {
      console.log(e)
      return {
        status: 400,
        content: { message: e.message }
      }
    }
  }

  const SIGN_CLICK = async () => {
    const resMetaMask = await metaMask.onClickConnect()
    if (resMetaMask.status === 400) return resMetaMask

    const serializeMintInputsData = checkValidateMintInputs(
      mintAbi.allMintFunctions.find((item) => item.name === data.mintFunction),
      data.mintArgs
    )

    if (serializeMintInputsData.status === 400) return serializeMintInputsData

    settransactionModalIsOpen(false)
    setisLooping(true)
    // setMoreInfoModalIsOpen(true)
    await LOOP_FOR_LOADING('send', serializeMintInputsData.content.inputData)
  }

  const I_UNDERSTAND_CLICK_EVENT = async () => {
    const resMetaMask = await metaMask.onClickConnect()
    if (resMetaMask.status === 400) return resMetaMask

    const serializeMintInputsData = checkValidateMintInputs(
      mintAbi.allMintFunctions.find((item) => item.name === data.mintFunction),
      data.mintArgs
    )

    if (serializeMintInputsData.status === 400) return serializeMintInputsData

    const etherAddress = resMetaMask.content.address

    const resSignTx = await metaMask.signTx(
      etherAddress,
      parseFloat(data.value),
      parseInt(data.gasLimit),
      parseInt(data.maxFeePerGas),
      parseInt(data.maxPriorityFeePerGas),
      data.contractAddress,
      mintAbi.allMintFunctions.find((item) => item.name === data.mintFunction),
      flagAbi.allFlagFunctions.find((item) => item.name === data.flagFunction),
      serializeMintInputsData.content.inputData,
      data.flagArgs
    )

    if (resSignTx.status === 400) return resSignTx
    settransactionModalIsOpen(false)
    setisLooping(true)
    setMoreInfoModalIsOpen(true)
    await LOOP_FOR_LOADING(
      resSignTx.content.rawTx,
      serializeMintInputsData.content.inputData
    )
  }

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const LOOP_FOR_LOADING = async (signedRawTx, serializeMintInputs) => {
    try {
      const serializeMintInputsData = checkValidateMintInputs(
        mintAbi.allMintFunctions.find(
          (item) => item.name === data.mintFunction
        ),
        data.mintArgs
      )

      if (serializeMintInputsData.status === 400) return serializeMintInputsData

      const encodedData = await metaMask.encodedMintAbiData(
        mintAbi.allMintFunctions.find(
          (item) => item.name === data.mintFunction
        ),
        serializeMintInputsData.content.inputData
      )

      while (true) {
        if (stopWhileRef.current) break

        await delay(1000)
        let mainAddress = sessionStorage.getItem('key')

        const selectedFlagAbiFunction = flagAbi.allFlagFunctions.find(
          (item) => item.name === data.flagFunction
        )

        if (
          !String(selectedFlagAbiFunction.name).toLowerCase().includes('main')
        ) {
          const resCheckFlag = await metaMask.checkFlag(
            flagAbi.allFlagFunctions.find(
              (item) => item.name === data.flagFunction
            ),
            data.contractAddress,
            data.flagArgs
          )

          if (resCheckFlag.status === 200 && resCheckFlag.content.result) {
            setisConnect(true)
            let resTx
            if (signedRawTx == 'send') {
              resTx = await metaMask.sendTx(
                mainAddress,
                parseFloat(data.value),
                parseInt(data.gasLimit),
                parseInt(data.maxFeePerGas),
                parseInt(data.maxPriorityFeePerGas),
                data.contractAddress,
                mintAbi.allMintFunctions.find(
                  (item) => item.name === data.mintFunction
                ),
                serializeMintInputs
              )
            } else {
              resTx = await metaMask.flashbotSendSignedTx(signedRawTx, false)
            }

            if (resTx.status === 200) {
              setisLooping(false)
              setsuccessModalIsOpen(true)
              setsucessfullModaAddress(resTx.content.data)
              return {
                status: 200,
                content: {
                  txId: resTx.content.data
                }
              }
            } else if (resTx.status === 400) {
              setisLooping(false)
              setfailedModalMessage(resTx.content.message)
              setFailedModalIsOpen(true)
              //toast(resTx.content.message, { type: 'error' })
              return {
                status: 400,
                content: {
                  message: resTx.content.message
                }
              }
            }
          }
        } else {
          const resCheckEstimateGas = await metaMask.estimateGas(
            mainAddress,
            data.contractAddress,
            encodedData
          )

          if (
            resCheckEstimateGas.status == 200 &&
            resCheckEstimateGas.content?.result == true
          ) {
            setisConnect(true)
            let resSentTx
            if (signedRawTx == 'send') {
              resSentTx = await metaMask.sendTx(
                mainAddress,
                parseFloat(data.value),
                parseInt(data.gasLimit),
                parseInt(data.maxFeePerGas),
                parseInt(data.maxPriorityFeePerGas),
                data.contractAddress,
                mintAbi.allMintFunctions.find(
                  (item) => item.name === data.mintFunction
                ),
                serializeMintInputs,
                data.flagArgs
              )
            } else {
              resSentTx = await metaMask.flashbotSendSignedTx(
                signedRawTx,
                false
              )
            }

            if (resSentTx.status === 200) {
              setisLooping(false)
              setsuccessModalIsOpen(true)
              setsucessfullModaAddress(resSentTx.content.data)
              return {
                status: 200,
                content: {
                  txId: resSentTx.content.data
                }
              }
            }
          }
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  const customButtonFunction = async (values) => {
    if (isLooping) {
      setisLooping(false)
      stopWhileRef.current = true
    } else {
      setdata({ ...data, ...values })
      if (isSign) {
        // setisLoading(true)
        SIGN_CLICK().then((item) => {
          if (item)
            if (item.status === 200) {
              toast(item.txId.message, { type: 'success' })
            } else {
              toast(item.content.message, { type: 'error' })
            }
        })
        // setisLoading(false)
      } else {
        settransactionModalIsOpen(true)
      }
    }
  }
  useEffect(() => {
    stopWhileRef.current = false
  }, [])
  useEffect(() => {
    if (!location.state || !sessionStorage.getItem('key')) {
      history.replace('/contract')
    } else {
      setdata({ ...data, contractAddress })
    }
  }, [])
  const classes = useStyles()
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={mintFunctionValidation}
        onSubmit={customButtonFunction}>
        {({
          values,
          setFieldValue,
          errors,
          touched,
          handleBlur,
          isSubmitting,
          handleChange
        }) => {
          return (
            <Form>
              <div className={classes.root}>
                <div className={classes.switchContainer}>
                  <SwitchSelector
                    fontSize={16}
                    disabled={isLooping}
                    options={[
                      {
                        selectedBackgroundColor: '#1956E2',
                        label: 'Pre-Sign',
                        value: 'Pre-Sign'
                      },
                      {
                        selectedBackgroundColor: '#1956E2',
                        label: 'Sign',
                        value: 'Sign'
                      }
                    ]}
                    onChange={(event) => {
                      setisSign(!isSign)
                    }}
                    border="1px solid #1956E2"
                    optionBorderRadius={27}
                    fontColor="#fff"
                    backgroundColor="transpart"
                    wrapperBorderRadius={27}
                  />
                </div>
                {isLooping && (
                  <div className={classes.waitingFlagContainer}>
                    <CircularProgress size={45} />
                    <Typography className={classes.waitingFlagText}>
                      Waiting for flag ...
                    </Typography>
                  </div>
                )}
                <div
                  className={[
                    classes.contractInfo,
                    isConnect
                      ? classes.contractInfoIsConnect
                      : classes.contractInfoIsNotConnect
                  ].join(' ')}>
                  <Typography className={classes.contractText}>
                    Contract Status
                  </Typography>
                  <div
                    className={[
                      classes.contractValue,
                      isConnect
                        ? classes.contractValueIsConnect
                        : classes.contractValueIsNotConnect
                    ].join(' ')}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <CustomInput
                    name="flagFunction"
                    label="Select Flag Function"
                    value={values.flagFunction}
                    error={touched.flagFunction && !!errors.flagFunction}
                    helperText={touched.flagFunction ? errors.flagFunction : ''}
                    onBlur={handleBlur}
                    disabled={isLooping}
                    onChange={(event) => {
                      setFieldValue('flagFunction', event.target.value)
                      setFieldValue(
                        'flagArgs',
                        flagAbi?.allFlagFunctions
                          .find((item) => item.name === event.target.value)
                          ?.outputs.map(() => '')
                      )
                      setFieldValue(
                        'flagInputs',
                        flagAbi?.allFlagFunctions
                          .find((item) => item.name === event.target.value)
                          ?.outputs.map((item) => item.name || item.type)
                      )
                      // handleChange(event)
                    }}
                    placholder="Select Flag Function"
                    isSelector
                    selectorOptions={
                      flagAbi?.allFlagFunctions
                        .filter((item) => item.name)
                        .map((item) => item.name) || []
                    }
                    toolTip={toolTipMessage.flag}
                  />
                  {values.flagFunction &&
                    flagAbi?.allFlagFunctions
                      .find((item) => item.name === values.flagFunction)
                      .outputs.map((item, index) => {
                        return (
                          <CustomInput
                            key={item.internalType + item.name}
                            label={item.name || item.type}
                            // type="number"
                            id={`flagArgs[${index}]`}
                            name={`flagArgs[${index}]`}
                            value={values.flagArgs[index]}
                            error={
                              touched.flagArgs &&
                              touched.flagArgs[index] &&
                              errors.flagArgs &&
                              Boolean(errors.flagArgs[index])
                            }
                            helperText={
                              touched.flagArgs &&
                              touched.flagArgs[index] &&
                              errors.flagArgs &&
                              errors.flagArgs[index]
                                ? errors.flagArgs[index]
                                : ''
                            }
                            onBlur={handleBlur}
                            disabled={isLooping}
                            onChange={(event) => {
                              setFieldValue(
                                `flagArgs[${index}]`,
                                event.target.value
                              )
                            }}
                          />
                        )
                      })}
                  <CustomInput
                    name="mintFunction"
                    label="Select Mint Function"
                    value={values.mintFunction}
                    error={touched.mintFunction && Boolean(errors.mintFunction)}
                    helperText={
                      touched.mintFunction && errors.mintFunction
                        ? errors.mintFunction
                        : ''
                    }
                    onBlur={handleBlur}
                    disabled={isLooping}
                    onChange={(event) => {
                      setFieldValue('mintFunction', event.target.value)
                      setFieldValue(
                        'mintArgs',
                        mintAbi?.allMintFunctions
                          .find((item) => item.name === event.target.value)
                          ?.inputs.map(() => '')
                      )
                      setFieldValue(
                        'mintInputs',
                        mintAbi?.allMintFunctions
                          .find((item) => item.name === event.target.value)
                          ?.inputs.map((item) => item.name)
                      )
                    }}
                    placholder="Select Mint Function"
                    isSelector
                    selectorOptions={
                      mintAbi?.allMintFunctions
                        .filter((item) => item.name)
                        .map((item) => item.name) || []
                    }
                    toolTip={toolTipMessage.mint}
                  />
                  {values.mintFunction &&
                    mintAbi?.allMintFunctions
                      .find((item) => item.name === values.mintFunction)
                      ?.inputs.map((item, index) => {
                        return (
                          <CustomInput
                            key={item.name}
                            label={item.name}
                            id={`mintArgs[${index}]`}
                            // type="number"
                            name={`mintArgs[${index}]`}
                            value={values.mintArgs[index]}
                            error={
                              touched.mintArgs &&
                              touched.mintArgs[index] &&
                              errors.mintArgs &&
                              Boolean(errors.mintArgs[index])
                            }
                            helperText={
                              touched.mintArgs &&
                              touched.mintArgs[index] &&
                              errors.mintArgs &&
                              errors.mintArgs[index]
                                ? errors.mintArgs[index]
                                : ''
                            }
                            onBlur={handleBlur}
                            disabled={isLooping}
                            onChange={(event) => {
                              setFieldValue(
                                `mintArgs[${index}]`,
                                event.target.value
                              )
                            }}
                          />
                        )
                      })}
                  <CustomInput
                    label="Value"
                    type="number"
                    step="0.01"
                    name="value"
                    value={values.value}
                    error={touched.value && !!errors.value}
                    helperText={touched.value ? errors.value : ''}
                    onBlur={handleBlur}
                    disabled={isLooping}
                    onChange={(event) => {
                      setFieldValue('value', event.target.value)
                    }}
                    toolTip={toolTipMessage.value}
                  />
                  <CustomInput
                    name="maxFeePerGas"
                    type="number"
                    label="Max Fee Per Gas"
                    value={values.maxFeePerGas}
                    error={touched.maxFeePerGas && !!errors.maxFeePerGas}
                    helperText={
                      touched.maxFeePerGas ? errors.maxFeePerGas : undefined
                    }
                    onBlur={handleBlur}
                    disabled={isLooping}
                    onChange={(event) => {
                      setFieldValue('maxFeePerGas', event.target.value)
                    }}
                    toolTip={toolTipMessage.maxFee}
                  />
                  <CustomInput
                    label="Max Priority Fee Per Gas"
                    inputMode="numeric"
                    value={values.maxPriorityFeePerGas}
                    name="maxPriorityFeePerGas"
                    error={
                      touched.maxPriorityFeePerGas &&
                      !!errors.maxPriorityFeePerGas
                    }
                    helperText={
                      touched.maxPriorityFeePerGas
                        ? errors.maxPriorityFeePerGas
                        : undefined
                    }
                    onBlur={handleBlur}
                    disabled={isLooping}
                    onChange={(event) => {
                      setFieldValue('maxPriorityFeePerGas', event.target.value)
                    }}
                    type="number"
                    toolTip={toolTipMessage.maxPriorityFee}
                  />
                  <CustomInput
                    label="Gas Limit"
                    inputMode="numeric"
                    step="1"
                    value={values.gasLimit}
                    type="number"
                    name="gasLimit"
                    error={touched.gasLimit && !!errors.gasLimit}
                    helperText={touched.gasLimit ? errors.gasLimit : undefined}
                    onBlur={handleBlur}
                    disabled={isLooping}
                    onChange={(event) => {
                      setFieldValue('gasLimit', event.target.value)
                    }}
                    toolTip={toolTipMessage.gasLimit}
                  />
                </div>
                {
                  !(
                    errors.value ||
                    errors.gasLimit ||
                    errors.maxFeePerGas ||
                    errors.maxPriorityFeePerGas
                  ) &&
                    values.value && (
                      <div className={classes.requiredEmountContainer}>
                        <Typography className={classes.requiredEmount}>{`${
                          calculateMinimumEther(
                            values.value,
                            values.maxFeePerGas,
                            values.maxPriorityFeePerGas,
                            values.gasLimit
                          ) && MinimumEther
                        } eth required in wallet`}</Typography>
                      </div>
                    )
                  // ))
                }
                <div className={classes.buttonContianer}>
                  <CustomButton
                    className={isLooping ? classes.cancelButton : ''}
                    title={
                      isLooping ? 'Cancel' : isSign ? 'Sign Tx' : 'Pre-Sign Tx'
                    }
                    type="submit"
                  />
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
      <TransactionModal
        isOpen={transactionModalIsOpen}
        onClose={() => settransactionModalIsOpen(false)}
        data={data}
        onClickFunction={isSign ? SIGN_CLICK : I_UNDERSTAND_CLICK_EVENT}
        isSign={isSign}
      />
      <SuccessModal
        isOpen={successModalIsOpen}
        onClose={() => setsuccessModalIsOpen(false)}
        data={sucessfullModaAddress}
      />
      <FailedModal
        isOpen={failedModalIsOpen}
        onClose={() => setFailedModalIsOpen(false)}
        message={failedModalMessage}
      />
      <MoreInfoModal
        isOpen={moreInfoModalIsOpen}
        onClose={() => setMoreInfoModalIsOpen(false)}
      />
    </>
  )
}
export default MintFunction
