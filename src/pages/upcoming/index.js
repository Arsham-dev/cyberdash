import { Button, ButtonGroup, Typography } from '@material-ui/core'
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
  const [isNormal, setisNormal] = useState(true)
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
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          className={classes.filterListContainerButtonGroup}>
          <Button
            className={classes.filterListContainerButton}
            onClick={() => setisNormal(true)}>
            Normal
          </Button>
          <Button
            className={classes.filterListContainerButton}
            onClick={() => setisNormal(false)}>
            Revil
          </Button>
        </ButtonGroup>
        <UpcomingFilterList categories={categories} />
      </div>
      <UpcomingHeadTable tableData={tableData} isNormal={isNormal} />
    </div>
  )
}
export default Upcoming
