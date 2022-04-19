import { Button } from '@material-ui/core'
import { useState } from 'react'
import useStlyes from './styles/UpcomingSinglePageGasFeeMenu.style'
import UpcomingSinglePageGasFeeMenuCustomTab from './UpcomingSinglePageGasFeeMenuCustomTab'

const UpcomingSinglePageGasFeeMenu = ({ closeMenu }) => {
  const classes = useStlyes()
  const [selectedTab, setselectedTab] = useState(2)
  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <Button
          color="primary"
          variant={selectedTab === 0 ? 'contained' : 'outlined'}
          size="small"
          onClick={closeMenu}
          className={classes.tabButton}>
          Fast (90)
        </Button>
        <Button
          color="primary"
          variant={selectedTab === 1 ? 'contained' : 'outlined'}
          size="small"
          onClick={() => setselectedTab(1)}
          className={classes.tabButton}>
          Multiplier
        </Button>
        <Button
          color="primary"
          variant={selectedTab === 2 ? 'contained' : 'outlined'}
          size="small"
          onClick={() => setselectedTab(2)}
          className={classes.tabButton}>
          Custom
        </Button>
      </div>
      {selectedTab === 2 ? <UpcomingSinglePageGasFeeMenuCustomTab /> : <div />}
    </div>
  )
}
export default UpcomingSinglePageGasFeeMenu
