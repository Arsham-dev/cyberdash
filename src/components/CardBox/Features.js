import { Typography } from '@material-ui/core'
import useStyles from './styles/Features.style'
import logo from '../../assets/images/logo.svg'

const Features = ({ title, content }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.cardTopPart}>
        <div />
        <Typography className={classes.cardTopPartTitle} color="inherit">
          A New Way To Invest In <span style={{ color: '#EF501C' }}>NFTs</span>
        </Typography>
        <div>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
      </div>
      <div className={classes.cardBottomPart}>
        <Typography
          style={{ color: '#FFFFFF' }}
          gutterBottom
          variant="h5"
          component="div">
          {title}
        </Typography>
        <Typography
          style={{ color: '#D1D1D1' }}
          variant="body2"
          color="secondary">
          {content}
        </Typography>
      </div>
    </div>
  )
}

export default Features
