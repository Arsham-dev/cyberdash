import { makeStyles } from '@material-ui/core'

const useStlyes = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // width: '100%',
    margin: '15px 3px',
    alignItems: 'center',
    border: '1px solid rgba(255,255,255,0.3)',
    padding: 16,
    backgroundColor: 'rgb(255,255,255,0.02)',
    borderRadius: 5
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 5,
    justifyContent: 'space-around'
  },
  tabButton: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: '#FFF'
  }
}))
export default useStlyes
