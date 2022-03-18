import { Typography } from '@material-ui/core'
import useStyles from './styles/index.styles'
import { Node } from '../../libs/wallets'
import { useState } from 'react'

const Contract = () => {
  const node = new Node(
    'https://eth.getblock.io/mainnet/?api_key=91953f06-fc0a-4a48-87fc-145e8cf6d385'
  )

  const [contractAddress, setContractAddress] = useState()

  const checkContract = () => {
    node.checkContract(contractAddress).then(console.log).catch(console.log)
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>ENTER CONTRACT</Typography>
      </div>
      <div className={classes.searchBoxContainer}>
        <input
          className={classes.searchBox}
          onChange={(e) => {
            setContractAddress(e.target.value)
          }}
        />
      </div>
      <div className={classes.buttonContainer}>
        <button
          className={classes.button}
          onClick={checkContract}
          type="submit">
          Load
        </button>
      </div>
    </div>
  )
}
export default Contract
