import { Modal, Paper, Slide, Typography } from '@material-ui/core'
import CustomButton from '../../components/CustomButton'

import useStyles from './styles/SuccessModal.style'

const SuccessModal = ({ isOpen, onClose, data }) => {
  const classes = useStyles()
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Slide in={isOpen} direction="down">
        <Paper className={classes.modal}>
          <div className={classes.titleContainer}>
            <Typography className={classes.title}>Successfull</Typography>
          </div>
          <div className={classes.linkContainer}>
            <Typography className={classes.linkText}>Link:</Typography>
            <a href="asasd" target="_blank" className={classes.linkValue}>
              Come in!
            </a>
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
export default SuccessModal
