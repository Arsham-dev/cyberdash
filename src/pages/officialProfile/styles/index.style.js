import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column'
  },
  paper: {
    marginTop: 70,
    flexGrow: 1,
    backgroundColor: 'rgb(0, 15, 36)'
  },
  indicator: {
    backgroundColor: 'rgb(25, 86, 226)',
    height: 5
  },
  tabs: {
    borderBottom: '1.5px solid rgb(25, 86, 226)'
  },
  tabLabel: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      color: '#FFF',
      fontSize: 24
    },
    font: 'normal normal bold 17px/20px Roboto',
    columnGap: 4,
    color: '#FFF',
    textTransform: 'capitalize'
  }
}))
export default useStyles
