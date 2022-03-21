import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 93px 34px 93px',
    borderTop: '1px solid #0B1E39',
    [theme.breakpoints.down('sm')]: {
      margin: '0 20px 34px 20px'
    }
  }
}))
export default useStyles
