import { Redirect, Route, Switch } from 'react-router-dom'
import Contract from '../pages/contract/index'
import Home from '../pages/home'
import MintFunction from '../pages/mintFunction/index'
import PageNotFound from '../pages/pageNotFound'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/contract">
        <Contract />
      </Route>
      <Route exact path="/mint-function">
        <MintFunction />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/404">
        <PageNotFound />
      </Route>
      <Redirect to="/404" />
    </Switch>
  )
}
export default Routes
