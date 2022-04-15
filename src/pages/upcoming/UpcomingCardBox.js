import useStyles from './styles/UpcomingCardBox.style'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import UpcomingCard from './UpcomingCard'
import { Typography } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
const UpcomingCardBox = ({ data }) => {
  const classes = useStyles()
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  }

  return (
    <div className={classes.root}>
      <div className={classes.sliderContainer}>
        <Typography className={classes.title}>
          Upcoming mint {'  '}
          <AccessTimeIcon />
        </Typography>
        <AliceCarousel
          autoPlayInterval={5000}
          controlsStrategy="alternate"
          infinite
          autoPlay
          animationType="fadeout"
          mouseTracking
          disableDotsControls
          disableButtonsControls
          disableSlideInfo
          paddingLeft={5}
          // innerWidth={230}
          items={
            data
              ? [...data, ...data].map((item) => <UpcomingCard data={item} />)
              : undefined
          }
          responsive={responsive}
        />
      </div>
    </div>
  )
}
export default UpcomingCardBox
