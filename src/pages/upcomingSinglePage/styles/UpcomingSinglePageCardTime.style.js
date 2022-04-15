import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // width: '100%',
    margin: '0 3px',
    alignItems: 'center',
    border: '1px solid rgba(255,255,255,0.3)',
    padding: 16,
    backgroundColor: 'rgb(255,255,255,0.02)',
    borderRadius: 5,
    rowGap: 7
  },
  title: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 12,
    fontWeight: 400
  },
  timeIcon: {
    fontSize: 20,
    color: 'rgb(90, 102, 243)'
  },
  timeContainer: {
    display: 'flex',
    columnGap: 5
  },
  timeCounter: {
    fontSize: 15,
    fontWeight: 500,
    color: '#FFF'
  },
  dateText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    fontWeight: 500
  }
}))
export default useStyles
