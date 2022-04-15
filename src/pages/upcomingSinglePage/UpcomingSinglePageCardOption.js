import { Button, ButtonGroup, TextField, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import useStyles from './styles/UpcomingSinglePageCardOption.style'

const UpcomingSinglePageCardOption = () => {
  const classes = useStyles()
  const [typeOfButtonIsNormal, settypeOfButtonIsNormal] = useState()
  const [firstInput, setfirstInput] = useState('')
  const [secondInput, setsecondInput] = useState('')
  const [valueToShow, setvalueToShow] = useState('')
  useEffect(() => {
    if (firstInput && secondInput) setvalueToShow('X')
  }, [firstInput, secondInput])

  return (
    <div className={classes.root}>
      <ButtonGroup>
        <Button
          variant={typeOfButtonIsNormal ? 'contained' : 'outlined'}
          onClick={() => {
            settypeOfButtonIsNormal(true)
          }}>
          Normal
        </Button>
        <Button
          variant={!typeOfButtonIsNormal ? 'contained' : 'outlined'}
          onClick={() => {
            settypeOfButtonIsNormal(false)
            //Request to backend for auto
          }}>
          Auto
        </Button>
      </ButtonGroup>
      {typeOfButtonIsNormal && (
        <div className={classes.inputContainer}>
          <TextField
            label="First"
            onChange={(event) => setfirstInput(event.target.value)}
            required
            InputProps={{ className: classes.input }}
          />
          <TextField
            required
            label="Second"
            InputProps={{ className: classes.input }}
            onChange={(event) => setsecondInput(event.target.value)}
          />
          {valueToShow && (
            <Typography
              className={
                classes.valueToShow
              }>{`GAS fee: ${valueToShow}`}</Typography>
          )}
        </div>
      )}
    </div>
  )
}
export default UpcomingSinglePageCardOption
