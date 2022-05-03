import OfficialProfileTradingDashboardFilterBox from './OfficialProfileTradingDashboardFilterBox'
import useStyles from './styles/index.style'

const OfficialProfileTradingDashboard = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <OfficialProfileTradingDashboardFilterBox />
    </div>
  )
}
export default OfficialProfileTradingDashboard
