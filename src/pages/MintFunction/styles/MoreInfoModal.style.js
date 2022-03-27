import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modal: {
    margin: 'auto',
    marginTop: '24vh',
    backgroundColor: '#0B1E39',
    padding: '19px 22px 19px 23px',
    width: 450,
    overflow: 'hidden auto',
    alignSelf: 'center',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 16,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '80vw'
    }
  },
  titleContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3 , 1fr)',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginBottom: 13
  },
  title: {
    color: 'rgba(50,50,255,1)',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold'
  },
  closeButton: {
    fontSize: 35,
    // fontWeight: 'bold',
    color: '#fff'
  },
  closeButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  closeButtonRoot: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: '50%',
    marginBottom: 15,
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    }
  },
  button: {
    backgroundColor: 'rgb(4,3,250)',
    '&:hover': {
      backgroundColor: 'rgba(4,3,250,0.5) !important'
    }
  },
  messageContainer: {
    margin: '0 10px 30px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  messageText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'rgb(4, 198, 247)'
  }
}))
export default useStyles
