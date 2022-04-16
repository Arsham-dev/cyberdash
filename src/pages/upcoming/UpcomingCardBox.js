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
      <Typography className={classes.headerTitle}>Drops</Typography>
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
              ? [
                  ...data
                    .filter(
                      (item) =>
                        Number(item.publicsale_mint_timestamp) -
                          new Date().getTime() <
                        86400000
                    )
                    .map((item, index) => (
                      <UpcomingCard
                        data={item}
                        key={item.collection_name + index.toString()}
                      />
                    )),
                  ...data
                    .filter(
                      (item) =>
                        Number(item.presale_mint_timestamp) -
                          new Date().getTime() <
                        86400000
                    )
                    .map((item, index) => (
                      <UpcomingCard
                        data={item}
                        key={item.collection_name + index.toString()}
                        isPresale
                      />
                    ))
                ]
              : undefined
          }
          responsive={responsive}
        />
      </div>
    </div>
  )
}
export default UpcomingCardBox
