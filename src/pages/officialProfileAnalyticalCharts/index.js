import { Typography } from '@material-ui/core'
import OfficialProfileAnalyticalChartsGeneralChart from './officialProfileAnalyticalChartsGeneralChart'
import useStyles from './styles/index,style'

const OfficialProfileAnalyticalCharts = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.chartContainer}>
        <Typography className={classes.chartTitle}>
          Bored Ape Yacht Club sales floor, average and volume
        </Typography>
        <OfficialProfileAnalyticalChartsGeneralChart />
      </div>
    </div>
  )
}
export default OfficialProfileAnalyticalCharts
