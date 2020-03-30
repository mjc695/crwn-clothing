import React from 'react'
import { connect } from 'react-redux'

import { selectCollections } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../../components/collection-preview/collection-preview'

const ShopPage = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => {
        return (
          <CollectionPreview key={id} {...otherProps}></CollectionPreview>)
      })}
    </div>
  )
}

const mapState = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapState)(ShopPage)
