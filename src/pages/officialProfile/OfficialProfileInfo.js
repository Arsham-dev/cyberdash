import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import useStyles from './styles/OfficialProfileInfo.style'

const OfficialProfileInfo = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>APIENS OFFICIALS</Typography>
      </div>
      <div className={classes.cardContainer}>
        <div className={[classes.card, classes.cardTopLeft].join(' ')}>
          <Typography className={classes.cardValue}>10k</Typography>
          <Typography className={classes.cardTitle}>Supply</Typography>
        </div>
        <div
          className={[
            classes.card,
            isSmallScreen ? classes.cardTopRight : ''
          ].join(' ')}>
          <Typography className={classes.cardValue}>2.8K</Typography>
          <Typography className={classes.cardTitle}>Owner</Typography>
        </div>
        <div className={classes.card}>
          <Typography className={classes.cardValue}>1.3</Typography>
          <Typography className={classes.cardTitle}>Floor Price</Typography>
        </div>
        <div
          className={[
            classes.card,
            isSmallScreen ? '' : classes.cardTopRight
          ].join(' ')}>
          <Typography className={classes.cardValue}>188</Typography>
          <Typography className={classes.cardTitle}>Volume Traded</Typography>
        </div>
        <div
          className={[
            classes.card,
            isSmallScreen ? '' : classes.cardBottomLeft
          ].join(' ')}>
          <Typography className={classes.cardValue}>5%</Typography>
          <Typography className={classes.cardTitle}>Loyalty</Typography>
        </div>
        <div className={classes.card}>
          <Typography className={classes.cardValue}>50</Typography>
          <Typography className={classes.cardTitle}>% Owner</Typography>
        </div>
        <div
          className={[
            classes.card,
            isSmallScreen ? classes.cardBottomLeft : ''
          ].join(' ')}>
          <Typography className={classes.cardValue}>1.5</Typography>
          <Typography className={classes.cardTitle}>Average Price</Typography>
        </div>
        <div className={[classes.card, classes.cardBottomRight].join(' ')}>
          <Typography className={classes.cardValue}>10K</Typography>
          <Typography className={classes.cardTitle}>Sales Volume</Typography>
        </div>
      </div>
    </div>
  )
}
export default OfficialProfileInfo
