import { Typography } from '@material-ui/core'
import useStyles from './styles/UpcomingSinglePageCardTime.style'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import { useEffect, useState } from 'react'
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const UpcomingSinglePageCardTime = ({
  publicsale_mint_timestamp,
  presale_mint_timestamp
}) => {
  const [time, settime] = useState()
  const isNumber = /^-?\d+$/.test(publicsale_mint_timestamp)
  const date = new Date(time)
  useEffect(() => {
    if (publicsale_mint_timestamp) {
      settime(
        Math.floor(
          (Number(publicsale_mint_timestamp) - new Date().getTime()) / 1000
        )
      )
      setInterval(() => settime((value) => value - 1), 1000)
    }
  }, [publicsale_mint_timestamp])
  const status = /^-?\d+$/.test(presale_mint_timestamp)
    ? Number(presale_mint_timestamp) - new Date().getTime() < 0
      ? 0
      : /^-?\d+$/.test(publicsale_mint_timestamp)
      ? Number(publicsale_mint_timestamp) - new Date().getTime() < 0
        ? 1
        : 3
      : 2
    : 2

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>
          {status === 0
            ? 'Presale In'
            : status === 1
            ? 'Public Sale In'
            : status === 2
            ? presale_mint_timestamp
            : 'Upcoming In'}
        </Typography>
      </div>
      <div className={classes.timeContainer}>
        <AccessAlarmIcon className={classes.timeIcon} />
        <Typography className={classes.timeCounter}>
          {`${time > 86400 ? `${Math.floor(time / 86400)}d` : ''} ${
            time > 3600 ? `${Math.floor((time % 86400) / 3600)}h` : ''
          } ${time > 60 ? `${Math.floor((time % 3600) / 60)}m` : ''} ${
            time > 0 ? `${Math.floor(time % 60)}s` : '0s'
          }`}
        </Typography>
      </div>
      <div>
        <Typography className={classes.dateText}>
          {isNumber
            ? `${
                month[date.getMonth()]
              } ${date.getDay()}, ${date.getHours()}:${date.getMinutes()}`
            : '-'}
        </Typography>
      </div>
    </div>
  )
}
export default UpcomingSinglePageCardTime
