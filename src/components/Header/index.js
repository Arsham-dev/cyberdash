import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Container,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { MetaMask } from '../../libs/wallets'
import { useState, useEffect } from 'react'
import twitter from '../../assets/images/twitter.svg'
import linkdin from '../../assets/images/linkdin.svg'
import youtube from '../../assets/images/youtube.svg'
import logo from '../../assets/images/logo.svg'
import gas from '../../assets/images/gas.svg'
import useStyles from './styles/index.style'
import { toast } from 'react-toastify'

const pages = [
  'Pricing',
  'Resources',
  'Cyberdash Alpha',
  'Institutions',
  'About us'
]

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const ResponsiveAppBar = () => {
  const [provider, setProvider] = useState({})
  const [wallet, setwallet] = useState('')
  const classes = useStyles()
  useEffect(() => {
    setProvider(window.ethereum)
    setwallet(sessionStorage.getItem('key'))
  }, [])
  const metaMask = new MetaMask(provider)

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const handleConnectWallet = () => {
    metaMask.onClickConnect().then((item) => {
      if (item.status === 400) {
        toast('please install metamask', { type: 'error' })
      } else {
        toast('Connect Successfully', { type: 'success' })
        setwallet(item.content.address)

        sessionStorage.setItem('key', item.content.address)
        // console.log(item)
      }
    })
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget)
  // }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.mobileSize}>
          <div>
            <img src={logo} alt="logo" />
          </div>

          <Hidden smDown>
            <div className={classes.headerButtonContainer}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  className={classes.headerButton}>
                  {page}
                </Button>
              ))}
            </div>
          </Hidden>
          <Hidden smDown>
            <div className={classes.creditContainer}>
              <img src={gas} alt="gas" />
              <Typography
                className={classes.creditValue}>{`${20} gwei`}</Typography>
            </div>
          </Hidden>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end'
            }}>
            <div className={classes.creditContainer}>
              <img src={gas} alt="gas" />
              <Typography
                className={classes.creditValue}>{`${20} gwei`}</Typography>
            </div>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  style={{ fontFamily: 'Roboto' }}
                  onClick={handleCloseNavMenu}>
                  <Typography
                    style={{ fontFamily: 'Roboto' }}
                    textalign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Hidden smDown>
            <div className={classes.mediaContiner}>
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
          </Hidden>
          <Hidden smDown>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={handleConnectWallet}
                sx={{ p: 0 }}
                variant="outlined"
                className={classes.connectWallet}>
                {wallet
                  ? `${wallet.substring(0, 5)}...${wallet.substring(
                      wallet.length - 5
                    )}`
                  : 'Connect Wallet'}
              </Button>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textalign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
