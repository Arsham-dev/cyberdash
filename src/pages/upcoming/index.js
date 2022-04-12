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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjQ5Nzk3MjU4LCJleHAiOjE2NDk4MzMyNTh9.QkMP3A0hhbGIwfQNLKrloKadhioRL_HQSs-InMw0c14`
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
