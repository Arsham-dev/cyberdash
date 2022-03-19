import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#1956E2',
    display: 'flex',
    width: '100%',
    height: 53,
    border: 'none',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    // marginBottom: 90,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(25, 86, 226,0.6) !important'
    }
  }
}))
export default useStyles
