import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // width: '100%',
    margin: '15px 3px',
    alignItems: 'center',
    border: '1px solid rgba(255,255,255,0.3)',
    padding: 16,
    backgroundColor: 'rgb(255,255,255,0.02)',
    borderRadius: 5,
    rowGap: 7
  },
  inputContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 10
  },
  valueToShow: {
    color: '#FFF',
    fontSize: 17,
    marginTop: 10
  },
  input: {
    color: 'rgba(255,255,255,0.87)'
  }
}))
export default useStyles
