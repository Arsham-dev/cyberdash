import { Typography } from '@material-ui/core'
import OfficialProfileAnalyticalChartsChartName from './officialProfileAnalyticalChartsChartName'
import OfficialProfileAnalyticalChartsGeneralChart from './officialProfileAnalyticalChartsGeneralChart'
import useStyles from './styles/index,style'

const OfficialProfileAnalyticalCharts = ({ isSmallScreen }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.chartContainer}>
        <Typography className={classes.chartTitle}>
          Bored Ape Yacht Club sales floor, average and volume
        </Typography>
        <OfficialProfileAnalyticalChartsGeneralChart
          isSmallScreen={isSmallScreen}
        />
      </div>
      <div className={classes.chartContainer}>
        <Typography className={classes.chartTitle}>Chart Name</Typography>
        <OfficialProfileAnalyticalChartsChartName
          isSmallScreen={isSmallScreen}
        />
      </div>
    </div>
  )
}
export default OfficialProfileAnalyticalCharts
