import useStyles from './styles/index.style'
import userProfileImage from '../../../assets/images/userProfileImage.jpg'
import { ButtonBase, IconButton, Typography } from '@material-ui/core'
import etherscanLogo from '../../../assets/images/etherscanLogo.svg'
import etherIcon from '../../../assets/images/etherIcon.svg'
import openSeaNoBackground from '../../../assets/images/openSeaNoBackground.svg'

const OfficialProfileTradeUsersProfile = () => {
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
      <div className={classes.rightPartContainer}>
        <div className={classes.priceContainer}>
          <Typography className={classes.priceText}>Price:</Typography>
          <div className={classes.priceValue}>
            {/* <img /> */}
            <img src={etherIcon} alt="etherIcon" className={classes.ether} />
            <Typography variant="inherit">0.280</Typography>
            <ButtonBase size="small" className={classes.openSeaButton}>
              <img
                src={openSeaNoBackground}
                alt="openSea"
                className={classes.openSea}
              />
            </ButtonBase>
            <ButtonBase size="small" className={classes.openSeaButton}>
              <img
                src={etherscanLogo}
                alt="openSea"
                className={classes.etherscanLogo}
              />
            </ButtonBase>
          </div>
        </div>
        <div className={classes.timeContainer}>
          <div>
            <Typography className={classes.timeText}>Time:</Typography>
          </div>
          <div>
            <Typography className={classes.timeValue}>
              17 Minutes ago
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OfficialProfileTradeUsersProfile
