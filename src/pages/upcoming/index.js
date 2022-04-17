import { Typography } from '@material-ui/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useStyles from './styles/index.style'
import UpcomingCardBox from './UpcomingCardBox'
import UpcomingFilterList from './UpcomingFilterList'
import UpcomingHeadTable from './UpcomingHeadTable'

const Upcoming = () => {
  const classes = useStyles()
  const [tableData, settableData] = useState(undefined)
  const [categories, setcategories] = useState([])
  const getData = async () => {
    const data = await axios.get(
      process.env.REACT_APP_API_BASE_URL + '/v1/tables/upcoming'
    )
    settableData(data.data ? data.data.rows : undefined)
  }
  const getCategories = async () => {
    const data = await axios.get(
      process.env.REACT_APP_API_BASE_URL +
        '/v1/tables/upcoming/filters/categories'
    )
    setcategories(data.data ? data.data.categories : undefined)
  }
  useEffect(() => {
    getData()
    getCategories()
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1 className={classes.pageTitle}>Drops</h1>
      </div>
      <UpcomingCardBox data={tableData} />
      <div className={classes.header}>
        <Typography className={classes.headerTitle}>
          Upcoming Calendar
        </Typography>
        <Typography className={classes.headerDiscription}>
          In this table you can find upcoming NFT projects
        </Typography>
      </div>
      <div className={classes.filterListContainer}>
        <UpcomingFilterList categories={categories} />
      </div>
      <UpcomingHeadTable tableData={tableData} />
    </div>
  )
}
export default Upcoming
