import { Typography } from '@material-ui/core'
import useStlyes from './styles/TransactionModalItems.style'

const TransactionModalItems = ({ lable, value }) => {
  const classes = useStlyes()
  return (
    <div className={classes.root}>
      <Typography className={classes.label}>{lable}</Typography>
      <Typography className={classes.value}>{value}</Typography>
    </div>
  )
}
export default TransactionModalItems
