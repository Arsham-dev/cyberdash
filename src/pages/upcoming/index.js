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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjQ5ODQ0OTM0LCJleHAiOjE2NDk4ODA5MzR9.pY09LY8m11OLRc5GSxrKDWuucBbxLVRATneYnj_0ZrA`
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
