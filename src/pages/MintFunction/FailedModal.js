import { IconButton, Modal, Paper, Slide, Typography } from '@material-ui/core'
import useStyles from './styles/FailedModal.style'
import CloseIcon from '@material-ui/icons/Close'
import CustomButton from '../../components/CustomButton'

const FailedModal = ({ isOpen, onClose, message }) => {
  const classes = useStyles()
  return (
    <Modal open={isOpen}>
      <Slide in={isOpen} direction="down">
        <Paper className={classes.modal}>
          <div className={classes.titleContainer}>
            <div />
            <Typography className={classes.title}>Failed</Typography>
            <IconButton
              size="medium"
              onClick={onClose}
              className={classes.closeButtonContainer}>
              <CloseIcon className={classes.closeButton} />
            </IconButton>
          </div>
          <div className={classes.messageContainer}>
            <Typography className={classes.messageText}>{message}</Typography>
          </div>
          <div className={classes.buttonContainer}>
            <CustomButton
              title="Close"
              onClick={onClose}
              className={classes.button}
            />
          </div>
        </Paper>
      </Slide>
    </Modal>
  )
}
export default FailedModal
