import React from 'react'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collections-overview/collection-overview'

import CollectionPage from '../../pages/collection/collection'


const ShopPage = ({ match }) => {
  console.log(match)
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}


export default ShopPage
