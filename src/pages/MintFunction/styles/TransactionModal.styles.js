import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  modal: {
    margin: 'auto',
    marginTop: '10vh',
    backgroundColor: '#0B1E39',
    padding: '19px 22px 19px 23px',
    width: 564,
    overflow: 'hidden auto',
    alignSelf: 'center',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 16
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 13
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  closeButton: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  descriptionContainer: {
    marginBottom: 23
  },
  description: {
    fontSize: 14,
    color: '#D1D1D1'
  },
  itemContainer: {
    marginBottom: 10,
    borderBottom: '1px solid rgba(25, 86, 226, 0.3)'
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 36
  },
  containedButton: {
    backgroundColor: '#1956E2',
    borderRadius: 27,
    height: 53,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  outlinedButton: {
    borderRadius: 27,
    height: 53,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    borderColor: '#fff'
  }
}))
export default useStyles
