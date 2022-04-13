import { ButtonBase, Typography } from '@material-ui/core'
import useStyles from './styles/FooterBottomPart.style'
import discord from '../../assets/images/discord.svg'
import twitter from '../../assets/images/twitter.svg'
import linkdin from '../../assets/images/linkdin.svg'
import youtube from '../../assets/images/youtube.svg'

const FooterBottomPart = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.desciprtion} color="initial">
          © 2022 CyberDash. All rights reserved.
        </Typography>
      </div>
      <div className={classes.mediaContiner}>
        <ButtonBase>
          <img src={discord} alt="discord" />
        </ButtonBase>
        <ButtonBase>
          <img src={twitter} alt="twitter" />
        </ButtonBase>
        <ButtonBase>
          <img src={linkdin} alt="linkdin" />
        </ButtonBase>
        <ButtonBase>
          <img src={youtube} alt="youtube" />
        </ButtonBase>
      </div>
    </div>
  )
}
export default FooterBottomPart
