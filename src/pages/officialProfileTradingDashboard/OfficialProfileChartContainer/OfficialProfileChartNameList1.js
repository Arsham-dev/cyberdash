import { MenuItem, Paper, Select, Typography } from '@material-ui/core'
import { useState } from 'react'
import useStyles from './styles/OfficialProfileChartNameList1.styles'
import { Scatter } from 'react-chartjs-2'
import 'chart.js/auto'

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import IOSSwitch from '../../officialProfileAnalyticalCharts/components/IOSSwitch'
ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

const OfficialProfileChartNameList1 = () => {
  const classes = useStyles()
  const [timeFrameValue, settimeFrameValue] = useState(1)
  // const [floorVar, setfloorVar] = useState(0)
  const [outliers, setoutliers] = useState(false)
  return (
    <Paper className={classes.paper}>
      <div className={classes.topPart}>
        <div>
          <Typography className={classes.topPartTitle}>Time Frame</Typography>
          <Select
            value={timeFrameValue}
            variant="outlined"
            className={classes.selector}
            MenuProps={{
              PaperProps: { className: classes.menuPaper },
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
              }
            }}
            onChange={(e) => settimeFrameValue(e.target.value)}>
            {Array(5)
              .fill(null)
              .map((item, index) => (
                <MenuItem
                  value={index + 1}
                  className={classes.menuItem}
                  key={index.toString()}>
                  {`${index + 1} Hour`}
                </MenuItem>
              ))}
          </Select>
        </div>
        {/* <div>
          <Typography className={classes.topPartTitle}>Floor Var</Typography>
          <Select
            value={floorVar}
            variant="outlined"
            className={classes.selector}
            MenuProps={{
              PaperProps: { className: classes.menuPaper },
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
              }
            }}
            onChange={(e) => setfloorVar(e.target.value)}>
            {Array(11)
              .fill(null)
              .map((item, index) => (
                <MenuItem
                  value={index * 10}
                  className={classes.menuItem}
                  key={index.toString()}>
                  {`${index * 10}%`}
                </MenuItem>
              ))}
          </Select>
        </div> */}
        {/* <div>
          <Typography className={classes.topPartTitle}>Raity</Typography>
          <Select
            value={raity}
            variant="outlined"
            className={classes.selector}
            MenuProps={{
              PaperProps: { className: classes.menuPaper },
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
              }
            }}
            onChange={(e) => setraity(e.target.value)}>
            {Array(11)
              .fill(null)
              .map((item, index) => (
                <MenuItem
                  value={index * 10}
                  className={classes.menuItem}
                  key={index.toString()}>
                  {`${index * 10}x`}
                </MenuItem>
              ))}
          </Select>
        </div> */}
        <div>
          <Typography className={classes.topPartTitle}>Outliers</Typography>
          {/* <Select
          disabled={!floorVarSelectorContainerIsActive}
          value={floorVar}
          variant="outlined"
          className={classes.selector}
          MenuProps={{
            PaperProps: { className: classes.menuPaper },
            getContentAnchorEl: null,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left'
            }
          }}
          onChange={(e) => setfloorVar(e.target.value)}>
          {Array(11)
            .fill(null)
            .map((item, index) => (
              <MenuItem
                value={index * 10}
                className={classes.menuItem}
                key={index.toString()}>
                {`${index * 10}%`}
              </MenuItem>
            ))}
        </Select> */}
          <IOSSwitch
            checked={outliers}
            onChange={(event) => setoutliers(event.target.checked)}
          />
        </div>
      </div>
      <div className={classes.chartContainer}>
        <Typography className={classes.ETHPriceText}>ETH Price</Typography>
        <Scatter
          height={75}
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
                beginAtZero: true
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
                beginAtZero: true
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
                label: '',
                yAxisID: 'y',
                xAxisID: 'x',
                data: [
                  {
                    x: 1.4,
                    y: 0.5
                  },
                  {
                    x: 1,
                    y: 0.4
                  },
                  {
                    x: 0.5,
                    y: 0.2
                  },
                  {
                    x: 0.5,
                    y: 0
                  }
                ],
                // showLine: false,
                backgroundColor: 'rgb(255, 99, 132)'
              }
            ]
          }}
        />
      </div>
      <Typography className={classes.bottomText}>Time</Typography>
    </Paper>
  )
}
export default OfficialProfileChartNameList1
