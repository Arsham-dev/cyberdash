import { Paper, Tab, Tabs } from '@material-ui/core'
import { useState } from 'react'
import OfficialProfileInfo from './OfficialProfileInfo'
import OfficialProfileTopPart from './OfficialProfileTopPart'
import ChartIcon from '@material-ui/icons/BarChart'
import OfficialProfileTopPartSocialMediaContainer from './OfficialProfileTopPartSocialMediaContainer'
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import useStyles from './styles/index.style'

const OfficialProfile = () => {
  const classes = useStyles()
  const [tabsValue, settabsValue] = useState()
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
          // classes={{}}
          // TabIndicatorProps={{className:}}
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
          {/* <Tab label="Item Three" /> */}
        </Tabs>
      </Paper>
    </div>
  )
}
export default OfficialProfile
