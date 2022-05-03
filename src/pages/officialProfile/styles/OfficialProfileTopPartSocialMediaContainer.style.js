import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: 'calc(100% - 114px)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    columnGap: 30,
    marginTop: 30
  },
  buttonBase: {
    borderRadius: 20
  },
  etherscan: {
    width: 20,
    height: 20,
    padding: 6
  },
  websiteIcon: {
    color: '#E2E8F0',
    padding: 4
  }
}))
export default useStyles
