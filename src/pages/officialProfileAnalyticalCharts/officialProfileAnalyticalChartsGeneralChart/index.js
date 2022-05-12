import useStyles from './styles/index.style'
import ClockIcon from '@material-ui/icons/Schedule'
import { useState } from 'react'
import { ButtonBase, MenuItem, Select, Typography } from '@material-ui/core'
import IOSSwitch from '../components/IOSSwitch'
import OfficialProfileAnalyticalChartsGeneralChartTopPart from './OfficialProfileAnalyticalChartsGeneralChartTopPart'
const OfficialProfileAnalyticalChartsGeneralChart = () => {
  const classes = useStyles()
  const [dayValue, setdayValue] = useState('1y')
  const [timeValue, settimeValue] = useState('5m')
  const [floorVar, setfloorVar] = useState(0)
  const [
    floorVarSelectorContainerIsActive,
    setfloorVarSelectorContainerIsActive
  ] = useState(false)
  return (
    <div className={classes.root}>
      <OfficialProfileAnalyticalChartsGeneralChartTopPart
        dayValue={dayValue}
        setdayValue={setdayValue}
        timeValue={timeValue}
        settimeValue={settimeValue}
        floorVar={floorVar}
        setfloorVar={setfloorVar}
        floorVarSelectorContainerIsActive={floorVarSelectorContainerIsActive}
        setfloorVarSelectorContainerIsActive={
          setfloorVarSelectorContainerIsActive
        }
      />
    </div>
  )
}
export default OfficialProfileAnalyticalChartsGeneralChart
