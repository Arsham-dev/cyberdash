import OfficialProfileTopPart from './OfficialProfileTopPart'
import OfficialProfileTopPartSocialMediaContainer from './OfficialProfileTopPartSocialMediaContainer'
import useStyles from './styles/index.style'

const OfficialProfile = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <OfficialProfileTopPart />
      <OfficialProfileTopPartSocialMediaContainer />
    </div>
  )
}
export default OfficialProfile
