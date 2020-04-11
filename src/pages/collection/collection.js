import React from 'react'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection-item/collection-item'

import './collection.styles.scss'

const CollectionPage = ({ collection }) => {
  // console.log('collection:', collection)
  // console.log('match:', match)
  const { title, items } = collection
  return (
    <div className='collection-page'>
      {/* <h2>COLLECTION PAGE</h2> */}
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item =>
          <CollectionItem key={item.id} item={item}></CollectionItem>
        )}
      </div>
    </div>
  )
}

const mapState = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapState)(CollectionPage)
