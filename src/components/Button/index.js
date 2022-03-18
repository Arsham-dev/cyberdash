import { Button } from '@material-ui/core'

const CardBox = ({ onClickConfirmButton, content }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (event) => {
    event.preventDefault()
    onClickConfirmButton()
  }
  return (
    <>
      <Button
        style={{
          borderRadius: 30,
          backgroundColor: '#D50166',
          padding: '16px',
          fontSize: '13px'
        }}
        variant="contained"
        onClick={onClickConfirmButton}>
        {content}
      </Button>
    </>
  )
}

export default CardBox
