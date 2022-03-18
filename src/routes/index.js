import { Route } from 'react-router-dom'
import Home from '../pages'
import Contract from '../pages/contract'
import MintFunction from '../pages/MintFunction'

const Routes = () => {
  return (
    <>
      <Route exact path="/contract">
        <Contract />
      </Route>
      <Route exact path="/mint-function">
        <MintFunction />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </>
  )
}
export default Routes
