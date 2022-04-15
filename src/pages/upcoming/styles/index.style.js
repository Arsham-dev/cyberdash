import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    // maxWidth: 'auto'
    width: '100%',
    margin: '30px 0',
    backgroundColor: 'transparent'
    // margin: '0 20px'
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
    rowGap: 3,
    alignItems: 'flex-start',
    marginBottom: 20,
    margin: '0 89px'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 500,
    color: '#FFF'
  },
  headerDiscription: {
    fontSize: 17,
    color: 'rgb(197,197,224)'
  }
}))
export default useStyles
