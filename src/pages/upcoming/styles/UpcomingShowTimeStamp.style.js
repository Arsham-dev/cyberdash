import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 5
  },
  dateText: {
    fontSize: 12,
    color: 'rgb(255,255,255,0.7)',
    fontWeight: 700
  }
}))
export default useStyles
