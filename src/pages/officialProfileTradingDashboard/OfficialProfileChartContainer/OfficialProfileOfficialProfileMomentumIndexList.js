import { MenuItem, Paper, Select, Typography } from '@material-ui/core'
import { useState } from 'react'
import useStyles from './styles/OfficialProfileChartNameList1.styles'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  Title
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const OfficialProfileOfficialProfileMomentumIndexList = () => {
  const classes = useStyles()
  const [timeFrameValue, settimeFrameValue] = useState(1)
  const [floorVar, setfloorVar] = useState(0)
  const [raity, setraity] = useState(0)
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
        <div>
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
        </div>
        <div>
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
        </div>
      </div>
      <div className={classes.chartContainer}>
        <Typography className={classes.ETHPriceText}>Count</Typography>
        <Line
          height={75}
          width="100%"
          options={{
            // maintainAspectRatio: false,

            elements: {
              line: {
                tension: 0
              }
            },
            // responsive: true,
            // interaction: {
            //   mode: 'index',
            //   intersect: false
            // },
            // stacked: false,

            scales: {
              y1: {
                type: 'linear',
                display: true,
                position: 'left',
                suggestedMin: 0,
                suggestedMax: 50
              },
              y2: {
                type: 'linear',
                display: false,
                position: 'left',
                suggestedMin: 0,
                suggestedMax: 50,
                grid: {
                  drawOnChartArea: false
                }
              }
            }
          }}
          data={{
            labels: ['6:55 AM', '9:55 AM', '10:55 AM', '11:55 AM', '12:55 AM'],
            datasets: [
              {
                label: 'y1',
                data: [
                  {
                    x: 0,
                    y: 2
                  },
                  {
                    x: 1,
                    y: 3
                  },
                  {
                    x: 2,
                    y: 4
                  },
                  {
                    x: 3,
                    y: 9
                  },
                  {
                    x: 4,
                    y: 17
                  }
                ],
                borderColor: '#FD8F25',
                yAxisID: 'y1'
              },
              {
                yAxisID: 'y2',
                label: 'y2',
                data: [
                  {
                    x: 0,
                    y: 12
                  },
                  {
                    x: 1,
                    y: 23
                  },
                  {
                    x: 2,
                    y: 34
                  },
                  {
                    x: 3,
                    y: 39
                  },
                  {
                    x: 4,
                    y: 40
                  }
                ],
                borderColor: 'red'
              }
            ]
          }}
        />
      </div>
      <Typography className={classes.bottomText}>Time Period</Typography>
    </Paper>
  )
}
export default OfficialProfileOfficialProfileMomentumIndexList
