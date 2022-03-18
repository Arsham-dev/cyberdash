import { Typography } from '@material-ui/core'
import useStyles from './styles/index.styles'

const Contract = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title}>ENTER CONTRACT</Typography>
      </div>
      <div className={classes.searchBoxContainer}>
        <input className={classes.searchBox} />
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button} type="submit">
          Load
        </button>
      </div>
    </div>
  )
}
export default Contract
