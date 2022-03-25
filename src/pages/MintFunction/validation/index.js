import * as yup from 'yup'
const miniFunctionValidation = yup.object().shape({
  flagFunction: yup.object().required('Flag function is required'),
  mintFunction: yup.object().required('Mint function is required'),
  args: yup.array().of(yup.number().required('This field is required')),
  value: yup.number().required('Value is required'),
  gasLimit: yup.number().required('Gas Limit is required'),
  maxFeePerGas: yup.number().required('Max Fee Per Gas is required'),
  maxPriorityFeePerGas: yup
    .number()
    .required('Max Priority Fee Per Gas is required')
})
export default miniFunctionValidation
