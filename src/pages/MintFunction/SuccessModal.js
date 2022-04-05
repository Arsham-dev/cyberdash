import { Modal, Paper, Slide, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import CustomButton from '../../components/CustomButton'

import useStyles from './styles/SuccessModal.style'

const SuccessModal = ({ isOpen, onClose, data }) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Modal open={isOpen}>
      <Slide in={isOpen} direction="down">
        <Paper className={classes.modal}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title}>Successfull</Typography>
          </div>
          <div className={classes.linkContainer}>
            <Typography className={classes.linkText}>
              Your NFT was successfully
              <br /> minted. Check out the transaction{' '}
              <a
                href={`https://etherscan.io/tx/${data}`}
                target="_blank"
                className={classes.linkValue}
                rel="noreferrer">
                here
              </a>
            </Typography>
            {/* <a href="asasd" target="_blank" className={classes.linkValue}>
              Come in!
            </a> */}
          </div>
          <div className={classes.buttonContainer}>
            <CustomButton
              title="Close"
              onClick={() => {
                onClose()
                history.push('/contract')
              }}
              className={classes.button}
            />
          </div>
        </Paper>
      </Slide>
    </Modal>
  )
}
export default SuccessModal
