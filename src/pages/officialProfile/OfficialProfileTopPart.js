import useStyles from './styles/OfficialProfileTopPart.style'
import officialTopImage from '../../assets/images/officialTopImage.jpg'
import profile from '../../assets/images/profile.jpg'
const OfficialProfileTopPart = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.topImageContainer}>
        <img
          className={classes.topImage}
          alt="officialTopImage"
          src={officialTopImage}
        />
        <div className={classes.profileImageContianer}>
          <img className={classes.profileImage} alt="profile" src={profile} />
        </div>
      </div>
    </div>
  )
}
export default OfficialProfileTopPart
