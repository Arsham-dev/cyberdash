import {
  Button,
  IconButton,
  Modal,
  Paper,
  Slide,
  Typography
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { toast } from 'react-toastify'
import useStyles from './styles/TransactionModal.styles'
import TransactionModalItems from './TransactionModalItems'

const TransactionModal = ({ isOpen, onClose, data, onClickFunction }) => {
  const classes = useStyles()
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Slide in={isOpen} direction="down">
        <Paper className={classes.modal}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title}>
              Pre-sign Transaction
            </Typography>
            <IconButton size="medium" onClick={onClose}>
              <CloseIcon className={classes.closeButton} />
            </IconButton>
          </div>
          <div className={classes.descriptionContainer}>
            <Typography className={classes.description}>
              The Nansen NFT indexes present a reliable way of navigating the
              NFT markets. This update raises the bar for quality financial
              infrastructure that supports the growing depth of the NFT
              industry.
            </Typography>
          </div>
          <div className={classes.itemContainer}>
            {data.mintAbi &&
              Object.entries(data.mintAbi).map((item) => (
                <TransactionModalItems
                  lable={`${item[0]}:`}
                  value={item[1]}
                  key={item[0]}
                />
              ))}
            {data.contractAddress && (
              <TransactionModalItems
                lable="Contract Address:"
                value={data.contractAddress}
              />
            )}
            <TransactionModalItems lable="Value:" value={`${data.value} ETH`} />
            <TransactionModalItems
              lable="Max Fee:"
              value={`${data.maxFee} GWEI`}
            />
            <TransactionModalItems
              lable="Priority Fee:"
              value={`${data.maxPriority} GWEI`}
            />
            <TransactionModalItems lable="Gas limit:" value={data.gasLimit} />
          </div>
          <div className={classes.buttonContainer}>
            <Button
              fullWidth
              onClick={() =>
                onClickFunction().then((item) => {
                  if (item)
                    if (item.status === 200) {
                      toast(item.content.message, { type: 'success' })
                    } else {
                      toast(item.content.message, { type: 'error' })
                    }
                })
              }
              variant="contained"
              className={classes.containedButton}>
              I UNDERSTAND
            </Button>
            <Button
              onClick={onClose}
              fullWidth
              variant="outlined"
              className={classes.outlinedButton}>
              CANCEL
            </Button>
          </div>
        </Paper>
      </Slide>
    </Modal>
  )
}
export default TransactionModal
