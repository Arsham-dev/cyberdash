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
          The Nansen NFT indexes present a reliable way of navigating the NFT
          markets. This update raises the bar for quality financial
          infrastructure that supports the growing depth of the NFT industry.
        </Typography>
      </div>
    </div>
  )
}
export default FooterTopPart
