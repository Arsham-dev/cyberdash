import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // flex: 1,
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
    // flex: 1
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
  }
}))
export default useStyles
