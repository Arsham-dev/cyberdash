import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 10,
    padding: '8px 15px',
    backgroundColor: 'rgb(19, 19, 41)',
    display: 'flex',
    alignItems: 'center',
    columnGap: 7,
    flex: 1,
    width: 230
    // width:
    // justifyContent:''
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 10
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    rowGap: 6
  },
  collectionName: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 700
  },
  dateText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    fontWeight: 500
  },
  timeCounter: {
    color: 'rgba(181, 129, 153,0.9)'
  }
}))
export default useStyles
