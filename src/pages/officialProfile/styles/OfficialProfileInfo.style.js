import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  title: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  card: {
    width: 158,
    height: 93,
    border: '2px solid #000F24',
    background: '#0B1E39 0% 0% no-repeat padding-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 5
  },
  cardContainer: {
    marginTop: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(4 , 1fr)'
  },
  cardValue: {
    font: 'normal normal bold 26px/30px Roboto',
    color: '#FFF',
    // fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  cardTitle: {
    font: 'normal normal normal 14px/16px Roboto',
    color: '#d1d1d1'
  },
  cardTopRight: {
    borderTopRightRadius: 15
  },
  cardTopLeft: {
    borderTopLeftRadius: 15
  },
  cardBottomLeft: {
    borderBottomLeftRadius: 15
  },
  cardBottomRight: {
    borderBottomRightRadius: 15
  }
}))
export default useStyles
