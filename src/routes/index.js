import { Redirect, Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer'
import ResponsiveAppBar from '../components/Header'
import Contract from '../pages/contract/'
import Home from '../pages/home'
import MintFunction from '../pages/MintFunction'
import PageNotFound from '../pages/pageNotFound'
import Upcoming from '../pages/upcoming'
import UpcomingSinglePage from '../pages/upcomingSinglePage'

const Routes = () => {
  return (
    <>
      <Route path="/">
        <ResponsiveAppBar />
      </Route>
      <Switch>
        <Route exact path="/contract">
          <Contract />
        </Route>
        <Route exact path="/mint-function">
          <MintFunction />
        </Route>
        <Route exact path="/upcoming">
          <Upcoming />
        </Route>
        <Route exact path="/upcoming/:id">
          <UpcomingSinglePage />
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
      <Route path="/">
        <Footer />
      </Route>
    </>
  )
}
export default Routes
