import { Typography } from '@material-ui/core'
import OfficialProfileTradeUsersProfile from './OfficialProfileTradeUsersProfile'
import useStyles from './styles/OfficialProfileTradingDashboardListing.style'

const OfficialProfileTradingDashboardTrade = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>Trade</Typography>
      </div>
      <div className={classes.listContainer}>
        {Array(40)
          .fill(null)
          .map((item, index) => (
            <OfficialProfileTradeUsersProfile key={index.toString()} />
          ))}
      </div>
    </div>
  )
}
export default OfficialProfileTradingDashboardTrade
