import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {},
  topImageContainer: {
    height: 233,
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topImage: {
    height: 233,
    width: '100%'
  },
  profileImageContianer: {
    width: 130,
    height: 130,
    borderRadius: 70,
    // borderWidth: 5,
    // borderStyle: 'solid',
    // borderColor: '#000F24',
    backgroundColor: '#000F24',
    position: 'absolute',
    bottom: -65,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    width: 115,
    height: 115,
    borderRadius: 70
    // borderWidth: 5,
    // borderStyle: 'solid',
    // borderColor: '#000F24',
    // position: 'absolute',
    // bottom: -65
  }
}))
export default useStyles
