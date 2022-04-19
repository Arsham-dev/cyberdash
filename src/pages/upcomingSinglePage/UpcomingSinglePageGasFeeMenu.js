import { Button } from '@material-ui/core'
import { useState } from 'react'
import useStlyes from './styles/UpcomingSinglePageGasFeeMenu.style'
import UpcomingSinglePageGasFeeMenuCustomTab from './UpcomingSinglePageGasFeeMenuCustomTab'
import UpcomingSinglePageGasFeeMenuMutiplier from './UpcomingSinglePageGasFeeMenuMutiplier'

const UpcomingSinglePageGasFeeMenu = ({ closeMenu, setgasfee }) => {
  const classes = useStlyes()
  const [selectedTab, setselectedTab] = useState(2)
  return (
    <div className={classes.root}>
      <div className={classes.tabsContainer}>
        <Button
          color="primary"
          variant={selectedTab === 0 ? 'contained' : 'outlined'}
          size="small"
          onClick={() => {
            closeMenu()
            setgasfee('1 ETH')
          }}
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
      {selectedTab === 2 ? (
        <UpcomingSinglePageGasFeeMenuCustomTab
          closeMenu={closeMenu}
          setgasfee={setgasfee}
        />
      ) : (
        <UpcomingSinglePageGasFeeMenuMutiplier
          closeMenu={closeMenu}
          setgasfee={setgasfee}
        />
      )}
    </div>
  )
}
export default UpcomingSinglePageGasFeeMenu
