import { Route } from 'react-router-dom'
import Contract from '../pages/contract'
import MintFunction from '../pages/mintFunction'

const Routes = () => {
  return (
    <>
      <Route exact path="/contract">
        <Contract />
      </Route>
      <Route exact path="/mint-function">
        <MintFunction />
      </Route>
    </>
  )
}
export default Routes
