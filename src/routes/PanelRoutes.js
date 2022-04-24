import { Route } from 'react-router-dom'
import MintFunction from '../pages/MintFunction'

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
