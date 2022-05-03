import { Paper, Tab, Tabs } from '@material-ui/core'
import { useState } from 'react'
import useStyles from './styles/OfficialProfileTradingDashboardFilterBox.style'

const OfficialProfileTradingDashboardFilterBox = () => {
  const classes = useStyles()
  const [tabsValue, settabsValue] = useState()

  return (
    <Paper className={classes.paper}>
      <Tabs
        value={tabsValue}
        onChange={(event, newValue) => settabsValue(newValue)}
        indicatorColor="secondary"
        className={classes.tabs}
        TabIndicatorProps={{
          className: classes.tabIndicator,
          style: { backgrouncColor: 'red' }
        }}
        classes={{ indicator: classes.indicator }}
        sele
        // classes={{}}
        // TabIndicatorProps={{className:}}
        textColor="primary">
        <Tab
          label="Price"
          classes={{
            selected: classes.selectedTab,
            root: [
              classes.tab,
              tabsValue === 0 ? '' : classes.tabTextColorPrimary
            ].join(' ')
          }}
        />
        <Tab
          label="Rank"
          classes={{
            selected: classes.selectedTab,
            root: [
              classes.tab,
              tabsValue === 1 ? '' : classes.tabTextColorPrimary
            ].join(' ')
          }}
        />
        <Tab
          label="Token"
          classes={{
            selected: classes.selectedTab,
            root: [
              classes.tab,
              tabsValue === 2 ? '' : classes.tabTextColorPrimary
            ].join(' ')
          }}
        />
        <Tab
          label="Trait"
          classes={{
            root: [
              classes.tab,
              tabsValue === 3 ? '' : classes.tabTextColorPrimary
            ].join(' '),
            selected: classes.selectedTab
          }}
        />
        {/* <Tab label="Item Three" /> */}
      </Tabs>
    </Paper>
  )
}
export default OfficialProfileTradingDashboardFilterBox
