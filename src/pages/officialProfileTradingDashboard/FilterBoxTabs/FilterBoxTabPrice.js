import { Button, TextField, Typography } from '@material-ui/core'
import useStyles from './styles/FilterBoxTabPrice.style'

const FilterBoxTabPrice = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Show the price between</Typography>
      <TextField
        variant="outlined"
        label="Min"
        className={classes.textField}
        InputProps={{ className: classes.textFieldInput }}
      />
      <Typography className={classes.andText}>and</Typography>
      <TextField
        variant="outlined"
        label="Max"
        className={[classes.textField, classes.textFieldMax].join(' ')}
        InputProps={{ className: classes.textFieldInput }}
      />
      <Button variant="contained" className={classes.saveButton}>
        Save
      </Button>
    </div>
  )
}
export default FilterBoxTabPrice
