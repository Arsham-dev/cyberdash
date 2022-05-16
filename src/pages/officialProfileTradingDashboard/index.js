import OfficialProfileChartName from './OfficialProfileChartContainer/OfficialProfileChartName'
import OfficialProfileMomentumIndex from './OfficialProfileChartContainer/OfficialProfileMomentumIndex'
import OfficialProfileOfficialProfileSellWall from './OfficialProfileChartContainer/OfficialProfileOfficialProfileSellWall'
import OfficialProfileTradingDashboardFilterBox from './OfficialProfileTradingDashboardFilterBox'
import OfficialProfileTradingDashboardListing from './OfficialProfileTradingDashboardListing'
import OfficialProfileTradingDashboardTrade from './OfficialProfileTradingDashboardTrade'
import useStyles from './styles/index.style'

const OfficialProfileTradingDashboard = ({ isSmallScreen }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <OfficialProfileTradingDashboardFilterBox />
      <div className={classes.main}>
        <OfficialProfileTradingDashboardListing />
        <div>
          <OfficialProfileChartName />
          <OfficialProfileMomentumIndex />
          <OfficialProfileOfficialProfileSellWall
            isSmallScreen={isSmallScreen}
          />
        </div>
        <OfficialProfileTradingDashboardTrade />
      </div>
    </div>
  )
}
export default OfficialProfileTradingDashboard
