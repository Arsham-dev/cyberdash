import OfficialProfileTradingDashboardFilterBox from './OfficialProfileTradingDashboardFilterBox'
import OfficialProfileTradingDashboardListing from './OfficialProfileTradingDashboardListing'
import useStyles from './styles/index.style'

const OfficialProfileTradingDashboard = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <OfficialProfileTradingDashboardFilterBox />
      <div className={classes.main}>
        <OfficialProfileTradingDashboardListing />
      </div>
    </div>
  )
}
export default OfficialProfileTradingDashboard
