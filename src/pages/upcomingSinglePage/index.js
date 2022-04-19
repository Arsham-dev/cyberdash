import { ButtonBase, IconButton, Paper, Typography } from '@material-ui/core'
import useStyles from './styles/index.style'
import openSea from '../../assets/images/opensea.svg'
import twitterNoBackground from '../../assets/images/twitterNoBackground.svg'
import discordNoBackground from '../../assets/images/discordNoBackground.svg'
import UpcomingSinglePageCardTime from './UpcomingSinglePageCardTime'
import axios from 'axios'
import SettingsIcon from '@material-ui/icons/Settings'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UpcomingSinglePageCardOption from './UpcomingSinglePageCardOption'
import UpcomingSinglePageShowStatus from './UpcomingSinglePageShowStatus'
import UpcomingSinglePageGasFeeMenu from './UpcomingSinglePageGasFeeMenu'

const UpcomingSinglePage = () => {
  const [data, setdata] = useState({})
  const [gasfee, setgasfee] = useState('')
  const [showGasFeeMenu, setshowGasFeeMenu] = useState(false)
  const params = useParams()
  const getData = async () => {
    const data = await axios.get(
      process.env.REACT_APP_API_BASE_URL + '/v1/tables/upcoming/id/' + params.id
    )
    setdata(data.data ? data.data : undefined)
  }
  useEffect(() => {
    getData()
  }, [])
  const classes = useStyles()
  return (
    <>
      <div className={classes.backgroundImageContainer}>
        {data.collection_background_image && (
          <img
            alt="collection_background_image"
            src={data.collection_background_image}
            className={classes.collection_background_image}
          />
        )}
      </div>
      <div className={classes.root}>
        <Paper elevation={14} className={classes.leftPaper}>
          <div className={classes.headerContainer}>
            <div
              className={[
                classes.img,
                data.collection_image ? classes.collection_imageContainer : ''
              ].join(' ')}>
              {data.collection_image && (
                <img
                  alt="collection_image"
                  src={data.collection_image}
                  className={classes.collection_image}
                />
              )}
            </div>
            <div className={classes.statusContianer}>
              <div className={classes.buttonContainer}>
                <ButtonBase
                  className={classes.buttonBase}
                  onClick={() => {
                    window.open(data.opensea_link, '_blank')
                  }}>
                  <img src={openSea} alt="openSea" />
                </ButtonBase>
                <ButtonBase
                  className={classes.buttonBase}
                  onClick={() => {
                    window.open(data.opensea_link, '_blank')
                  }}>
                  <img src={openSea} alt="openSea" />
                </ButtonBase>
                <ButtonBase
                  className={classes.buttonBase}
                  onClick={() => {
                    window.open(data.twitter_link, '_blank')
                  }}>
                  <img src={twitterNoBackground} alt="twitter" />
                </ButtonBase>
                <ButtonBase
                  className={classes.buttonBase}
                  onClick={() => {
                    window.open(data.discordLink, '_blank')
                  }}>
                  <img src={discordNoBackground} alt="discord" />
                </ButtonBase>
              </div>
              <div className={classes.status}>
                <UpcomingSinglePageShowStatus
                  publicsale_mint_timestamp={data.publicsale_mint_timestamp}
                  presale_mint_timestamp={data.presale_mint_timestamp}
                />
              </div>
            </div>
          </div>
          <div>
            <Typography className={classes.title}>
              {data.collection_name}
            </Typography>
          </div>

          <div>
            {/* <ButtonBase className={classes.upcomingButton}>
              <Typography className={classes.upcomingButtonText}>
                Upcoming
              </Typography>
            </ButtonBase> */}
            <div className={classes.animatedItem} />
          </div>
          <div className={classes.moreInfoContainer}>
            <div>
              <Typography variant="inherit">Mint Price</Typography>
              <Typography variant="inherit">{data.presale_price}</Typography>
            </div>
            <div>
              <Typography variant="inherit">Floor</Typography>
              <Typography variant="inherit">{data.floor}</Typography>
            </div>
            <div>
              <Typography variant="inherit">OS Royalty</Typography>
              <Typography variant="inherit">{data.os_royalty}</Typography>
            </div>
            <div>
              <Typography variant="inherit">NFT Royalty</Typography>
              <Typography variant="inherit">{data.nft_royalty}</Typography>
            </div>
            <div>
              <Typography variant="inherit">Listing</Typography>
              <Typography variant="inherit">{data.listing_fee}</Typography>
            </div>
            <div>
              <div className={classes.gasFeeButtonContainer}>
                <Typography variant="inherit">Gas Fee</Typography>
                <IconButton
                  className={classes.gasFeeButton}
                  size="small"
                  onClick={() => setshowGasFeeMenu(true)}>
                  <SettingsIcon className={classes.gasFeeIcon} />
                </IconButton>
              </div>
              {gasfee && <Typography variant="inherit">{gasfee}</Typography>}
            </div>
          </div>
          {showGasFeeMenu && (
            <UpcomingSinglePageGasFeeMenu
              closeMenu={() => setshowGasFeeMenu(false)}
              setgasfee={setgasfee}
            />
          )}
          <UpcomingSinglePageCardOption />
          <UpcomingSinglePageCardTime
            dateTime={data.publicsale_mint_timestamp}
          />
        </Paper>
        <div className={classes.rightPart}>
          <Typography className={classes.rightPartTitle}>
            Expected PnL
          </Typography>
          <Paper className={classes.rightPaper}>
            <Typography className={classes.rightPaperText}>
              This mint can lead to a X% loss/profit if you flip it right after
              miniting
            </Typography>
            <Typography className={classes.rightPaperText}>PnL:</Typography>
          </Paper>
        </div>
      </div>
    </>
  )
}
export default UpcomingSinglePage
