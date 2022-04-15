import useStyles from './styles/UpcomingCardBox.style'
import UpcomingCard from './UpcomingCard'

const UpcomingCardBox = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {data && <UpcomingCard data={data[0]} />}
    </div>
  )
}
export default UpcomingCardBox
