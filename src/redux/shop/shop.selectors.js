import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => {
  return (
    createSelector(
      [selectCollections],
      // collections => collections.find(collection => {
      //   return (
      //     collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      //   )
      // })
      collections => collections[collectionUrlParam]
    )
  )
}
