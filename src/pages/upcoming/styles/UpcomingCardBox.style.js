import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderContainer: {
    width: 815,
    backgroundColor: 'rgb(11, 30, 57)',
    padding: '15px 8px',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 100px)'
      // alignItems: 'center'
    }
  },
  title: {
    fontSize: 19,
    color: '#FFF',
    fontWeight: 900,
    marginLeft: 10,
    marginBottom: 15,
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
    '& svg': {
      color: 'rgb(90, 102, 243)'
    }
  }
}))
export default useStyles
