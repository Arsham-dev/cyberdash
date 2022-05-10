import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '14px 14px 16px 13px',
    borderRadius: '0 0 10px 10px',
    display: 'flex',
    backgroundColor: 'rgb(11, 30, 57)',
    flexDirection: 'column'
    // width: 540
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
      flexDirection: 'column',
      rowGap: 6,
      // width: '100%',
      // flex: 1,
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between'
      }

      // justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      rowGap: 20,
      marginBottom: 15
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
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
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    display: 'grid',
    // alignItems: 'center',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 20,
    width: 510,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 300
    }
  },
  ETHPriceText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 16,
    writingMode: 'vertical-lr',
    textOrientation: 'mixed'
  },
  smallChartContainer: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
    width: '100%'
  }
}))
export default useStyles
