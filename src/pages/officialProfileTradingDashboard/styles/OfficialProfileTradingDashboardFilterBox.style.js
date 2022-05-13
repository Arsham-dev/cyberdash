import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    backgroundColor: 'rgb(0, 15, 36)',
    border: '1px solid rgb(11, 30, 57)',
    borderRadius: 10,
    marginBottom: 68,
    width: 1180,
    [theme.breakpoints.down('sm')]: {
      width: 'unset'
    }
  },
  indicator: {
    // backgroundColor: 'rgb(11, 30, 57) !important',
    // height: 0
    height: 10,
    backgroundColor: 'red'
  },
  tabs: {
    // borderBottom: '1.5px solid rgb(25, 86, 226)',
    color: '#FFF'
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
  },
  tabIndicator: {
    backgroundColor: 'rgb(11, 30, 57)'
  },
  selectedTab: {
    color: '#FFF',
    backgroundColor: 'rgb(11, 30, 57)'
  },
  tab: {
    border: '1px solid rgb(11, 30, 57)',
    font: 'normal normal bold 18px/21px Roboto',
    // color: '#3666AC',
    textTransform: 'capitalize'
  },
  tabTextColorPrimary: {
    color: '#3666AC'
  }
}))
export default useStyles
