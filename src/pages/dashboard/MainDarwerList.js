import {
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import { NavLink } from 'react-router-dom'

import useStyles from './styles/index.style'

const MainDarwerList = () => {
  const classes = useStyles()
  return (
    <>
      <ListItem
        button
        component={NavLink}
        to="/dashboard/mint-function"
        className={classes.item}
        activeClassName={classes.activeItem}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Hidden smDown>
          <ListItemText>
            <Typography color="inherit">Robot</Typography>
          </ListItemText>
        </Hidden>
      </ListItem>
      {/* <ListItem
        button
        component={NavLink}
        to="/add-table"
        className={classes.item}
        activeClassName={classes.activeItem}>
        <ListItemIcon>
          <AddTabelIcon />
        </ListItemIcon>
        <Hidden smDown>
          <ListItemText>
            <Typography color="inherit">Add Tabel</Typography>
          </ListItemText>
        </Hidden>
      </ListItem>
      <ListItem
        button
        component={NavLink}
        to="/categories"
        className={classes.item}
        activeClassName={classes.activeItem}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <Hidden smDown>
          <ListItemText>
            <Typography color="inherit">Cateogries</Typography>
          </ListItemText>
        </Hidden>
      </ListItem>
      <ListItem
        button
        component={NavLink}
        to="/admin-table"
        className={classes.item}
        activeClassName={classes.activeItem}>
        <ListItemIcon>
          <AdminTableIcon />
        </ListItemIcon>
        <Hidden smDown>
          <ListItemText>
            <Typography color="inherit">Manage Admins</Typography>
          </ListItemText>
        </Hidden>
      </ListItem>
      <ListItem
        button
        component={NavLink}
        to="/white-list"
        className={classes.item}
        activeClassName={classes.activeItem}>
        <ListItemIcon>
          <WhiteListIcon />
        </ListItemIcon>
        <Hidden smDown>
          <ListItemText>
            <Typography color="inherit">White List</Typography>
          </ListItemText>
        </Hidden>
      </ListItem>
      <ListItem
        button
        component={NavLink}
        to="/configuration"
        className={classes.item}
        activeClassName={classes.activeItem}>
        <ListItemIcon>
          <ConfigurationIcon />
        </ListItemIcon>
        <Hidden smDown>
          <ListItemText>
            <Typography color="inherit">Configuration</Typography>
          </ListItemText>
        </Hidden>
      </ListItem>
      <ListItem
        button
        component={NavLink}
        to="/activity-log"
        className={classes.item}
        activeClassName={classes.activeItem}>
        <ListItemIcon>
          <ActivityLogIcon />
        </ListItemIcon>
        <Hidden smDown>
          <ListItemText>
            <Typography color="inherit">Activity log</Typography>
          </ListItemText>
        </Hidden>
      </ListItem>
      <ListItem
        button
        component={NavLink}
        to="/change-password"
        className={classes.item}
        activeClassName={classes.activeItem}>
        <ListItemIcon>
          <ChangePasswordIcon />
        </ListItemIcon>
        <Hidden smDown>
          <ListItemText>
            <Typography color="inherit">Change Password</Typography>
          </ListItemText>
        </Hidden>
      </ListItem> */}
    </>
  )
}
export default MainDarwerList
