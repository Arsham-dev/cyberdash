import { MenuItem, Select, Tooltip, Typography } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import useStyles from './styles/index.style'

const CustomInput = ({
  label,
  toolTip,
  isSelector,
  selectorOptions = [],
  placholder,
  helperText,
  error,
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
          <Select
            labelId="demo-simple-select-helper-label"
            className={[classes.input, classes.selector].join(' ')}
            disableUnderline
            {...otherProps}>
            {selectorOptions.map((item, index) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
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
        {toolTip ? (
          <Tooltip
            title={toolTip || ''}
            placement="bottom-start"
            classes={{ tooltip: classes.tooltip }}>
            <InfoOutlinedIcon className={classes.icon} />
          </Tooltip>
        ) : (
          <InfoOutlinedIcon className={classes.icon} />
        )}
      </div>
      {helperText && (
        <div className={classes.helperTextContainer}>
          <Typography
            className={[
              classes.helperText,
              error ? classes.helperTextError : ''
            ].join(' ')}>
            {helperText}
          </Typography>
        </div>
      )}
    </div>
  )
}
export default CustomInput
