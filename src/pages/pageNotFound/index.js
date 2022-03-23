import { Typography } from '@material-ui/core'
import useStyles from './styles/index.style'

const PageNotFound = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>Page Not Found</Typography>
    </div>
  )
}
export default PageNotFound
