import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 72,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    width: '100%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fff',
    marginBottom: 47
  },
  searchBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 15,
    flex: 1,
    width: '40%',
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },
  searchBox: {
    height: 58,
    width: '100%',
    backgroundColor: '#fff',
    border: '1px solid #707070',
    borderRadius: 10,
    outline: '1px solid #707070',
    fontSize: 20,
    padding: '0 10px  0 10px'
    // [theme.breakpoints.down('sm')]: {
    //   height: 40
    // }
  },
  buttonContainer: {
    width: 155,
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },
  button: {
    backgroundColor: '#1956E2',
    display: 'flex',
    width: '100%',
    height: 53,
    border: 'none',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 90,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(25, 86, 226,0.6) !important'
    }
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  circularProgress: {
    color: '#000F24'
  },
  checkBoxColor: {
    color: '#FFF !important'
  }
}))
export default useStyles
