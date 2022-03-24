import { Button, CircularProgress, Typography } from '@material-ui/core'
import useStyles from './styles/index.styles'
import { Node } from '../../libs/wallets'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

const Contract = () => {
  const node = new Node(
    'https://eth.getblock.io/mainnet/?api_key=91953f06-fc0a-4a48-87fc-145e8cf6d385'
  )
  const history = useHistory()
  const [contractAddress, setContractAddress] = useState()
  const [isLoading, setisLoading] = useState()
  const checkContract = () => {
    setisLoading(true)
    if (sessionStorage.getItem('key')) {
      node.checkContract(contractAddress).then((data) => {
        if (!data.error) {
          toast('Contract load successfully', { type: 'success' })
          history.push({
            pathname: '/mint-function',
            state: { ...data, contractAddress }
          })
        } else toast(data.error, { type: 'error' })
        setisLoading(false)
      })
    } else {
      toast('Please connect your wallet', { type: 'info' })
      setisLoading(false)
    }
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
          onChange={(event) => setContractAddress(event.target.value)}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          disabled={!contractAddress || isLoading}
          onClick={checkContract}>
          {isLoading ? (
            <CircularProgress size={30} className={classes.circularProgress} />
          ) : (
            <Typography className={classes.buttonText}>Load</Typography>
          )}
        </Button>
      </div>
    </div>
  )
}
export default Contract
