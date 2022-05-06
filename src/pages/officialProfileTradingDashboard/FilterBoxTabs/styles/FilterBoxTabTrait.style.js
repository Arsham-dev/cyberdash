import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '29px 26px 36px 19px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgb(11, 30, 57)',
    borderRadius: '0 0 10px 10px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      rowGap: 15
    }
  },
  title: {
    color: '#D1D1D1',
    font: 'normal normal normal 16px/19px Roboto',
    marginRight: 76,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  },
  textField: {
    color: '#FFF',
    width: 220,
    height: 52,
    marginRight: 54,
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
      borderRadius: '14px !important',
      '& fieldset': {
        borderColor: '#FFF'
      },
      '&:hover fieldset': {
        borderColor: '#FFF'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFF'
      }
    },
    '& .MuiOutlinedInput-input': {
      //   padding: '16.5px 14px'
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      width: '100%'
    }
  },
  selector: {
    color: '#FFF',
    width: 220,
    // height: 52,
    marginRight: 54,
    borderRadius: 14,
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
      borderRadius: '14px !important',
      '& fieldset': {
        borderColor: '#FFF'
      },
      '&:hover fieldset': {
        borderColor: '#FFF'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFF'
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FFF'

      //   padding: '16.5px 14px'
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FFF'
      }
    },
    '&:focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FFF'
      }
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      width: '100%'
    }
  },
  textFieldInput: {
    color: '#FFF'
  },
  andText: {
    color: '#D1D1D1',
    font: 'normal normal normal 16px/19px Roboto',
    marginRight: 56,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  },
  textFieldMax: {
    marginRight: 73,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0
    }
  },
  saveButton: {
    width: 241,
    height: 53,
    backgroundColor: '#1956E2',
    color: '#FFF',
    font: 'normal normal bold 16px/19px Roboto',
    borderRadius: 27,
    '&:hover': {
      backgroundColor: 'rgba(25, 86, 226,0.7)'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 15,
      width: '100%'
    }
  },
  menuPaper: {
    width: 111,
    backgroundColor: '#244677',
    padding: '0 8.5px 0 10.5px'
  },
  menuItem: {
    height: 34,
    backgroundColor: '#244677',
    borderBottom: '1px solid #0B1E39',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'cener',
    justifyContent: 'center',
    color: '#D1D1D1',
    fontSize: 14
  }
}))
export default useStyles
