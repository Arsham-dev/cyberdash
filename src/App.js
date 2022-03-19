import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import ResponsiveAppBar from './components/Header'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <ResponsiveAppBar />
        <Router>
          <Routes />
        </Router>
        <Footer />
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  )
}

export default App
