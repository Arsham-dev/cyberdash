import { Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import useStyles from './styles/UpcomingCard.style'
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

const UpcomingCard = ({ data }) => {
  const classes = useStyles()
  const [time, settime] = useState(
    Math.floor(
      (Number(data.publicsale_mint_timestamp) - new Date().getTime()) / 1000
    )
  )
  const date = new Date(time)
  useEffect(() => {
    setInterval(() => settime((value) => value - 1), 1000)
  }, [])
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}></div>
      <div className={classes.infoContainer}>
        <Typography className={classes.collectionName}>
          {data.collection_name}
        </Typography>
        <Typography className={classes.dateText}>
          {`${
            month[date.getMonth()]
          } ${date.getDay()}, ${date.getHours()}:${date.getMinutes()}`}
        </Typography>
        <Typography className={classes.timeCounter}>
          {`${time > 86400 ? `${Math.floor(time / 86400)}d` : ''} ${
            time > 3600 ? `${Math.floor((time % 86400) / 3600)}h` : ''
          } ${time > 60 ? `${Math.floor((time % 3600) / 60)}m` : ''} ${
            time > 0 ? `${Math.floor(time % 60)}s` : '0s'
          }`}
        </Typography>
      </div>
    </div>
  )
}
export default UpcomingCard
