import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modal: {
    margin: 'auto',
    marginTop: '10vh',
    backgroundColor: '#0B1E39',
    padding: '19px 22px 19px 23px',
    width: 564,
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  linkContainer: {
    margin: '30px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  linkText: {
    fontSize: 25,
    color: 'rgb(62, 149, 163)'
  },
  linkValue: {
    fontSize: 25,
    color: 'rgb(65, 211, 121)'
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
  }
}))
export default useStyles
