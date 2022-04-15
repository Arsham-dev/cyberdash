import { ButtonBase, Paper, Typography } from '@material-ui/core'
import useStyles from './styles/index.style'
import openSea from '../../assets/images/opensea.svg'
import twitterNoBackground from '../../assets/images/twitterNoBackground.svg'
import discordNoBackground from '../../assets/images/discordNoBackground.svg'
import UpcomingSinglePageCardTime from './UpcomingSinglePageCardTime'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UpcomingSinglePageCardOption from './UpcomingSinglePageCardOption'

const UpcomingSinglePage = () => {
  const [data, setdata] = useState({})
  const params = useParams()
  const getData = async () => {
    const data = await axios.get(
      process.env.REACT_APP_API_BASE_URL + '/v1/tables/upcoming/id/' + params.id
    )
    console.log(data)
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
          </div>
          <div>
            <Typography className={classes.title}>
              {data.collection_name}
            </Typography>
          </div>
          <div>
            <ButtonBase className={classes.upcomingButton}>
              <Typography className={classes.upcomingButtonText}>
                Upcoming
              </Typography>
            </ButtonBase>
          </div>
          <div className={classes.moreInfoContainer}>
            <div>
              <Typography>Mint Price</Typography>
              <Typography>{data.presale_price}</Typography>
            </div>
            <div>
              <Typography>Floor</Typography>
              <Typography>{data.floor}</Typography>
            </div>
            {/* <div>
            <Typography>Gas Fee</Typography>
            <Typography>0.02 ETH</Typography>
          </div> */}
            <div>
              <Typography>OS Royalty</Typography>
              <Typography>{data.os_royalty}</Typography>
            </div>
            <div>
              <Typography>NFT Royalty</Typography>
              <Typography>{data.nft_royalty}</Typography>
            </div>
            <div>
              <Typography>Listing</Typography>
              <Typography>{data.listing_fee}</Typography>
            </div>
          </div>
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
