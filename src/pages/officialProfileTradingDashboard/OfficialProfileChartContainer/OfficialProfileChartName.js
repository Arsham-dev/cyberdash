import { Paper, Tab, Tabs, Typography } from '@material-ui/core'
import { useState } from 'react'
import { TabPanel } from '../../officialProfile/components/CustomTabPanel'
import OfficialProfileChartNameList1 from './OfficialProfileChartNameList1'
import useStyles from './styles/OfficialProfileChartName.style'
const OfficialProfileChartName = () => {
  const [tabsValue, settabsValue] = useState(0)

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>Chart Name</Typography>
      </div>
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
          textColor="primary">
          <Tab
            label="List1"
            classes={{
              selected: classes.selectedTab,
              root: [
                classes.tab,
                tabsValue === 0 ? '' : classes.tabTextColorPrimary
              ].join(' ')
            }}
          />
          <Tab
            label="List2"
            classes={{
              selected: classes.selectedTab,
              root: [
                classes.tab,
                tabsValue === 1 ? '' : classes.tabTextColorPrimary
              ].join(' ')
            }}
          />
        </Tabs>
        <TabPanel value={tabsValue} index={0}>
          <OfficialProfileChartNameList1 />
        </TabPanel>
      </Paper>
    </div>
  )
}
export default OfficialProfileChartName
