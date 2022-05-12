import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    padding: '19px 34px 29px 15px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0B1E39'
  },
  clockIcon: {
    fontSize: 19,
    color: '#1956E2'
  },
  daySelectorContainer: {
    display: 'flex',
    columnGap: 10,
    alignItems: 'center'
  },
  daySelectorItem: {
    width: 30,
    height: 20,
    borderRadius: 10,
    fontSize: 12,
    color: '#D1D1D1',
    '&:hover': {
      backgroundColor: 'rgba(25, 86, 226,0.5)'
    },
    transition: 'all 0.3s ease-in-out'
  },
  daySelectorItemSelected: {
    backgroundColor: '#1956e2'
  },
  selector: {
    height: 30,
    borderRadius: 10,
    backgroundColor: '#244677',
    color: '#D1D1D1',
    fontSize: 14,
    width: 100
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
  floorVarSelectorContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  menuPaper: {
    width: 111,
    backgroundColor: '#244677',
    padding: '0 8.5px 0 10.5px'
  },
  topPartContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  floorVarSelectorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 18
  }
}))
export default useStyles
