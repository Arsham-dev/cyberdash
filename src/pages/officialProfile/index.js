import { Paper, Tab, Tabs } from '@material-ui/core'
import { useState } from 'react'
import OfficialProfileInfo from './OfficialProfileInfo'
import OfficialProfileTopPart from './OfficialProfileTopPart'
import ChartIcon from '@material-ui/icons/BarChart'
import OfficialProfileTopPartSocialMediaContainer from './OfficialProfileTopPartSocialMediaContainer'
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import useStyles from './styles/index.style'
import OfficialProfileTradingDashboard from '../officialProfileTradingDashboard'
import { TabPanel } from './components/CustomTabPanel'

const OfficialProfile = () => {
  const classes = useStyles()
  const [tabsValue, settabsValue] = useState(0)
  return (
    <div className={classes.root}>
      <OfficialProfileTopPart />
      <OfficialProfileTopPartSocialMediaContainer />
      <OfficialProfileInfo />
      <Paper className={classes.paper}>
        <Tabs
          value={tabsValue}
          onChange={(event, newValue) => settabsValue(newValue)}
          indicatorColor="secondary"
          className={classes.tabs}
          classes={{ indicator: classes.indicator }}
          textColor="primary"
          centered>
          <Tab
            label={
              <div className={classes.tabLabel}>
                <DashboardIcon />
                Trading Dashboard
              </div>
            }
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
          {/* <OfficialProfileTradingDashboard /> */}
        </TabPanel>
      </Paper>
    </div>
  )
}
export default OfficialProfile
