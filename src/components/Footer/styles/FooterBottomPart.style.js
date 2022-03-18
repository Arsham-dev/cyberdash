import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#0B1E39',
    display: 'flex',
    height: 61,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px 0 10px',
    // margin: "0 93px 34px 93px",
    borderRadius: 10
    // flex: 1,
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
