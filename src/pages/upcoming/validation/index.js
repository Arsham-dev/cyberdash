import * as yup from 'yup'
const filterListValidation = yup.object({
  collectionName: yup.string(),
  supplyMin: yup.number('Supply must be a number'),
  supplyMax: yup.number('Supply must be a number'),
  presalePriceMin: yup.number('Presale Price must be a number'),
  presalePriceMax: yup.number('Presale Price must be a number'),
  publicSalePriceMin: yup.number('Public Sale Price must be a number'),
  publicSalePriceMax: yup.number('Public Sale Price must be a number')
})
export default filterListValidation
