import { Button, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { useContext } from 'react'
import { UpcomingSinglePageMenuContext } from '.'
import useStyles from './styles/UpcomingSinglePageGasFeeMenuCustomTab.style'
import UpcomingSinglePageGasFeeMenuCustomTabValidation from './validation/UpcomingSinglePageGasFeeMenuCustomTab'

const UpcomingSinglePageGasFeeMenuCustomTab = ({ closeMenu, setgasfee }) => {
  const { data, updateData } = useContext(UpcomingSinglePageMenuContext)
  const initialValues = data.custom

  const classes = useStyles()
  return (
    <Formik
      onSubmit={(values) => {
        updateData({ ...data, custom: values })
        setgasfee('64 ETH')
        closeMenu()
      }}
      initialValues={initialValues}
      validationSchema={UpcomingSinglePageGasFeeMenuCustomTabValidation}>
      {({
        values,
        setFieldValue,
        errors,
        touched,
        handleBlur,
        isSubmitting,
        handleChange,
        resetForm
      }) => {
        return (
          <Form>
            <div className={classes.root}>
              <TextField
                size="small"
                name="maxFee"
                id="maxFee"
                label="Max Fee (GWEI)"
                variant="outlined"
                InputProps={{
                  className: classes.textFieldPlacerHolder
                }}
                className={classes.textField}
                onChange={handleChange}
                value={values.maxFee}
                error={touched.maxFee && !!errors.maxFee}
                helperText={touched.maxFee ? errors.maxFee : ''}
                onBlur={handleBlur}
              />
              <TextField
                name="maxPriority"
                id="maxPriority"
                label="Max priority Fee (GWEI)"
                variant="outlined"
                size="small"
                value={values.maxPriority}
                error={touched.maxPriority && !!errors.maxPriority}
                helperText={touched.maxPriority ? errors.maxPriority : ''}
                InputProps={{
                  className: classes.textFieldPlacerHolder
                }}
                className={classes.textField}
                onChange={handleChange}
              />
              <TextField
                name="gasLimit"
                id="gasLimit"
                label="Gas Limit"
                variant="outlined"
                size="small"
                value={values.gasLimit}
                error={touched.gasLimit && !!errors.gasLimit}
                helperText={touched.gasLimit ? errors.gasLimit : ''}
                InputProps={{
                  className: classes.textFieldPlacerHolder
                }}
                className={classes.textField}
                onChange={handleChange}
              />
              <Button
                fullWidth
                color="primary"
                variant="contained"
                type="submit">
                Submit
              </Button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
export default UpcomingSinglePageGasFeeMenuCustomTab
