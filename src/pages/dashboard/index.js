import { List } from '@material-ui/core'
import PanelRoutes from '../../routes/PanelRoutes'
import MainDarwerList from './MainDarwerList'
import useStyles from './styles/index.style'

const Dashboard = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.topPart}>
        <List className={classes.listContainer}>
          <MainDarwerList />
        </List>
        <main className={classes.main}>
          <PanelRoutes />
        </main>
      </div>
    </div>
  )
}
export default Dashboard
