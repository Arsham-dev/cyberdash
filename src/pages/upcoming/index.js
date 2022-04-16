import axios from 'axios'
import { useEffect, useState } from 'react'
import useStyles from './styles/index.style'
import UpcomingCardBox from './UpcomingCardBox'
import UpcomingHeadTable from './UpcomingHeadTable'

const Upcoming = () => {
  const classes = useStyles()
  const [tableData, settableData] = useState(undefined)
  const getData = async () => {
    const data = await axios.get(
      process.env.REACT_APP_API_BASE_URL + '/v1/tables/upcoming/'
    )
    settableData(data.data ? data.data.rows : undefined)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1 className={classes.pageTitle}>Drops</h1>
      </div>
      <UpcomingCardBox data={tableData} />
      <div className={classes.header}>
        <h2 className={classes.headerTitle}>Upcoming Calendar</h2>
        <h3 className={classes.headerDiscription}>
          In this table you can find upcoming NFT projects
        </h3>
      </div>
      <UpcomingHeadTable tableData={tableData} />
    </div>
  )
}
export default Upcoming
