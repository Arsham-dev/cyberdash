import { Typography } from '@material-ui/core'
import { useState, useEffect } from 'react'
import SwitchSelector from 'react-switch-selector'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import useStyles from './styles/index.styles'
import TransactionModal from './TransactionModal'
import { MetaMask } from '../../libs/wallets'

const MintFunction = () => {
  const [provider, setProvider] = useState({})

  useEffect(() => {
    setProvider(window.ethereum)
  }, [])

  const metaMask = new MetaMask(provider)

  const I_UNDERSTAND_CLICK_EVENT = async () => {
    const resMetaMask = await metaMask.onClickConnect()
    if (resMetaMask.status == 400) return resMetaMask.content.message

    const etherAddress = resMetaMask.content.address
    const resSignTx = await metaMask.signTx(
      etherAddress,
      'VALUE',
      'GAS LIMIT',
      'MAX FEE PER GAS',
      'MAX PRIORITY FEE PER GAS',
      'CONTRACT ADDRESS',
      'MINT ABI',
      'FLAG ABI',
      'MINT INPUT DATA'
    )
    if (resSignTx.status == 400) return resSignTx.content?.message

    LOOP_FOR_LOADING(resSignTx.content.rawTx)
  }

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const FLAG_LOAD = true

  const LOOP_FOR_LOADING = async (signedRawTx) => {
    while (FLAG_LOAD) {
      delay(1000)

      const resCheckFlag = await metaMask.checkFlag(
        'FLAG ABI',
        'CONTRACT ADDRESS'
      )
      if (resCheckFlag.status == 200 && resCheckFlag.content.result) {
        const resTx = await metaMask.flashbotSendSignedTx(signedRawTx)
        // SHOW TO KARBAR
        return resTx
      }
    }
  }

  const [transactionModalIsOpen, settransactionModalIsOpen] = useState(false)
  const classes = useStyles()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isConnect, setisConnect] = useState(false)
  return (
    <div className={classes.root}>
      <div className={classes.switchContainer}>
        <SwitchSelector
          fontSize={16}
          options={[
            {
              selectedBackgroundColor: '#1956E2',
              label: 'test1',
              value: 'test1'
            },
            {
              selectedBackgroundColor: '#1956E2',
              label: 'test2',
              value: 'test2'
            }
          ]}
          border="1px solid #1956E2"
          optionBorderRadius={27}
          fontColor="#fff"
          backgroundColor="transpart"
          wrapperBorderRadius={27}
        />
      </div>
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
          placholder="Select mint Function"
          isSelector
          selectorOptions={[]}
          toolTip="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
        />
        {Array(6)
          .fill(null)
          .map((item, index) => {
            return (
              <CustomInput
                key={`${index.toString()}`}
                label={item + index.toString()}
                toolTip="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
              />
            )
          })}
      </div>
      <div className={classes.buttonContianer}>
        <CustomButton
          title="Pre-Sign TX"
          onClick={() => settransactionModalIsOpen(true)}
        />
      </div>
      <TransactionModal
        isOpen={transactionModalIsOpen}
        onClose={() => settransactionModalIsOpen(false)}
      />
    </div>
  )
}
export default MintFunction
