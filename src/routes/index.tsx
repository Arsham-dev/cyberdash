import { Route } from 'react-router-dom'
import App from '../App'

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <App />
      </Route>
    </>
  )
}
export default Routes
