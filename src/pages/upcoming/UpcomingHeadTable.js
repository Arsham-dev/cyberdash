import { Typography } from '@material-ui/core'
import { useRef } from 'react'
import useStyles from './styles/UpcomingHeadTable.style'

const UpcomingHeadTable = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.collections}>
          <Typography className={classes.text}>collections</Typography>
        </div>
      </div>
    </div>
  )
}
export default UpcomingHeadTable
const TextInput = ({ onClick }) => (
  <div>
    <input type="text" />
  </div>
)

const App = () => {
  const one = useRef()

  return (
    <div>
      <TextInput onClick />
      <TextInput />
      <button>Button 1</button>
      <button>Button 2</button>
    </div>
  )
}
