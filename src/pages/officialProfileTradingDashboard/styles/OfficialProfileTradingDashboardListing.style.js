import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      marginTop: 25
    }
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
    overflowY: 'auto',
    '&::-webkit-scrollbar-thumb': {
      width: 0
    },
    '&::-webkit-scrollbar': {
      width: 0
    },
    '&::-moz-scrollbar-thumb': {
      width: 0
    },
    '&::-moz-scrollbar': {
      width: 0
    },
    scrollbarWidth: 'none',

    // overflowY: 'scroll',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 500
    }

    // flex: 1
    // maxWidth: 300
  }
}))
export default useStyles
