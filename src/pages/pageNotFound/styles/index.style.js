import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 0'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'rgb(87, 156, 168)'
  }
}))
export default useStyles
