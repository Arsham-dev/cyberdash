import { Route } from 'react-router-dom'
import Contract from '../pages/contract/index'
import Home from '../pages/home'
import MintFunction from '../pages/MintFunction/index'

const Routes = () => {
  return (
    <>
      <Route exact path="/contract">
        <Contract />
      </Route>
      <Route exact path="/mint-function">
        <MintFunction />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  )
}
export default Routes
