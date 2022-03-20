import { Typography } from '@material-ui/core'
import useStyles from './styles/FooterTopPart.style'
import logo from '../../assets/images/logo.svg'

const FooterTopPart = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <img src={logo} alt="logo" className={classes.logo} />
        <Typography className={classes.description}>
          CyberDash equips you with excellent NFT tools to spot, navigate, and
          trade NFTs. It assists you to make better trading decisions and brings
          you lucrative financial opportunities in the NFT market.
        </Typography>
      </div>
    </div>
  )
}
export default FooterTopPart
