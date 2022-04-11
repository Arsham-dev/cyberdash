import { Typography } from '@material-ui/core'
import useStyles from './styles/UpcomingHeadTable.style'

const UpcomingHeadTable = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.collections}>
          <Typography className={classes.text}>collections</Typography>
        </div>
        <div className={classes.twitterFollowers}>
          <Typography className={classes.text}>Twitter followers</Typography>
        </div>
        <div className={classes.discordFollowers}>
          <Typography className={classes.text}>Discord Followers</Typography>
        </div>
        <div className={classes.communityScore}>
          <Typography className={classes.text}>Community Score</Typography>
        </div>
        <div className={classes.mintPrice}>
          <Typography className={classes.text}>Mint Price</Typography>
        </div>
        <div className={classes.publicPrice}>
          <Typography className={classes.text}>Public Price</Typography>
        </div>
        <div className={classes.added}>
          <Typography className={classes.text}>Added</Typography>
        </div>
        <div className={classes.upvotes}>
          <Typography className={classes.text}>Upvotes</Typography>
        </div>
        <div className={classes.end} />
      </div>
      <div style={{ width: 1440 }} />
    </div>
  )
}
export default UpcomingHeadTable
