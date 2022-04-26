import { Route } from 'react-router-dom'
import MintFunction from '../pages/mintFunction'

const PanelRoutes = () => {
  return (
    <>
      <Route path="/dashboard/mint-function">
        <MintFunction />
      </Route>
    </>
  )
}
export default PanelRoutes
