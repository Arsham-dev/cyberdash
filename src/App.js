import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import ResponsiveAppBar from './components/Header'
import Routes from './routes'

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Router>
        <Routes />
      </Router>
      <Footer />
    </div>
  )
}

export default App
