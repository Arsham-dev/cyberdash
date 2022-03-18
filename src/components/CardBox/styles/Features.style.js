import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 380,
    borderRadius: 10,
    '&:hover': {
      backgroundColor: '#0B1E39'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    }
  },
  cardTopPart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '217px',
    borderRadius: 10,
    paddingLeft: 17,
    paddingBottom: 15,
    background: 'linear-gradient(to right, #27589D, #0F2B52)'
  },
  logo: {
    height: 25
  },
  cardTopPartTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    width: '60%'
  },
  cardBottomPart: {
    padding: '13px 16px 11px 17px',
    backgroundColor: 'transparent'
  }
}))
export default useStyles
