import * as yup from 'yup'
const mintFunctionValidation = yup.object().shape({
  flagFunction: yup.string().required('Flag function is required'),
  mintFunction: yup.string().required('Mint function is required'),
  mintArgs: yup.array().of(yup.string().required('This field is required')),
  flagArgs: yup.array().of(yup.string().required('This field is required')),
  value: yup.number().required('Value is required'),
  gasLimit: yup
    .number()
    .integer('Gas Limit must be an integer')
    .required('Gas Limit is required'),
  maxFeePerGas: yup
    .number()
    .integer('Max Fee Per Gas must be an integer')
    .required('Max Fee Per Gas is required'),
  maxPriorityFeePerGas: yup
    .number()
    .integer('Max Priority Fee Per Gas must be an integer')
    .required('Max Priority Fee Per Gas is required'),
  flagDelay: yup
    .number()
    .integer('Flag Delay must be an integer')
    .required('Flag Delay is required')
})
export default mintFunctionValidation
