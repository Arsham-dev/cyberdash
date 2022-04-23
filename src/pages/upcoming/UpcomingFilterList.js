import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  IconButton,
  Popover,
  TextField,
  Tooltip,
  Typography
} from '@material-ui/core'
import { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FilterListIcon from '@material-ui/icons/FilterList'
import useStyles from './styles/UpcomingFilterList.style'
import { Form, Formik } from 'formik'
import filterListValidation from './validation'
import upcomingFilterListFunction from './UpcomingFilterListFunction'

const UpcomingFilterList = ({ categories, setData, data }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [category, setcategory] = useState([])
  console.log(category)
  const handleChangeCateGory = (event) => {
    console.log(event.target.name)
    if (category.includes(event.target.name)) {
      setcategory([...category.filter((item) => item !== event.target.name)])
    } else {
      setcategory([...category, event.target.name])
    }
  }
  const initialValues = {
    collectionName: '',
    supplyMin: '',
    supplyMax: '',
    presalePriceMin: '',
    presalePriceMax: '',
    publicSalePriceMin: '',
    publicSalePriceMax: ''
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={filterListValidation}
      onSubmit={(values) => console.log(1)}>
      {({
        values,
        setFieldValue,
        errors,
        touched,
        handleBlur,
        isSubmitting,
        handleChange,
        resetForm
      }) => {
        return (
          <Form>
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
                  className={[
                    classes.menuItemTextField,
                    classes.searchField
                  ].join(' ')}
                  value={values.collectionName}
                  error={touched.collectionName && !!errors.collectionName}
                  helperText={
                    touched.collectionName ? errors.collectionName : ''
                  }
                  onBlur={handleBlur}
                  onChange={(event) => {
                    setFieldValue('collectionName', event.target.value)
                    upcomingFilterListFunction(
                      { ...values, collectionName: event.target.value },
                      setData,
                      data,
                      category
                    )
                  }}
                />
              </div>
              <div className={classes.menuContainer}>
                <IconButton onClick={handleClick} size="medium">
                  <FilterListIcon className={classes.filterListIcon} />
                </IconButton>
                <Popover
                  anchorEl={anchorEl}
                  TransitionComponent={Fade}
                  open={Boolean(anchorEl)}
                  // className={classes.menuItem}
                  classes={{ paper: classes.menuItem }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  anchorReference="anchorPosition"
                  anchorPosition={{ top: -10, left: window.innerWidth }}
                  onClose={handleClose}>
                  <div className={classes.title}>
                    <Typography variant="h5" color="inherit">
                      Filter
                    </Typography>
                    <IconButton onClick={handleClose}>
                      <CloseIcon className={classes.closeIcon} />
                    </IconButton>
                  </div>
                  <Accordion className={classes.accordion} defaultExpanded>
                    <AccordionSummary>
                      <ExpandMoreIcon className={classes.expandMoreIcon} />
                      <Typography>Supply</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      className={classes.menuItemTextFieldContainer}>
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
                        onChange={handleChange}
                        value={values.supplyMin}
                        error={touched.supplyMin && !!errors.supplyMin}
                        helperText={touched.supplyMin ? errors.supplyMin : ''}
                        onBlur={handleBlur}
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
                        onChange={handleChange}
                        value={values.supplyMax}
                        error={touched.supplyMax && !!errors.supplyMax}
                        helperText={touched.supplyMax ? errors.supplyMax : ''}
                        onBlur={handleBlur}
                      />
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={classes.accordion} defaultExpanded>
                    <AccordionSummary>
                      <ExpandMoreIcon className={classes.expandMoreIcon} />

                      <Typography>Presale Price</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      className={classes.menuItemTextFieldContainer}>
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
                        onChange={handleChange}
                        value={values.presalePriceMin}
                        error={
                          touched.presalePriceMin && !!errors.presalePriceMin
                        }
                        helperText={
                          touched.presalePriceMin ? errors.presalePriceMin : ''
                        }
                        onBlur={handleBlur}
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
                        onChange={handleChange}
                        value={values.presalePriceMax}
                        error={
                          touched.presalePriceMax && !!errors.presalePriceMax
                        }
                        helperText={
                          touched.presalePriceMax ? errors.presalePriceMax : ''
                        }
                        onBlur={handleBlur}
                      />
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={classes.accordion} defaultExpanded>
                    <AccordionSummary>
                      <ExpandMoreIcon className={classes.expandMoreIcon} />
                      <Typography>Public sale price</Typography>
                    </AccordionSummary>

                    <AccordionDetails
                      className={classes.menuItemTextFieldContainer}>
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
                        onChange={handleChange}
                        value={values.publicSalePriceMin}
                        error={
                          touched.publicSalePriceMin &&
                          !!errors.publicSalePriceMin
                        }
                        helperText={
                          touched.publicSalePriceMin
                            ? errors.publicSalePriceMin
                            : ''
                        }
                        onBlur={handleBlur}
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
                        onChange={handleChange}
                        value={values.publicSalePriceMax}
                        error={
                          touched.publicSalePriceMax &&
                          !!errors.publicSalePriceMax
                        }
                        helperText={
                          touched.publicSalePriceMax
                            ? errors.publicSalePriceMax
                            : ''
                        }
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
                        <Tooltip placement="top-start" title={item.tooltip}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={category.includes(item.title)}
                                onChange={handleChangeCateGory}
                                name={item.title}
                              />
                            }
                            label={item.title}
                          />
                        </Tooltip>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                  <div className={classes.buttonContainer}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      onClick={() =>
                        upcomingFilterListFunction(
                          values,
                          setData,
                          data,
                          category
                        )
                      }
                      className={classes.button}>
                      Submit
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="primary"
                      type="reset"
                      onClick={() => {
                        resetForm()
                        setcategory([])
                        upcomingFilterListFunction(
                          initialValues,
                          setData,
                          data,
                          []
                        )
                      }}
                      className={classes.button}>
                      Reset
                    </Button>
                  </div>
                </Popover>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
export default UpcomingFilterList
