const upcomingFilterListFunction = (filterList, setData, data, category) => {
  // collectionName: '',
  // supplyMin: 0,
  // supplyMax: 0,
  // presalePriceMin: 0,
  // presalePriceMax: 0,
  // publicSalePriceMin: 0,
  // publicSalePriceMax: 0
  let tempData = data
  if (filterList.collectionName)
    tempData = tempData.filter((items) =>
      items.collection_name
        .toLocaleLowerCase()
        .includes(filterList.collectionName.toLocaleLowerCase())
    )

  if (category.length > 0)
    tempData = tempData.filter((items) => category.includes(items.category))
  if (filterList.supplyMin) {
    tempData = tempData.filter(
      (items) =>
        Number(items.quantity.replace(/\D/g, '')) >
        Number(filterList.supplyMin.replace(/\D/g, ''))
    )
  }
  if (filterList.supplyMax) {
    tempData = tempData.filter(
      (items) =>
        Number(items.quantity.replace(/\D/g, '')) <
        Number(filterList.supplyMax.replace(/\D/g, ''))
    )
  }
  if (filterList.presalePriceMin) {
    tempData = tempData.filter(
      (items) =>
        Number(items.presale_price.replace(/\D/g, '')) >
        Number(filterList.presalePriceMin.replace(/\D/g, ''))
    )
  }
  if (filterList.presalePriceMax) {
    tempData = tempData.filter(
      (items) =>
        Number(items.presale_price.replace(/\D/g, '')) <
        Number(filterList.presalePriceMax.replace(/\D/g, ''))
    )
  }
  if (filterList.publicSalePriceMin) {
    tempData = tempData.filter(
      (items) =>
        Number(items.publicsale_price.replace(/\D/g, '')) >
        Number(filterList.publicSalePriceMin.replace(/\D/g, ''))
    )
  }
  if (filterList.publicSalePriceMax) {
    tempData = tempData.filter(
      (items) =>
        Number(items.publicsale_price.replace(/\D/g, '')) <
        Number(filterList.publicSalePriceMax.replace(/\D/g, ''))
    )
  }
  setData(tempData)
}
export default upcomingFilterListFunction
