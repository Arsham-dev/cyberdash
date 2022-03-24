import { makeStyles } from '@material-ui/core'
import HomeIntroduction from './HomeIntroduction'
import HomeFeatures from './HomeFeatures'
import homepage from '../../assets/images/mainpage.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    background: `transparent url(${homepage}) 0% 0% no-repeat padding-box`,
    // top: -28.481,
    // left: 4,
    // width: 1358,
    margin: 'auto',
    backgroundPosition: 'center',
    // backgroundColor: 'red',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    marginBottom: 61
  }
}))
const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <HomeIntroduction />
      <HomeFeatures />
    </div>
  )
}

export default Home
