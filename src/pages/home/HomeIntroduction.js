import { Button, Typography } from '@material-ui/core'
import useStyles from './styles/HomeIntroduction.style'

const HomeIntroduction = () => {
  const classes = useStyles()
  return (
    <div>
      <center>
        <Typography className={classes.title}>
          Follow The
          <br />
          Smart Money
        </Typography>
        <div>
          <Typography className={classes.description}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliq
          </Typography>
        </div>
        <Button variant="contained" className={classes.button}>
          Mint (Comming Soon)
        </Button>
      </center>
    </div>
  )
}

export default HomeIntroduction
