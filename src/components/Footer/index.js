import FooterBottomPart from './FooterBottomPart'
import useStyles from './styles/index.style'
import FooterTopPart from './FooterTopPart'

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <FooterTopPart />
      <FooterBottomPart />
    </div>
  )
}
export default Footer
