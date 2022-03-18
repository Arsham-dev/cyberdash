import { Route } from 'react-router-dom'
import Contract from '../pages/contract'

const Routes = () => {
  return (
    <>
      <Route exact path="/contract">
        <Contract />
      </Route>
    </>
  )
}
export default Routes
