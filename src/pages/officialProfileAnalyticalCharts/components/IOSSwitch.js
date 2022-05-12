import { Switch, withStyles } from '@material-ui/core'

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 30,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(28px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#1956E2',
        opacity: 1,
        border: 'none'
      }
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff'
    }
  },
  thumb: {
    width: 26,
    height: 26,
    margin: '1.5px 2px 1.5px 2px'
  },
  track: {
    borderRadius: 15,
    // border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: '#244677',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  )
})
export default IOSSwitch
