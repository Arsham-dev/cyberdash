import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  },
  inputContainer: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    padding: '0 16px 0 12px',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10
  },
  input: {
    display: 'flex',
    flex: 1,
    outline: 'none',
    height: '58px !important',
    border: 'none',
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  icon: {
    marginLeft: 31,
    fontSize: 31,
    color: '#667EA0',
    '&:hover': {
      color: '#1956E2'
    }
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 9
  }
}))
export default useStyles
