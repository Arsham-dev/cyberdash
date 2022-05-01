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
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { MetaMask, Node } from '../../libs/wallets'
import { useState, useEffect } from 'react'
import twitter from '../../assets/images/twitter.svg'
import linkdin from '../../assets/images/linkdin.svg'
import discord from '../../assets/images/discord.svg'
import logo from '../../assets/images/logo.svg'
import gas from '../../assets/images/gas.svg'
import useStyles from './styles/index.style'
import { toast } from 'react-toastify'
import { NavLink, useHistory } from 'react-router-dom'

const pages = [
  'Pricing',
  'Resources',
  'Cyberdash Alpha',
  'Institutions',
  'About us'
]

const ResponsiveAppBar = () => {
  const [provider, setProvider] = useState({})
  const [wallet, setwallet] = useState('')
  const [gasValue, setgasValue] = useState(0)
  const classes = useStyles()

  useEffect(() => {
    setwallet(sessionStorage.getItem('key'))
  }, [])

  useEffect(() => {
    setProvider(window.ethereum)
  }, [])

  const metaMask = new MetaMask(provider)

  const [anchorElNav, setAnchorElNav] = useState(null)
  const handleConnectWallet = () => {
    metaMask.onClickConnect().then((item) => {
      if (item.status === 400) {
        toast(
          item.content?.message ||
            'MetaMask Not Found ! \n Please Install MetaMask',
          {
            type: 'error'
          }
        )
      } else {
        toast('Wallet is Connected', { type: 'success' })
        setwallet(item.content.address)

        sessionStorage.setItem('key', item.content.address)
      }
    })
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const node = new Node()

  const history = useHistory()
  useEffect(() => {
    setInterval(async () => {
      const response = await node.getGas()
      setgasValue(response)
    }, 10000)
    setInterval(async () => {
      const checkAddress = await metaMask.onLoadConnect(window.ethereum)
      if (!checkAddress) {
        sessionStorage.clear()
        history.push('/')
        setwallet('')
      }
    }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.mobileSize}>
          <div>
            <ButtonBase
              component={NavLink}
              to="/"
              className={classes.logoContainer}
              // onClick={() => history.push('/')}
            >
              <img src={logo} alt="logo" />
            </ButtonBase>
          </div>
          <Hidden smDown>
            <div className={classes.searchInputContainer}>
              <TextField
                variant="outlined"
                placeholder="Search"
                size="small"
                className={classes.searchInput}
              />
            </div>
          </Hidden>
          <Hidden smDown>
            <div className={classes.headerButtonContainer}>
              <Button
                component={NavLink}
                to="/pricing"
                sx={{ my: 2, color: 'white', display: 'block' }}
                className={classes.headerButton}>
                Pricing
              </Button>
              <Button
                component={NavLink}
                to="/upcoming"
                sx={{ my: 2, color: 'white', display: 'block' }}
                className={classes.headerButton}>
                Drops
              </Button>
              <Button
                component={NavLink}
                to="/cyberdash-alpha"
                sx={{ my: 2, color: 'white', display: 'block' }}
                className={classes.headerButton}>
                Cyberdash Alpha
              </Button>
              <Button
                component={NavLink}
                to="/institutions"
                sx={{ my: 2, color: 'white', display: 'block' }}
                className={classes.headerButton}>
                Institutions
              </Button>
              <Button
                component={NavLink}
                to="/about-us"
                sx={{ my: 2, color: 'white', display: 'block' }}
                className={classes.headerButton}>
                About us
              </Button>
            </div>
          </Hidden>
          <Hidden smDown>
            <div className={classes.creditContainer}>
              <img src={gas} alt="gas" />
              <Typography
                className={
                  classes.creditValue
                }>{`${gasValue} GWEI`}</Typography>
            </div>
          </Hidden>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}>
            <Button
              onClick={handleConnectWallet}
              sx={{ p: 0 }}
              variant="outlined"
              className={classes.connectWallet}>
              {wallet
                ? `${wallet.substring(0, 3)}...${wallet.substring(
                    wallet.length - 3
                  )}`
                : isSmall
                ? 'Connect'
                : 'Connect Wallet'}
            </Button>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textalign="center">{page}</Typography>
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
                <img src={discord} alt="discord" />
              </ButtonBase>
            </div>
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
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
