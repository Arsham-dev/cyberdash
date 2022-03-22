import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: 'flex',
    columnGap: 19,
    rowGap: 28,
    flexWrap: 'wrap',
    // gridTemplateColumns: '1fr 1fr 1fr',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 76
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    marginBottom: 34,
    fontSize: 30,
    fontWeight: 'bold'
  }
}))
export default useStyles
