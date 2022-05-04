import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    color: '#FFF',
    marginBottom: 12,
    font: 'normal normal bold 22px/25px Roboto'
  },
  listContainer: {
    display: 'flex',
    padding: '9px 10px',
    backgroundColor: '#0B1E39',
    maxHeight: 1428,
    flexDirection: 'column',
    rowGap: 10,
    // maxWidth: 280,
    borderRadius: 10,
    overflowY: 'auto'
    // flex: 1
    // maxWidth: 300
  }
}))
export default useStyles
