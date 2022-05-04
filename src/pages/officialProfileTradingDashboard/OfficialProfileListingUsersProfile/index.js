import useStyles from './styles/index.style'
import userProfileImage from '../../../assets/images/userProfileImage.jpg'
import { Button, ButtonBase, IconButton, Typography } from '@material-ui/core'
import linkdin from '../../../assets/images/linkdin.svg'
import etherIcon from '../../../assets/images/etherIcon.svg'
import openSeaNoBackground from '../../../assets/images/openSeaNoBackground.svg'

const OfficialProfileListingUsersProfile = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img
          src={userProfileImage}
          alt="userProfileImage"
          className={classes.img}
        />
      </div>
      <div className={classes.rankInfoContainer}>
        <div className={classes.rankInfo}>
          <Typography className={classes.rankText}>Rank:</Typography>
          <Typography className={classes.rankValue}>4571</Typography>
        </div>
        <div>
          <Typography className={classes.rankNumber}>#7716</Typography>
        </div>
      </div>
      <div className={classes.priceContainer}>
        <Typography className={classes.priceText}>Price</Typography>
        <div className={classes.priceValue}>
          {/* <img /> */}
          <img alt="etherIcon" src={etherIcon} className={classes.ether} />
          <Typography variant="inherit">0.280</Typography>
        </div>
      </div>
      <div className={classes.moreOptions}>
        <div className={classes.moreOptionsButtonContainer}>
          <div>
            <Button
              size="small"
              variant="contained"
              className={classes.moreOptionsBuyButton}>
              Buy
            </Button>
          </div>
          <div>
            <ButtonBase size="small" className={classes.openSeaButton}>
              <img
                src={openSeaNoBackground}
                alt="openSea"
                className={classes.openSea}
              />
            </ButtonBase>
          </div>
        </div>
        <div>
          <Typography className={classes.timeText}>17 Minutes ago</Typography>
        </div>
      </div>
    </div>
  )
}
export default OfficialProfileListingUsersProfile
