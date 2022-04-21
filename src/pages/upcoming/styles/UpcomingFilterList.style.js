import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    gridTemplateColumns: '1fr 3fr',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  filterListIcon: {
    color: '#FFF',
    fontSize: 40
  },
  menu: {
    backgroundColor: 'rgb(35, 35, 51)',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '7px 15px',
    color: '#FFF'
  },
  closeIcon: {
    fontSize: 26,
    color: '#FFF'
  },
  menuItem: {
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    padding: '10px 10px',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'flex-end',
    // flex: 1,
    width: 400,
    // maxWidth: 500,
    // rowGap: 6,
    justifyContent: 'center',
    backgroundColor: 'rgb(35, 35, 51)'
    // flexGrow: 1
    // margin: '15px 0',
  },
  accordion: {
    backgroundColor: 'rgb(35, 35, 51)',
    boxShadow: 'none',
    color: '#FFF',
    margin: '10px 0px'
  },
  expandMoreIcon: {
    color: '#FFF'
  },
  menuItemTitle: {
    display: 'flex',
    columnGap: 5,
    alignItems: 'center',

    width: '100%',
    justifyContent: 'flex-start',
    // marginBottom: 10,
    color: '#FFF'
  },
  menuItemTextFieldContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    columnGap: 20,
    color: '#FFF',
    marginBottom: -19
  },
  menuItemTextField: {
    color: '#FFF',
    '& label.Mui-focused': {
      color: '#FFF'
    },
    '& .MuiInputLabel-outlined': {
      color: '#FFF'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FFF'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFF'
      },
      '&:hover fieldset': {
        borderColor: '#FFF'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFF'
      }
    }
  },
  menuItemTextFieldPlacerHolder: {
    color: '#FFF'
  },
  button: {
    borderRadius: 20
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    margin: '0 5px',
    columnGap: 10,
    marginBottom: 20
  },
  checkBoxContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    alignItems: 'center',
    // columnGap: 20,
    color: '#FFF'
  },
  searchField: {
    borderRadius: 8,
    width: 300,
    '& .MuiOutlinedInput-input': {}
  },
  searchFieldInput: {
    padding: 8
  }
}))
export default useStyles
