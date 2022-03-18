import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 72,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fff',
    marginBottom: 47
  },
  searchBoxContainer: {
    display: 'flex',
    width: 550,
    marginBottom: 58,
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
    // backgroundColor: "red",
  },
  searchBox: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    border: '1px solid #707070',
    borderRadius: 10,
    outline: '1px solid #707070',
    fontSize: 20,
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      height: 40
    }
  },
  buttonContainer: {
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
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 90,
    cursor: 'pointer'
  }
}))
export default useStyles
