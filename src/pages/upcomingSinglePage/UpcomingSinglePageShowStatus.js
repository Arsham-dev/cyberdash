import { Typography } from '@material-ui/core'
import useStyles from './styles/UpcomingSinglePageShowStatus.style'

const UpcomingSinglePageShowStatus = ({
  publicsale_mint_timestamp,
  presale_mint_timestamp
}) => {
  const classes = useStyles()
  const status = /^-?\d+$/.test(presale_mint_timestamp)
    ? Number(presale_mint_timestamp) - new Date().getTime() < 0
      ? 0
      : /^-?\d+$/.test(publicsale_mint_timestamp)
      ? Number(publicsale_mint_timestamp) - new Date().getTime() < 0
        ? 1
        : 3
      : 2
    : 2

  return (
    <div className={classes.root}>
      <div
        className={classes.animatedItem}
        style={{
          backgroundColor:
            status === 0
              ? 'rgb(255,255,0)'
              : status === 1
              ? 'rgb(0,255,10)'
              : 'rgb(255,0,0)'
        }}
      />
      <Typography>
        {status === 0
          ? 'Presale'
          : status === 1
          ? 'Public Sale'
          : status === 2
          ? presale_mint_timestamp
          : 'Upcoming'}
      </Typography>
    </div>
  )
}
export default UpcomingSinglePageShowStatus
