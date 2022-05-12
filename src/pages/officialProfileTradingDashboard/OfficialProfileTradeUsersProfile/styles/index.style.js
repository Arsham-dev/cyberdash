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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    columnGap: 6
  },
  priceText: {
    font: 'normal normal normal 14px/16px Roboto',
    color: '#89BAFF'
  },
  priceValue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 2,
    font: 'normal normal bold 14px/16px Roboto',
    color: '#FFF'
  },
  ether: {
    width: 8,
    height: 13,
    marginRight: 2
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    // height: '100%',
    // flex: 1
    // marginTop: -3,
    // rowGap: 6,
    // marginLeft: 15
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
  timeValue: {
    font: 'normal normal normal 10px/11px Roboto',
    color: '#D1D1D1',
    marginRight: 10
  },
  rightPartContainer: {
    marginLeft: 14,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 6
  },
  timeText: {
    fonr: 'normal normal normal 12px/14px Roboto',
    color: '#89BAFF'
  },
  openSea: {
    color: '#244677',
    width: 12,
    height: 11
  },
  openSeaButton: {
    backgroundColor: '#5C86C3',
    width: 18,
    height: 18,
    borderRadius: 9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  etherscanLogo: {
    color: '#244677',
    width: 17,
    height: 13
  }
}))
export default useStyles
