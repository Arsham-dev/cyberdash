import { MenuItem, Paper, Select, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import useStyles from './styles/OfficialProfileOfficialProfileSellWall.style'
import { Bar, Scatter } from 'react-chartjs-2'
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

const OfficialProfileOfficialProfileSellWall = ({ isSmallScreen }) => {
  const classes = useStyles()
  const [timeFrameValue, settimeFrameValue] = useState(1)
  const [floorVar, setfloorVar] = useState(0)
  const [raity, setraity] = useState('')
  const [showChart, setshowChart] = useState(true)
  useEffect(() => {
    setshowChart(false)
    setTimeout(() => setshowChart(true), 5)
  }, [isSmallScreen])

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>Sell Wall</Typography>
      </div>
      <Paper className={classes.paper}>
        <div className={classes.topPart}>
          <div>
            <Typography className={classes.topPartTitle}>
              Price Range
            </Typography>
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
            <Typography className={classes.topPartTitle}>Floor Var</Typography>

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
          <div className={classes.inputContainer}>
            <Typography className={classes.topPartTitle}>Threshold</Typography>
            <input
              // variant="outlined"
              // placeholder="Search"

              // size="small"
              value={raity}
              onChange={(event) => setraity(event.target.value)}
              className={classes.input}
              // InputProps={{ className: classes.searchInput }}
            />
          </div>
        </div>
        {showChart && (
          <div className={classes.chartContainer}>
            <div className={classes.smallChartContainer}>
              <Typography className={classes.ETHPriceText}>Count</Typography>
              <div className={classes.chart}>
                <Bar
                  height={120}
                  width="100px"
                  options={{
                    elements: {
                      line: {
                        tension: 0,
                        borderWidth: 0,
                        hoverBorderWidth: 0
                      }
                    },
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
                    labels: [0, 50, 90, 130],
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
                        backgroundColor: '#FD8F25',
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
                        backgroundColor: '#AB7CE1'
                      }
                    ]
                  }}
                />
              </div>
            </div>
            <div className={classes.smallChartContainer}>
              <Typography className={classes.ETHPriceText}>
                Price in ETH
              </Typography>
              <div className={classes.chart}>
                <Scatter
                  height={120}
                  width="100%"
                  options={{
                    // responsive: true,
                    // resizeDelay: true,
                    // maintainAspectRatio: false,

                    elements: {
                      line: {
                        tension: 0
                      }
                    },
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
                    labels: ['', '6:55 AM', '12:55 AM', ''],
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
                        backgroundColor: '#FD8F25',
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
                        backgroundColor: 'rgb(255, 99, 132)'
                      }
                    ]
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <div className={classes.bottomPartText}>
          <Typography className={classes.bottomText}>Price</Typography>
          <Typography className={classes.bottomText}>Rarity Rank</Typography>
        </div>
      </Paper>
    </div>
  )
}
export default OfficialProfileOfficialProfileSellWall
