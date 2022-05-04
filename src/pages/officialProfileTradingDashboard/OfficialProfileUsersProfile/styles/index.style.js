import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(() => ({
  root: {
    width: 280,
    height: 60,
    display: 'flex',
    borderRadius: 10,
    backgroundColor: '#244677',
    padding: '5px 11px 5px 5px',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imgContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.7)'
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  rankInfoContainer: {
    marginLeft: 6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    rowGap: 8
  },
  rankInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 3
  },
  rankText: {
    font: 'normal normal normal 14px/16px Roboto',
    color: '#89BAFF'
  },
  rankValue: {
    font: 'normal normal bold 14px/16px Roboto',
    color: '#FFF'
  },
  rankNumber: {
    font: 'normal normal bold 12px/14px Roboto',
    color: '#D1D1D1',
    marginLeft: 2
  },
  priceContainer: {
    marginLeft: 6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    rowGap: 9
  },
  priceText: {
    font: 'normal normal normal 14px/16px Roboto',
    color: '#89BAFF',
    marginLeft: 8
  },
  priceValue: {
    display: 'flex',
    alignItems: 'center',
    font: 'normal normal bold 14px/16px Roboto',
    color: '#FFF'
  },
  ether: {
    width: 8,
    height: 13
  },
  moreOptions: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    height: '100%',
    flex: 1,
    marginTop: -3,
    rowGap: 6,
    marginLeft: 15
  },
  linkdin: {
    width: 23,
    height: 23,
    fontSize: 23,
    color: '#244677'
  },
  moreOptionsButtonContainer: {
    display: 'flex',
    // alignItems: 'center',
    columnGap: 3
  },
  moreOptionsBuyButton: {
    width: 49,
    // height: 23,
    borderRadius: 27,
    backgroundColor: '#1956E2',
    textAlign: 'center',
    font: 'normal normal bold 12px/14px Roboto',
    color: '#FFF'
  },
  timeText: {
    font: 'normal normal normal 10px/11px Roboto',
    color: '#D1D1D1'
  }
}))
export default useStyles
