import { IconButton, Modal, Paper, Slide, Typography } from '@material-ui/core'
import CustomButton from '../../components/CustomButton'
import useStyles from './styles/MoreInfoModal.style'
import CloseIcon from '@material-ui/icons/Close'

const MoreInfoModal = ({ isOpen, onClose }) => {
  const classes = useStyles()
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Slide in={isOpen} direction="down">
        <Paper className={classes.modal}>
          <div className={classes.titleContainer}>
            <div />
            <Typography className={classes.title}>Info</Typography>
            <div className={classes.closeButtonRoot}>
              <IconButton
                size="medium"
                onClick={onClose}
                className={classes.closeButtonContainer}>
                <CloseIcon className={classes.closeButton} />
              </IconButton>
            </div>
          </div>
          <div className={classes.messageContainer}>
            <Typography className={classes.messageText}>
              Note that if you make any transactions before this transaction
              goes through, this pre-sign will be canceled and you have to sign
              it again
            </Typography>
          </div>
          <div className={classes.buttonContainer}>
            <CustomButton
              title="Got it"
              onClick={onClose}
              className={classes.button}
            />
          </div>
        </Paper>
      </Slide>
    </Modal>
  )
}
export default MoreInfoModal
