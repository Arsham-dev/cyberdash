import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#0B1E39',
    display: 'flex',
    height: 61,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px 0 10px',
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      height: 100,
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
  },
  desciprtion: {
    fontSize: 13,
    fontWeight: 'normal',
    color: '#fff'
  },
  mediaContiner: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 6
  }
}))
export default useStyles
