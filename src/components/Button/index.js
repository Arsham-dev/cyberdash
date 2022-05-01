import { Button, makeStyles } from '@material-ui/core'

const CardBox = ({ onClickConfirmButton, content }) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   onClickConfirmButton()
  // }
  const useStyles = makeStyles(() => ({
    root: {
      borderRadius: 30,
      backgroundColor: '#D50166',
      padding: '16px',
      fontSize: '13px'
    }
  }))
  const classes = useStyles()
  return (
    <>
      <Button
        className={classes.root}
        variant="contained"
        onClick={onClickConfirmButton}>
        {content}
      </Button>
    </>
  )
}

export default CardBox
