import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 'auto'
    width: '100%',
    margin: '30px 0',
    backgroundColor: 'transparent'
    // margin: '0 20px',
  },
  main: {
    // width: '100%',
    padding: '0 89px'
  },
  table: {
    // width: '100%'
  },
  container: {
    backgroundColor: 'transparent'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 6,
    alignItems: 'flex-start',
    marginBottom: 15,
    margin: '0 89px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 20px',
      marginBottom: 20
    }
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 700
  },
  pageTitle: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 700
  },
  headerDiscription: {
    color: 'rgb(197,197,224)',
    fontSize: 20,
    fontWeight: 500
  },
  filterListContainer: {
    marginBottom: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 89px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      rowGap: 10,
      margin: '0 20px',
      marginBottom: 20
    }
  },
  filterListContainerButton: {
    color: '#FFF',
    width: 100,
    borderColor: 'rgb(11, 30, 57)',
    backgroundColor: 'rgb(11, 30, 57)',
    textTransform: 'capitalize'
  },
  filterListContainerButtonSelected: {
    backgroundColor: 'rgb(25, 86, 226)',
    '&:hover': {
      backgroundColor: 'rgba(25, 86, 226,0.6)'
    }
  },
  pageTitleDescription: {
    fontWeight: 'Normal',
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)'
  }
}))
export default useStyles
