import SwitchSelector from 'react-switch-selector'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import useStyles from './styles/index.styles'

const MintFunction = () => {
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
      <div className={classes.inputContainer}>
        <CustomInput
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
        <CustomButton title="Pre-Sign TX" />
      </div>
    </div>
  )
}
export default MintFunction
