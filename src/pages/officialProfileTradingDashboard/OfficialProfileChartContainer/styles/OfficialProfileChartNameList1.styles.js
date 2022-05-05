import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  paper: {
    padding: '14px 14px 16px 13px',
    borderRadius: '0 0 10px 10px',
    display: 'flex',
    backgroundColor: 'rgb(11, 30, 57)',
    flexDirection: 'column'
    // width: '100%',
    // height: 200
  },
  topPart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: 3,
    '& div': {
      display: 'flex',
      alignItems: 'center',
      columnGap: 18

      // justifyContent: 'space-between',
    }
  },
  topPartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  },
  selector: {
    height: 30,
    borderRadius: 10,
    backgroundColor: '#244677',
    color: '#D1D1D1',
    fontSize: 14
  },
  menuItem: {
    height: 34,
    backgroundColor: '#244677',
    borderBottom: '1px solid #0B1E39',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'cener',
    justifyContent: 'center',
    color: '#D1D1D1',
    fontSize: 14
  },
  menuPaper: {
    width: 111,
    backgroundColor: '#244677',
    padding: '0 8.5px 0 10.5px'
  },
  bottomText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center'
  },
  chartContainer: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
    width: '100%'
  },
  ETHPriceText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 16,
    writingMode: 'vertical-lr',
    textOrientation: 'mixed'
  }
}))
export default useStyles
