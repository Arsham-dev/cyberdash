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
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => history.push('/contract')}>
          Mint (Comming Soon)
        </Button>
      </center>
    </div>
  )
}

export default HomeIntroduction
