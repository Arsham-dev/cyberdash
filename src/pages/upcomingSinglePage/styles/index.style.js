import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '40px 0',
    display: 'flex',
    alignItems: 'flex-start',
    columnGap: 40,
    flex: 1,
    width: 'calc(100% - 100px)',
    position: 'relative',
    marginTop: -40,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: 'calc(100% - 10px)'
    }
  },
  backgroundImageContainer: {
    // with:'100',
    marginTop: 20,
    // margin: '0 3px',
    height: 150,
    backgroundColor: 'rgb(127, 127, 239)',
    display: 'flex',
    // width: '100%',
    // padding: '0 50px',
    width: 'calc(100% - 100px)',
    borderRadius: 5,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 22px)'
    }
  },
  collection_background_image: {
    height: 150,
    width: 'calc(100% - 100px)',
    borderRadius: 5
  },

  leftPaper: {
    width: 325,
    padding: 15,
    position: 'relative',
    backgroundColor: 'rgb(28, 28, 51)'
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse'
  },
  img: {
    position: 'absolute',
    top: 30,
    width: 130,
    height: 130,
    left: 'calc(50%)',
    borderRadius: 65,
    marginTop: -35,
    backgroundColor: '#000',
    [theme.breakpoints.down('sm')]: {
      // top: '100%',
      top: -50,
      left: 'calc(50% - 65px)'
    }
  },
  buttonBase: {
    borderRadius: 20
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10
  },
  upcomingButton: {
    backgroundColor: '#63d471',
    backgroundImage: 'linear-gradient(315deg, #63d471 0%, #233329 74%)',
    padding: '5px 10px',
    borderRadius: 15,
    marginBottom: 15
  },
  upcomingButtonText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFF'
  },
  moreInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    rowGap: 10,
    '& div': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'rgb(255,255,255,0.9)',
      fontWeight: 'bold',
      fontSize: 16
    },
    marginBottom: 10
  },
  rightPart: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 30,
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: 'calc(100% - 10px)'
    }
    // width: '100%'
  },
  rightPartTitle: {
    fontSize: 50,
    color: '#FFF'
  },
  rightPaper: {
    padding: 35,
    // position: 'relative',
    backgroundColor: 'rgb(28, 28, 51)',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 65
  },
  rightPaperText: {
    fontSize: 16,
    fontWeight: 700,
    color: '#FFF'
  },
  collection_image: {
    width: 120,
    height: 130,
    borderRadius: 5
  },
  collection_imageContainer: {
    backgroundColor: 'transparent'
  },
  statusContianer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  status: { marginTop: 30 },
  gasFeeButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 9
  },
  gasFeeButton: {
    backgroundColor: 'rgb(25, 86, 226)',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: 'rgba(25, 86, 226,0.5)'
    }
  },
  gasFeeIcon: {
    fontSize: 16,
    color: '#FFF'
  },
  etherscan: {
    width: 20,
    height: 20,
    padding: 6
  }
}))
export default useStyles
