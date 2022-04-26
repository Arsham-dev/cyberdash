import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#00050a',
    minHeight: '100vh'
  },
  appBar: {
    display: 'flex',
    flexDirection: 'column'
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#2d3238',
    // width: '100%',
    padding: '0 10px',
    flex: 1
  },
  logoContainer: {
    padding: 8,
    borderRadius: 10
  },
  optionsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    columnGap: 9,
    flexDirection: 'row-reverse'
  },
  menuButton: {
    background:
      'linear-gradient(270deg, rgba(18,104,245,1) 0%, rgba(9,84,135,1) 100%)',
    borderRadius: 3,
    padding: '5px 10px',
    color: '#FFF',
    display: 'flex',
    columnGap: 6
  },
  gasButton: {
    background: '#10db8a',
    fontSize: 15
  },
  valueButton: {
    fontSize: 15,
    background: 'transparent',
    marginRight: 7,
    alignItems: 'center'
  },
  listContainer: {
    backgroundColor: '#2d3238',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 80px)',
    width: 200,
    color: '#FFF',
    rowGap: 15,
    [theme.breakpoints.down('sm')]: {
      width: 'unset'
    }
    // flex: 1
    // width: 100
  },
  item: {
    columnGap: 5,
    '& .MuiListItemIcon-root': {
      color: '#FFF',
      minWidth: 0
    },
    '& .MuiListItemText-root': {
      color: '#FFF',
      flex: 'none',
      '& .MuiTypography-body1': {
        fontSize: 15,
        fontWeight: 400
      }
    },
    display: 'flex'
    // backgroundColor: 'red',
    // justifyContent: 'center'
  },
  activeItem: {
    background:
      'linear-gradient(90deg, rgba(18,164,245,1) 0%, rgba(3,72,142,1) 100%)',
    borderRadius: 15
  },
  topPart: {
    display: 'flex'
  },
  main: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    margin: 20
  }
}))

export default useStyles
