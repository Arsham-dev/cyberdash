import axios from 'axios'
import { useEffect, useState } from 'react'
import useStyles from './styles/index.style'
import UpcomingHeadTable from './UpcomingHeadTable'

const Upcoming = () => {
  const classes = useStyles()
  const [tableData, settableData] = useState(undefined)
  const getData = async () => {
    const data = await axios.get(
      process.env.REACT_APP_API_BASE_URL + '/v1/admins/tables/listings',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjUwMDA0MzA3LCJleHAiOjE2NTAwNDAzMDd9.jErbz_bbv8QocV231doX4k45rFg0_cLOxl2b7jQuT-s`
        }
      }
    )
    settableData(data.data ? data.data.rows : undefined)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className={classes.root}>
      <UpcomingHeadTable tableData={tableData} />
    </div>
  )
}
export default Upcoming
