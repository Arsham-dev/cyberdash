import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { makeStyles } from '@material-ui/core'

function App() {
  const classes = makeStyles(() => ({
    root: { display: 'flex', flexDirection: 'column', alignItems: 'center' }
  }))()
  return (
    <div className={classes.root}>
      <Router>
        <Routes />
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
