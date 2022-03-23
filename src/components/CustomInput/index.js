import { MenuItem, Select, Tooltip } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import useStyles from './styles/index.style'

const CustomInput = ({
  label,
  toolTip,
  isSelector,
  selectorOptions = [],
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
          // <selecta
          //   className={[classes.input, classes.selector].join(' ')}
          //   defaultValue=""
          //   {...otherProps}>
          //   <option value="" hidden>
          //     {placholder}
          //   </option>
          //   {selectorOptions.map((item, index) => (
          //     <option
          //       value={item}
          //       key={(item, index.toString())}
          //       className={classes.selectorOption}>
          //       {item}
          //     </option>
          //   ))}
          // </select>

          <Select
            labelId="demo-simple-select-helper-label"
            className={[classes.input, classes.selector].join(' ')}
            disableUnderline
            {...otherProps}>
            {selectorOptions.map((item, index) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        ) : (
          <input
            className={[
              classes.input,
              otherProps.disabled ? classes.disabled : ''
            ].join(' ')}
            id="input"
            placeholder={placholder}
            {...otherProps}
          />
        )}
        <Tooltip
          title={toolTip || ''}
          placement="bottom-start"
          classes={{ tooltip: classes.tooltip }}>
          <InfoOutlinedIcon className={classes.icon} />
        </Tooltip>
      </div>
    </div>
  )
}
export default CustomInput
