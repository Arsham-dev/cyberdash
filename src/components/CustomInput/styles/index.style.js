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
    borderRadius: 10,
    border: '1px solid rgb(160, 149, 149)'
  },
  input: {
    display: 'flex',
    flex: 1,
    width: '100%',
    outline: 'none !important',
    height: '58px !important',
    border: 'none !important',
    fontSize: 20,
    backgroundColor: 'transparent',
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      margin: 0
    },
    '&[type=number]': {
      '-webkit-appearance': 'textfield',
      '-moz-appearance': 'textfield'
    }
  },
  selector: {},
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
    boxShadow: ' 2px 2px 27px 1px rgba(0,0,0,0.4)',
    fontSize: 10.5
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
    borderColor: 'rgb(255, 50, 50)'
  },
  helperTextError: {
    color: 'rgb(255, 50, 50)'
  }
}))
export default useStyles
