import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: 'grid',
    columnGap: 19,
    rowGap: 28,
    flexWrap: 'wrap',
    gridTemplateColumns: '1fr 1fr 1fr',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 76
  }
}))
export default useStyles
