import { Button, Slider } from '@material-ui/core'
import { useContext, useState } from 'react'
import { UpcomingSinglePageMenuContext } from '.'
import useStyles from './styles/UpcomingSinglePageGasFeeMenuMutiplier.style'
const valuetext = (value) => {
  return `${value}`
}
const UpcomingSinglePageGasFeeMenuMutiplier = ({ closeMenu, setgasfee }) => {
  const classes = useStyles()
  const { data, updateData } = useContext(UpcomingSinglePageMenuContext)
  const [value, setValue] = useState(data.multiplier.value)

  const handleChange = (event, newValue) => {
    updateData({ ...data, multiplier: { value: newValue } })
    setValue(newValue)
  }
  return (
    <div className={classes.root}>
      <Slider
        value={value}
        color="primary"
        onChange={handleChange}
        valueLabelDisplay="auto"
        classes={{
          mark: classes.valueLabel,
          markLabel: classes.valueLabel
        }}
        getAriaValueText={valuetext}
        min={0}
        max={100}
        marks={[
          { value: 0, label: '0' },
          { value: 100, label: '100' }
        ]}
      />
      <Button
        fullWidth
        color="primary"
        variant="contained"
        type="submit"
        onClick={() => {
          setgasfee(value)
          closeMenu()
        }}>
        Submit
      </Button>
    </div>
  )
}
export default UpcomingSinglePageGasFeeMenuMutiplier
