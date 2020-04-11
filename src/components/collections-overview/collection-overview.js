import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview'

import './collection-overview.styles.scss'

const CollectionOverview = ({ collections }) => {
  console.log('collectionns:::::', collections)
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherProps }) => {
        return (
          <CollectionPreview key={id} {...otherProps}></CollectionPreview>)
      })}
    </div>
  )
}

const mapState = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapState)(CollectionOverview)
