import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modal: {
    margin: 'auto',
    marginTop: '10vh',
    backgroundColor: '#0B1E39',
    padding: '19px 22px 19px 23px',
    width: 564,
    overflow: 'hidden auto',
    alignSelf: 'center',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 16,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '80vw'
    }
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  linkContainer: {
    margin: '20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  linkText: {
    fontSize: 25,
    color: 'rgb(62, 149, 163)'
  },
  linkValue: {
    fontSize: 25,
    color: 'rgb(65, 211, 121)'
  }
}))
export default useStyles
