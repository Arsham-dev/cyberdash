import { Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import SwitchSelector from 'react-switch-selector'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import useStyles from './styles/index.styles'
import TransactionModal from './TransactionModal'

const MintFunction = () => {
  const [transactionModalIsOpen, settransactionModalIsOpen] = useState(false)
  const [selectedFlaqApi, setselectedFlaqApi] = useState(null)
  const [selectedMintAbi, setselectedMintAbi] = useState(null)
  const [isConnect, setisConnect] = useState(false)
  const location = useLocation()
  const history = useHistory()
  const { flagAbi, mintAbi } = location.state
  useEffect(() => {
    if (!location.state) {
      history.replace('/contract')
    } else {
      setselectedMintAbi(
        !!mintAbi.defaultMintFunction
          ? mintAbi.allMintFunctions.findIndex(
              (item) => item.name === mintAbi.defaultMintFunction.name
            )
          : null
      )
      setselectedFlaqApi(
        !!flagAbi.defaultFlagFunction
          ? flagAbi.allFlagFunctions.findIndex(
              (item) => item.name === flagAbi.defaultFlagFunction.name
            )
          : null
      )
    }
  }, [])

  const classes = useStyles()
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
          value={
            selectedFlaqApi
              ? flagAbi.allFlagFunctions[selectedFlaqApi].name
              : null
          }
          placholder="Select flagAbi"
          isSelector
          selectorOptions={flagAbi.allFlagFunctions
            .filter((item) => item.name)
            .map((item) => item.name)}
          toolTip="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
          onChange={(event) =>
            setselectedFlaqApi(
              flagAbi.allFlagFunctions.findIndex(
                (item) => item.name === event.target.value
              )
            )
          }
        />
        {selectedFlaqApi &&
          flagAbi.allFlagFunctions[selectedFlaqApi].inputs.map(
            (item, index) => {
              return (
                <CustomInput
                  key={item.internalType + item.name}
                  label={item.name}
                  toolTip="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
                />
              )
            }
          )}
        <CustomInput
          value={
            selectedMintAbi
              ? mintAbi.allMintFunctions[selectedMintAbi].name
              : null
          }
          placholder="Select mintAbi"
          isSelector
          selectorOptions={mintAbi.allMintFunctions
            .filter((item) => item.name)
            .map((item) => item.name)}
          toolTip="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
          onChange={(event) =>
            setselectedMintAbi(
              mintAbi.allMintFunctions.findIndex(
                (item) => item.name === event.target.value
              )
            )
          }
        />
        {selectedMintAbi &&
          mintAbi.allMintFunctions[selectedMintAbi].inputs.map(
            (item, index) => {
              return (
                <CustomInput
                  key={item.internalType + item.name}
                  label={item.name}
                  toolTip="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
                />
              )
            }
          )}
        <CustomInput
          label="Max Fee Per Gas"
          toolTip="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
        />
        <CustomInput
          label="Max Priority Fee Per Gas"
          toolTip="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
        />
        <CustomInput
          label="Gas Limit"
          toolTip="The Nansen NFT indexes present a reliable way of navigating the NFT markets. This update raises the bar for quality financial infrastructure that supports the growing depth of the NFT industry."
        />
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
