import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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
  },
  youtubePlayerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 61
  },
  youtubePlayer: {
    width: 746,
    height: 420,
    borderRadius: 10,
    border: '1px solid #000F24',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: 290
    }
  }
}))
export default useStyles
