import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '70px 93px 68px 93px',
    [theme.breakpoints.down('sm')]: {
      margin: '70px 5px 68px 5px'
    }
  },
  main: {
    display: 'flex',
    columnGap: 20
  }
}))
export default useStyles
