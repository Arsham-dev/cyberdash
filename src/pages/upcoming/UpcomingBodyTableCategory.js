import { useState } from 'react'
import useStyles from './styles/UpcomingBodyTableCategory.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Tooltip } from '@material-ui/core'
const UpcomingBodyTableCategory = ({ categories, index }) => {
  const classes = useStyles()
  const [isOpen, setisOpen] = useState(false)
  return (
    <div
      className={classes.root}
      style={{
        zIndex: isOpen ? 1000 : 'unset',
        backgroundColor: index % 2 ? 'rgb(10, 30, 57)' : 'rgb(16, 40, 71)',
        width: isOpen ? 'auto' : '100%'
      }}>
      <Tooltip
        title={categories[0].tooltip || ''}
        placement="top-start"
        classes={{ tooltip: classes.tooltip }}>
        <div
          className={classes.item}
          style={{
            borderColor: categories[0].color,
            color: categories[0].color
          }}>
          {categories[0].title.substr(0, 4)}
        </div>
      </Tooltip>
      {categories.length > 1 && !isOpen ? (
        <div
          size="small"
          onClick={(e) => {
            e.stopPropagation()
            setisOpen(true)
          }}>
          <ArrowForwardIosIcon className={classes.expandMoreIcon} />
        </div>
      ) : (
        <>
          {categories.slice(1).map((item) => (
            <Tooltip
              title={item.tooltip || ''}
              placement="top-start"
              classes={{ tooltip: classes.tooltip }}>
              <div
                className={classes.item}
                style={{
                  borderColor: categories[0].color,
                  color: categories[0].color
                }}>
                {item.title.substr(0, 4)}
              </div>
            </Tooltip>
          ))}
          <div
            onClick={(e) => {
              e.stopPropagation()
              setisOpen(false)
            }}>
            <ArrowBackIosIcon className={classes.expandMoreIcon} />
          </div>
        </>
      )}
    </div>
  )
}
export default UpcomingBodyTableCategory
