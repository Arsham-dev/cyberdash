import useStyles from './styles/index.style'
import ClockIcon from '@material-ui/icons/Schedule'
import { useState } from 'react'
import { ButtonBase, MenuItem, Select, Typography } from '@material-ui/core'
import IOSSwitch from '../components/IOSSwitch'
const OfficialProfileAnalyticalChartsGeneralChart = () => {
  const classes = useStyles()
  const [dayValue, setdayValue] = useState('1y')
  const [timeValue, settimeValue] = useState('5m')
  const [floorVar, setfloorVar] = useState(0)
  const [
    floorVarSelectorContainerIsActive,
    setfloorVarSelectorContainerIsActive
  ] = useState(false)
  const daySelectorArray = ['1d', '7d', '30d', '90d', '1y']
  const timeSelectorArray = ['5m', '30m', '1h', '6h', '12h', '1d']
  return (
    <div className={classes.root}>
      <div className={classes.topPartContainer}>
        <div className={classes.daySelectorContainer}>
          <ClockIcon className={classes.clockIcon} />
          {daySelectorArray.map((item) => (
            <ButtonBase
              key={item}
              className={[
                classes.daySelectorItem,
                item === dayValue ? classes.daySelectorItemSelected : ''
              ].join(' ')}
              onClick={() => setdayValue(item)}>
              {item}
            </ButtonBase>
          ))}
        </div>
        <div className={classes.floorVarSelectorContainer}>
          <Typography className={classes.floorVarSelectorTitle}>
            Floor Var
          </Typography>
          <Select
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
          </Select>
          <IOSSwitch
            checked={floorVarSelectorContainerIsActive}
            onChange={(event) =>
              setfloorVarSelectorContainerIsActive(event.target.checked)
            }
          />
        </div>
        <div className={classes.daySelectorContainer}>
          <ClockIcon className={classes.clockIcon} />
          {timeSelectorArray.map((item) => (
            <ButtonBase
              key={item}
              className={[
                classes.daySelectorItem,
                item === timeValue ? classes.daySelectorItemSelected : ''
              ].join(' ')}
              onClick={() => settimeValue(item)}>
              {item}
            </ButtonBase>
          ))}
        </div>
      </div>
    </div>
  )
}
export default OfficialProfileAnalyticalChartsGeneralChart
