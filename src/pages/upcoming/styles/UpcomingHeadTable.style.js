import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 'auto',
    height: 'auto'
  },
  container: {
    display: 'flex',
    flex: '1 0 auto',
    minWidth: 'auto',
    height: 'auto',
    backgroundColor: 'rgb(11, 30, 57)',
    borderTopLeftRadius: '0.75rem',
    borderBottomLeftRadius: '0.75rem'
  },
  text: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)'
  },
  collections: {
    boxSizing: 'border-box',
    flex: '300 0 auto',
    minWidth: 250,
    width: 300,
    cursor: 'pointer',
    backgroundColor: 'inherit',
    padding: '1.75rem 1.25rem',
    borderTopLeftRadius: '0.75rem',
    borderBottomLeftRadius: '0.75rem'
  }
}))
export default useStyles
const fibo = (number) => {
  if (number > 2) {
    return fibo(number - 2) + fibo(number - 1)
  } else return 1
}
