import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    width: '100%'
  },
  valueLabel: { color: '#FFF' }
}))
export default useStyles
