import { ButtonBase } from '@material-ui/core'
import WebsiteIcon from '@material-ui/icons/Language'

import useStyles from './styles/OfficialProfileTopPartSocialMediaContainer.style'
import openSea from '../../assets/images/opensea.svg'
import twitterNoBackground from '../../assets/images/twitterNoBackground.svg'
import discordNoBackground from '../../assets/images/discordNoBackground.svg'
import etherscan from '../../assets/images/etherscan.svg'

const OfficialProfileTopPartSocialMediaContainer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ButtonBase className={classes.buttonBase} onClick={() => {}}>
        <WebsiteIcon className={classes.websiteIcon} />
      </ButtonBase>
      <ButtonBase className={classes.buttonBase} onClick={() => {}}>
        <img src={twitterNoBackground} alt="twitter" />
      </ButtonBase>
      <ButtonBase className={classes.buttonBase} onClick={() => {}}>
        <img src={discordNoBackground} alt="discord" />
      </ButtonBase>
      <ButtonBase className={classes.buttonBase} onClick={() => {}}>
        <img src={openSea} alt="openSea" />
      </ButtonBase>
      <ButtonBase className={classes.buttonBase} onClick={() => {}}>
        <img src={etherscan} alt="etherscan" className={classes.etherscan} />
      </ButtonBase>
    </div>
  )
}
export default OfficialProfileTopPartSocialMediaContainer
