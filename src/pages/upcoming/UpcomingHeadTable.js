import { Typography } from '@material-ui/core'
import useStyles from './styles/UpcomingHeadTable.style'

const UpcomingHeadTable = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.collections}>
          <Typography className={classes.text}>collections</Typography>
        </div>
      </div>
    </div>
  )
}
export default UpcomingHeadTable
