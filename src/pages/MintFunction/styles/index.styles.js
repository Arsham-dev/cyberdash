import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 482,
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },
  switchContainer: {
    height: 50,
    width: 288,
    borderRadius: 27,
    margin: '59px 0 16px 0',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 30
    }
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 20,
    width: '100%'
  },
  buttonContianer: {
    width: 287,
    margin: '40px 0 73px 0'
  },
  contractInfo: {
    height: 53,
    width: 182,
    borderRadius: 37,
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 15px 0 17px',
    marginBottom: 24
  },
  contractInfoIsConnect: {
    borderColor: '#31D33D'
  },
  contractInfoIsNotConnect: {
    borderColor: '#FF4B4B'
  },
  contractText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  contractValue: {
    width: 23,
    height: 23,
    borderRadius: 11.5
  },
  contractValueIsConnect: {
    backgroundColor: '#31D33D'
  },
  contractValueIsNotConnect: {
    backgroundColor: '#FF4B4B'
  },
  cancelButton: {
    backgroundColor: 'rgb(205, 0, 0)',
    '&:hover': {
      backgroundColor: 'rgba(205, 0, 0,0.6) !important'
    }
  },
  waitingFlagContainer: {
    color: '#7392B7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px 0 20px 0',
    rowGap: 20
  },
  waitingFlagText: {
    fontSize: 20
  },
  requiredEmountContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 25
  },
  requiredEmount: {
    fontSize: 19,
    fontWeight: 400,
    color: '#FFF'
  }
}))
export default useStyles
