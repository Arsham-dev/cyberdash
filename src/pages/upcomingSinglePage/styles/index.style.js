import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '40px 0',
    display: 'flex',
    alignItems: 'center',
    columnGap: 40,
    flex: 1,
    width: 'calc(100% - 100px)',
    marginTop: -80,
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
    width: 120,
    height: 130,
    borderRadius: 5,
    marginTop: -35,
    backgroundColor: '#000'
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
    fontSize: 18,
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
      color: 'rgb(255,255,255,0.9)'
    },
    marginBottom: 10
  },
  rightPart: {
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
  }
}))
export default useStyles
