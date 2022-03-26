import useStyles from './styles/index.style'

const CustomButton = ({ title, ...otherProps }) => {
  const classes = useStyles()
  return (
    <button
      {...otherProps}
      className={[classes.root, otherProps.className || ''].join(' ')}>
      {title}
    </button>
  )
}
export default CustomButton
