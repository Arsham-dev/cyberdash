import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: 'auto',
    minWidth: '100%',
    height: '100%'
  },
  item: {
    display: 'flex',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFF',
    margin: '0 3px',
    color: '#FFF',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    // padding: 10,
    aspectRatio: 1
  },
  expandMoreIcon: {
    fontSize: 16,
    cursor: 'pointer',
    marginLeft: 0
  }
}))
export default useStyles
