import { Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import useStyles from './styles/UpcomingShowTimeStamp.style'
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

const UpcomingShowTimeStamp = ({ time }) => {
  const classes = useStyles()
  const isNumber = /^-?\d+$/.test(time)
  const date = new Date(Number(time, 10))
  const [counrerTime, setcounrerTime] = useState(
    Math.floor((Number(time, 10) - new Date().getTime()) / 1000)
  )
  useEffect(() => {
    setInterval(() => {
      setcounrerTime((value) => value - 1)
    }, 1000)
  }, [])
  const ShowDate = ({ value }) => {
    return (
      <div>
        {value > 0 ? (
          value > 86400 ? (
            <Typography>
              {`${Math.floor(value / 86400)}d ${Math.floor(
                (value % 86400) / 3600
              )}h`}
            </Typography>
          ) : value > 3600 ? (
            <Typography>{`${Math.floor(value / 3600)}h ${Math.floor(
              (value % 3600) / 60
            )}m`}</Typography>
          ) : (
            <Typography>{`${Math.floor(value / 60)}m ${Math.floor(
              value % 60
            )}s`}</Typography>
          )
        ) : (
          <Typography>0s</Typography>
        )}
      </div>
    )
  }
  return (
    <div className={classes.root}>
      {isNumber ? (
        <ShowDate value={counrerTime} />
      ) : (
        <Typography>{time}</Typography>
      )}{' '}
      <Typography className={classes.dateText}>
        {isNumber
          ? `${
              month[date.getMonth()]
            } ${date.getDay()}, ${date.getHours()}:${date.getMinutes()}`
          : '-'}
      </Typography>
    </div>
  )
}
export default UpcomingShowTimeStamp
