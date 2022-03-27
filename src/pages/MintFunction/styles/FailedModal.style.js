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
    color: 'rgba(240,13,13,1)',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  closeButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  closeButtonContainer: {
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
    backgroundColor: 'rgb(240,30,30)',
    '&:hover': {
      backgroundColor: 'rgba(240,30,30,0.5) !important'
    }
  },
  messageContainer: {
    margin: '30px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  messageText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'rgb(162, 219, 213)'
  }
}))
export default useStyles
