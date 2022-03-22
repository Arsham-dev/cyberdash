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
          {title}
        </Typography>
        <div>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
      </div>
      <div className={classes.cardBottomPart}>
        {/* <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography> */}
        <Typography
          className={classes.content}
          variant="body2"
          color="secondary">
          {content}
        </Typography>
      </div>
    </div>
  )
}

export default Features
