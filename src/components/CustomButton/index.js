import useStyles from './styles/index.style'

const CustomButton = ({ title, ...otherProps }) => {
  const classes = useStyles()
  return (
    <button className={classes.root} type="submit" {...otherProps}>
      {title}
    </button>
  )
}
export default CustomButton
