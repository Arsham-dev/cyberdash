import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    width: '100%'
  },
  textFieldPlacerHolder: {
    color: '#FFF',
    fontSize: 14
  },
  textField: {
    color: '#FFF',
    '& label.Mui-focused': {
      color: '#FFF',
      fontSize: 14
    },
    '& .MuiInputLabel-outlined': {
      color: '#FFF',
      fontSize: 14
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FFF'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFF'
      },
      '&:hover fieldset': {
        borderColor: '#FFF'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFF'
      }
    }
  }
}))
export default useStyles
