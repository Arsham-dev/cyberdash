import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import ResponsiveAppBar from './components/Header'
import Routes from './routes'
// import { ToastContainer } from 'react-toastify'

function App() {
  return (
    // <ToastContainer>
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
    </div>
    // </ToastContainer>
  )
}

export default App
