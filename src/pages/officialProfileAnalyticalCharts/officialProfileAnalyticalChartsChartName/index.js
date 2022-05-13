import useStyles from './styles/index.style'
import { useState } from 'react'
import OfficialProfileAnalyticalChartsGeneralChartTopPart from '../officialProfileAnalyticalChartsGeneralChart/OfficialProfileAnalyticalChartsGeneralChartTopPart'
import { Typography } from '@material-ui/core'
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
          height={20}
          width={'100%'}
          options={{
            // maintainAspectRatio: false,
            scales: {
              y: {
                suggestedMin: 0,
                suggestedMax: 0.5,
                // stackWeight: 0.5
                type: 'linear',
                display: true,
                // weight: 0.1,
                // grace: 1,
                beginAtZero: true,
                grid: {
                  color: '#244677'
                } 
              },
              x: {
                // suggestedMin: 0,
                // suggestedMax: 0.5,
                // stackWeight: 0.5
                type: 'linear',
                display: true,
                suggestedMin: 0,
                suggestedMax: 1.5,
                // weight: 0.1,
                // grace: 1,
                beginAtZero: true,
                grid: {
                  // color: 'rgba(0,0,0,0)',
                  display: false
                }
                // weight: 1
                // labels: ['asd', 'asd', 'asdads']
              }
            }
          }}
          data={{
            labels: ['6:55 AM', '9:55 AM', '10:55 AM', '11:55 AM', '12:55 AM'],
            // yAxisID: 'y',
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
                // showLine: false,
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
                // showLine: false,
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
