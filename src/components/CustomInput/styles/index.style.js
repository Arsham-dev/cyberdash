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
    outline: 'none !important',
    height: '58px !important',
    border: 'none !important',
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  selector: {
    // cursor: 'pointer'
    // outline: 'none !important',
    // border: 'none !important'
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
  },
  selectorOption: {
    // backgroundColor: 'red',
    // height: '20 !important',
    // borderRadius: 20
  },
  disabled: {
    color: '#BDBDBD'
  },
  tooltip: {
    backgroundColor: '#FFF',
    color: 'rgb(107,107,107)',
    maxWidth: 160,
    padding: 10,
    borderRadius: 7,
    boxShadow: ' 2px 2px 27px 1px rgba(0,0,0,0.4)'
    // color: theme.palette.common.black
  },
  helperTextContainer: {
    marginLeft: 10,
    marginTop: 3
  },
  helperText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: 2000
  },
  error: {
    color: 'rgb(255, 50, 50)',
    borderColor: 'rgb(255, 50, 50)'
  }
}))
export default useStyles
