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
  }
}))
export default useStyles
