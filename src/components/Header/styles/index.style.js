import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    background: '#0B1E39',
    padding: '0 15px',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  mobileSize: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  },
  connectWallet: {
    height: 50,
    color: '#fff',
    borderColor: '#fff',
    borderRadius: 27,
    fontSize: 16,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.2) !important'
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      fontSize: 14,
      borderRadius: 24
    }
  },
  headerButton: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'none'
  },
  searchInputContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 2
  },
  headerButtonContainer: {
    // width: '100%',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    flex: 3
  },
  mediaContiner: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 6,
    marginRight: 20
  },
  creditContainer: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 7,
    justifyContent: 'center',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flex: 'none'
    }
  },
  creditValue: {
    fontSize: 14,
    color: '#fff'
  },
  logoContainer: {
    padding: 5,
    borderRadius: 5
  }
}))
export default useStyles
