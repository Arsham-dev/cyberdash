import * as yup from 'yup'
const UpcomingSinglePageGasFeeMenuCustomTabValidation = yup.object({
  maxFee: yup
    .number('Max Fee must be a number')
    .required('Max Fee is required'),
  maxPriority: yup
    .number('Max Priority must be a number')
    .required('Max Priority is required'),
  gasLimit: yup
    .number('Gas Limit must be a number')
    .required('Gas Limit is required')
})
export default UpcomingSinglePageGasFeeMenuCustomTabValidation
