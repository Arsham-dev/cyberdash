import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 39,
    marginBottom: 28,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
    // flex: 1,
  },
  logo: {
    // height: 12.29,
    // width: 83.3,
    marginBottom: 31.76
  },
  description: {
    color: '#D1D1D1',
    height: 72,
    fontSize: 14
  }
}))
export default useStyles
