import OfficialProfileTopPart from './OfficialProfileTopPart'
import useStyles from './styles/index.style'

const OfficialProfile = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <OfficialProfileTopPart />
    </div>
  )
}
export default OfficialProfile
