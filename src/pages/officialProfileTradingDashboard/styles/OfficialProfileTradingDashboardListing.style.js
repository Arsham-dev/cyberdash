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
    overflowX: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar-thumb': {
      // width: 1,
      backgroundColor: 'rgb(73, 100, 137)'
    },
    '&::-webkit-scrollbar': {
      width: 4,
      backgroundColor: 'rgb(36, 70, 119)',
      borderRadius: 10,
      height: 1
    },
    '&::-moz-scrollbar-thumb': {
      width: 1
    },
    '&::-moz-scrollbar': {
      width: 1
    },
    scrollbarColor: 'rgb(73, 100, 137) rgb(36, 70, 119)',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 500
    },
    scrollbarWidth: 'thin',
    scrollMarginLeft: 3
  }
}))
export default useStyles
