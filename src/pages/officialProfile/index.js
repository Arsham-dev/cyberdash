import { Paper, Tab, Tabs, useMediaQuery, useTheme } from '@material-ui/core'
import { useState } from 'react'
import OfficialProfileInfo from './OfficialProfileInfo'
import OfficialProfileTopPart from './OfficialProfileTopPart'
import ChartIcon from '@material-ui/icons/BarChart'
import OfficialProfileTopPartSocialMediaContainer from './OfficialProfileTopPartSocialMediaContainer'
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import useStyles from './styles/index.style'
import OfficialProfileTradingDashboard from '../officialProfileTradingDashboard'
import { TabPanel } from './components/CustomTabPanel'
import OfficialProfileAnalyticalCharts from '../officialProfileAnalyticalCharts'

const OfficialProfile = () => {
  const classes = useStyles()
  const [tabsValue, settabsValue] = useState(0)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={classes.root}>
      <OfficialProfileTopPart />
      <OfficialProfileTopPartSocialMediaContainer />
      <OfficialProfileInfo />
      <Paper className={classes.paper}>
        <Tabs
          value={tabsValue}
          onChange={(event, newValue) => settabsValue(newValue)}
          indicatorColor="primary"
          className={classes.tabs}
          classes={{ indicator: classes.indicatore }}
          textColor="primary"
          centered>
          <Tab
            label={
              <div className={classes.tabLabel}>
                <DashboardIcon />
                Trading Dashboard
              </div>
            }
            color="red"
          />
          <Tab
            label={
              <div className={classes.tabLabel}>
                <ChartIcon />
                Analytical Charts
              </div>
            }
          />
        </Tabs>
        <TabPanel value={tabsValue} index={0}>
          <OfficialProfileTradingDashboard />
        </TabPanel>
        <TabPanel value={tabsValue} index={1}>
          <OfficialProfileAnalyticalCharts isSmallScreen={isSmallScreen} />
        </TabPanel>
      </Paper>
    </div>
  )
}
export default OfficialProfile
