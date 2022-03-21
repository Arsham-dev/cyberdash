import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 39,
    marginBottom: 28,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr'
    }
  },
  logo: {
    marginBottom: 31.76
  },
  description: {
    color: '#D1D1D1',
    height: 72,
    fontSize: 14
  }
}))
export default useStyles
