import useStyles from './styles/index.style'
import UpcomingHeadTable from './UpcomingHeadTable'

const Upcoming = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <UpcomingHeadTable />
    </div>
  )
}
export default Upcoming
