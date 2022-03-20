import { Tooltip } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import useStyles from './styles/index.style'

const CustomInput = ({
  label,
  toolTip,
  isSelector,
  selectorOptions,
  placholder,
  ...otherProps
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {label && (
        <div htmlFor="input" className={classes.label}>
          {label}:
        </div>
      )}
      <div className={classes.inputContainer}>
        {isSelector ? (
          <select
            className={[classes.input, classes.selector].join(' ')}
            defaultValue=""
            {...otherProps}>
            <option value="" hidden>
              {placholder}
            </option>
            {/* <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option> */}
            {selectorOptions.map((item, index) => (
              <option value={item} key={(item, index.toString())}>
                {item}
              </option>
            ))}
          </select>
        ) : (
          <input
            className={classes.input}
            id="input"
            placeholder={placholder}
            {...otherProps}
          />
        )}
        <Tooltip title={toolTip || ''} placement="right-start">
          <InfoOutlinedIcon className={classes.icon} />
        </Tooltip>
      </div>
    </div>
  )
}
export default CustomInput
