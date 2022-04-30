import {
  AppBar,
  ButtonBase,
  Hidden,
  IconButton,
  List,
  Toolbar
} from '@material-ui/core'
import PanelRoutes from '../../routes/PanelRoutes'
import ExitIcon from '@material-ui/icons/ExitToApp'
import GasIcon from '@material-ui/icons/LocalGasStation'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'
import UpdateIcon from '@material-ui/icons/Update'
import MainDarwerList from './MainDarwerList'
import useStyles from './styles/index.style'
const Dashboard = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        {/* <Container maxWidth="xl"> */}
        <Toolbar disableGutters className={classes.topBar}>
          <div>
            {/* <ButtonBase className={classes.logoContainer}>
              <img src={logo} alt="logo" />
            </ButtonBase> */}
          </div>
          <div className={classes.optionsContainer}>
            <IconButton
              color="primary"
              className={classes.menuButton}
              size="small"
              // onClick={LogoutFunction}
            >
              <ExitIcon />
            </IconButton>
            <Hidden smDown>
              <ButtonBase className={classes.menuButton}>
                <UpdateIcon />
                {'59.49'}
              </ButtonBase>
            </Hidden>
            <Hidden smDown>
              <IconButton className={classes.menuButton}>
                <SettingsIcon />
              </IconButton>
            </Hidden>
            <ButtonBase
              className={`${classes.menuButton} ${classes.gasButton}`}>
              {'20'}
              <GasIcon />
            </ButtonBase>
            <Hidden smDown>
              <div className={`${classes.menuButton} ${classes.valueButton}`}>
                <MenuIcon />
                {'0.00'}
              </div>
            </Hidden>
          </div>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
      <div className={classes.topPart}>
        <List className={classes.listContainer}>
          <MainDarwerList />
        </List>
        <main className={classes.main}>
          <PanelRoutes />
        </main>
      </div>
    </div>
  )
}
export default Dashboard
