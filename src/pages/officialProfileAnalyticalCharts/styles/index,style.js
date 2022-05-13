import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 93px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 5px'
    }
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 19,
    marginTop: 60.5
  },
  chartTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF'
  }
}))
export default useStyles
