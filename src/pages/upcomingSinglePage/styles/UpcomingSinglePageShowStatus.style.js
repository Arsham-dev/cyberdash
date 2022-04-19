import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 7,
    alignItems: 'center',
    color: '#FFF',
    marginBottom: 10
  },
  animatedItem: {
    animation: `$myEffect 2000ms infinite`,
    backgroundColor: 'rgb(220,10,10)',
    width: 10,
    height: 10,
    borderRadius: 5,
    animationTimingFunction: 'ease-in-out'
  },
  '@keyframes myEffect': {
    '-50%': {
      opacity: 0.5
    },
    '0%': {
      opacity: 0.3
    },
    '100%': {
      opacity: 1
    }
  }
}))
export default useStyles
