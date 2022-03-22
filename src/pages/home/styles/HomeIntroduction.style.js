import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  title: {
    color: 'white',
    fontSize: 69,
    fontWeight: 'bold',
    marginTop: 45
  },
  descriptionContainer: {
    marginTop: 24
  },
  description: {
    fontSize: 14,
    color: '#D1D1D1',
    marginBottom: 24
  },
  button: {
    backgroundColor: '#1956E2',
    height: 53,
    borderRadius: 27,
    fontSize: 16,
    color: '#fff',
    padding: 20,
    marginBottom: 31,
    '&:hover': {
      backgroundColor: 'rgba(25, 86, 226,0.6) !important'
    }
  }
}))
export default useStyles
