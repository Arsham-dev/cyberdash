import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core'
import { useState } from 'react'
import useStyles from './styles/FilterBoxTabTrait.style'

const FilterBoxTabTrait = () => {
  const classes = useStyles()
  const [timeFrameValue, settimeFrameValue] = useState()

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Show Trait</Typography>
      <TextField
        variant="outlined"
        label="Min"
        className={classes.textField}
        InputProps={{ className: classes.textFieldInput }}
      />
      <Typography className={classes.andText}>Select Type</Typography>
      {/* <FormControl fullWidth> */}
      {/* <InputLabel id="select-label">Max</InputLabel> */}
      <Select
        // label="Max"
        // labelId="select-label"
        value={timeFrameValue}
        variant="outlined"
        className={classes.selector}
        MenuProps={{
          PaperProps: { className: classes.menuPaper },
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          }
        }}
        onChange={(e) => settimeFrameValue(e.target.value)}>
        {Array(5)
          .fill(null)
          .map((item, index) => (
            <MenuItem
              value={index + 70}
              className={classes.menuItem}
              key={index.toString()}>
              {`${index + 70}(0.5%)`}
            </MenuItem>
          ))}
      </Select>
      {/* </FormControl> */}
      <Button variant="contained" className={classes.saveButton}>
        Save
      </Button>
    </div>
  )
}
export default FilterBoxTabTrait
