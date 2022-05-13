import useStyles from './styles/index.style'
import { useState } from 'react'
import OfficialProfileAnalyticalChartsGeneralChartTopPart from '../officialProfileAnalyticalChartsGeneralChart/OfficialProfileAnalyticalChartsGeneralChartTopPart'
import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { Scatter } from 'react-chartjs-2'
const OfficialProfileAnalyticalChartsChartName = () => {
  const classes = useStyles()
  const [dayValue, setdayValue] = useState('1y')
  const [timeValue, settimeValue] = useState('5m')
  const [floorVar, setfloorVar] = useState(0)
  const [
    floorVarSelectorContainerIsActive,
    setfloorVarSelectorContainerIsActive
  ] = useState(false)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
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
      <div className={classes.chartContainer}>
        <Typography className={classes.ETHPriceText}>ETH Price</Typography>
        <Scatter
          height={isSmallScreen ? 120 : 20}
          width={'100%'}
          options={{
            scales: {
              y: {
                suggestedMin: 0,
                suggestedMax: 0.5,
                type: 'linear',
                display: true,
                beginAtZero: true,
                grid: {
                  color: '#244677'
                }
              },
              x: {
                type: 'linear',
                display: true,
                suggestedMin: 0,
                suggestedMax: 1.5,
                beginAtZero: true,
                grid: {
                  display: false
                }
              }
            }
          }}
          data={{
            labels: ['6:55 AM', '9:55 AM', '10:55 AM', '11:55 AM', '12:55 AM'],
            datasets: [
              {
                label: 'y',
                yAxisID: 'y',
                xAxisID: 'x',
                data: [
                  {
                    x: 1.4,
                    y: 0.52
                  },
                  {
                    x: 1,
                    y: 0.47
                  },
                  {
                    x: 0.5,
                    y: 0.25
                  },
                  {
                    x: 0.3,
                    y: 0.21
                  }
                ],
                showLine: false,
                backgroundColor: 'rgb(255, 99, 132)'
              },
              {
                label: 'y1',
                yAxisID: 'y',
                xAxisID: 'x',
                data: [
                  {
                    x: 0.4,
                    y: 0.68
                  },
                  {
                    x: 0.1,
                    y: 0.51
                  },
                  {
                    x: 0.4,
                    y: 0.33
                  },
                  {
                    x: 0.3,
                    y: 0.42
                  }
                ],
                showLine: false,
                backgroundColor: 'red'
              }
            ]
          }}
        />
      </div>
    </div>
  )
}
export default OfficialProfileAnalyticalChartsChartName
