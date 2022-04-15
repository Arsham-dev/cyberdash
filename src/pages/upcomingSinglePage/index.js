import { ButtonBase, Paper, Typography } from '@material-ui/core'
import useStyles from './styles/index.style'
import openSea from '../../assets/images/opensea.svg'
import twitterNoBackground from '../../assets/images/twitterNoBackground.svg'
import discordNoBackground from '../../assets/images/discordNoBackground.svg'
import UpcomingSinglePageCardTime from './UpcomingSinglePageCardTime'

const UpcomingSinglePage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper elevation={14} className={classes.leftPaper}>
        <div className={classes.headerContainer}>
          <div className={classes.img} />
          <div className={classes.buttonContainer}>
            <ButtonBase
              className={classes.buttonBase}
              onClick={() => {
                window.open('https://www.techonthenet.com/', '_blank')
              }}>
              <img src={openSea} alt="openSea" />
            </ButtonBase>
            <ButtonBase
              className={classes.buttonBase}
              onClick={() => {
                window.open('https://www.techonthenet.com/', '_blank')
              }}>
              <img src={twitterNoBackground} alt="twitter" />
            </ButtonBase>
            <ButtonBase
              className={classes.buttonBase}
              onClick={() => {
                window.open('https://www.techonthenet.com/', '_blank')
              }}>
              <img src={discordNoBackground} alt="discord" />
            </ButtonBase>
          </div>
        </div>
        <div>
          <Typography className={classes.title}>World of Ether</Typography>
        </div>
        <div>
          <ButtonBase className={classes.upcomingButton}>
            <Typography className={classes.upcomingButtonText}>
              Upcoming
            </Typography>
          </ButtonBase>
        </div>
        <div className={classes.moreInfoContainer}>
          <div>
            <Typography>Mint Price</Typography>
            <Typography>0.09 ETH</Typography>
          </div>
          <div>
            <Typography>Floor</Typography>
            <Typography>0.15 ETH</Typography>
          </div>
          {/* <div>
            <Typography>Gas Fee</Typography>
            <Typography>0.02 ETH</Typography>
          </div> */}
          <div>
            <Typography>OS Royalty</Typography>
            <Typography>2.5 %</Typography>
          </div>
          <div>
            <Typography>NFT Royalty</Typography>
            <Typography>7.5 %</Typography>
          </div>
          <div>
            <Typography>Listing</Typography>
            <Typography>0.005 ETH</Typography>
          </div>
        </div>
        <UpcomingSinglePageCardTime />
      </Paper>
      <div className={classes.rightPart}>
        <Typography className={classes.rightPartTitle}>Expected PnL</Typography>
        <Paper className={classes.rightPaper}>
          <Typography className={classes.rightPaperText}>
            This mint can lead to a X% loss/profit if you flip it right after
            miniting
          </Typography>
          <Typography className={classes.rightPaperText}>PnL:</Typography>
        </Paper>
      </div>
    </div>
  )
}
export default UpcomingSinglePage
