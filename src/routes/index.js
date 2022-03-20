import { Route } from 'react-router-dom'
import Home from '../pages'
import Contract from '../pages/contract/index'
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
