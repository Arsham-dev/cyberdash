import useStyles from './styles/index.style'
import imageasd from '../../assets/images/logo.svg'

const Testimonial = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <img src={imageasd} alt="logo" className={classes.logo} />
      </div>
    </div>
  )
}
export default Testimonial
