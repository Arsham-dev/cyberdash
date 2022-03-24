import { Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useStyles from './styles/HomeIntroduction.style'

const HomeIntroduction = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <div>
      <center>
        <Typography className={classes.title}>
          Become a Profitable
          <br />
          NFT Trader
        </Typography>
        <div className={classes.descriptionContainer}>
          <Typography className={classes.description}>
            Our NFT bots and analytical tools give you huge advantages over
            other NFT traders, both before and after projects’ mints
          </Typography>
        </div>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => history.push('/contract')}>
          Mint (Comming Soon)
        </Button>
        <div className={classes.youtubePlayerContainer}>
          <iframe
            width="560"
            height="315"
            className={classes.youtubePlayer}
            src="https://www.youtube.com/embed/-X_71WrV63c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </center>
    </div>
  )
}

export default HomeIntroduction
