import { makeStyles } from '@material-ui/core'

const useStlyes = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0 10px 7px',
    justifyContent: 'space-between',
    borderTop: '1px solid rgba(25, 86, 226, 0.3)'
  },
  value: {
    color: '#fff'
  },
  label: {
    color: '#D1D1D1',
    textTransform: 'capitalize'
  }
}))
export default useStlyes
