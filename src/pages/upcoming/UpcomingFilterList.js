import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  IconButton,
  Menu,
  TextField,
  Typography
} from '@material-ui/core'
import { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FilterListIcon from '@material-ui/icons/FilterList'
import useStyles from './styles/UpcomingFilterList.style'

const UpcomingFilterList = ({ categories }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="Search in Collection name"
          variant="outlined"
          color="primary"
          name="collectionName"
          id="collectionName"
          size="small"
          fullWidth
          InputProps={{
            className: classes.menuItemTextFieldPlacerHolder
          }}
          className={[classes.menuItemTextField, classes.searchField].join(' ')}
        />
      </div>
      <div className={classes.menuContainer}>
        <IconButton onClick={handleClick} size="medium">
          <FilterListIcon className={classes.filterListIcon} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          TransitionComponent={Fade}
          open={Boolean(anchorEl)}
          classes={{ paper: classes.menuItem }}
          style={{ top: 0 }}
          onClose={handleClose}>
          <div className={classes.title}>
            <Typography variant="h5" color="inherit">
              Filter
            </Typography>
          </div>
          <Accordion className={classes.accordion} defaultExpanded>
            <AccordionSummary
            // expandIcon={
            //   <ExpandMoreIcon className={classes.expandMoreIcon} />
            // }>
            >
              <ExpandMoreIcon className={classes.expandMoreIcon} />
              <Typography>Supply</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.menuItemTextFieldContainer}>
              <TextField
                id="supplyMin"
                label="Min"
                name="supplyMin"
                variant="outlined"
                size="small"
                color="primary"
                InputProps={{
                  className: classes.menuItemTextFieldPlacerHolder
                }}
                className={classes.menuItemTextField}
              />
              <Typography>to</Typography>
              <TextField
                id="supplyMax"
                name="supplyMax"
                label="Max"
                variant="outlined"
                size="small"
                color="primary"
                InputProps={{
                  className: classes.menuItemTextFieldPlacerHolder
                }}
                className={classes.menuItemTextField}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordion} defaultExpanded>
            <AccordionSummary>
              <ExpandMoreIcon className={classes.expandMoreIcon} />

              <Typography>Presale Price</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.menuItemTextFieldContainer}>
              <TextField
                id="presalePriceMin"
                label="Min"
                name="presalePriceMin"
                variant="outlined"
                size="small"
                color="primary"
                InputProps={{
                  className: classes.menuItemTextFieldPlacerHolder
                }}
                className={classes.menuItemTextField}
              />
              <Typography>to</Typography>
              <TextField
                id="presalePriceMax"
                name="presalePriceMax"
                label="Max"
                variant="outlined"
                size="small"
                color="primary"
                InputProps={{
                  className: classes.menuItemTextFieldPlacerHolder
                }}
                className={classes.menuItemTextField}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordion} defaultExpanded>
            <AccordionSummary>
              <ExpandMoreIcon className={classes.expandMoreIcon} />
              <Typography>Public sale price</Typography>
            </AccordionSummary>

            <AccordionDetails className={classes.menuItemTextFieldContainer}>
              <TextField
                id="publicSalePriceMin"
                label="Min"
                name="publicSalePriceMin"
                variant="outlined"
                size="small"
                color="primary"
                InputProps={{
                  className: classes.menuItemTextFieldPlacerHolder
                }}
                className={classes.menuItemTextField}
              />
              <Typography>to</Typography>
              <TextField
                id="publicSalePriceMax"
                name="publicSalePriceMax"
                label="Max"
                variant="outlined"
                size="small"
                color="primary"
                InputProps={{
                  className: classes.menuItemTextFieldPlacerHolder
                }}
                className={classes.menuItemTextField}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordion}>
            <AccordionSummary>
              <ExpandMoreIcon className={classes.expandMoreIcon} />
              <Typography>Categories</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.checkBoxContainer}>
              {categories.map((item) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox style={{ color: '#FFF' }} name={item} />}
                  label={item}
                />
              ))}
            </AccordionDetails>
          </Accordion>
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.button}>
              Submit
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.button}>
              Cancel
            </Button>
          </div>
        </Menu>
      </div>
    </div>
  )
}
export default UpcomingFilterList
