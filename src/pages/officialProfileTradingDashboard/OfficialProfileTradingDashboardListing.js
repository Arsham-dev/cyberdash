import { Typography } from '@material-ui/core'
import OfficialProfileUsersProfile from './OfficialProfileUsersProfile'
import useStyles from './styles/OfficialProfileTradingDashboardListing.style'

const OfficialProfileTradingDashboardListing = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>Listing</Typography>
      </div>
      <div className={classes.listContainer}>
        {Array(40)
          .fill(null)
          .map((item, index) => (
            <OfficialProfileUsersProfile key={index.toString()} />
          ))}
      </div>
    </div>
  )
}
export default OfficialProfileTradingDashboardListing
