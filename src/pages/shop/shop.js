import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview'

class ShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherProps }) => {
          console.log('going into collectionPreview:', otherProps)
          return (
            <CollectionPreview key={id} {...otherProps}></CollectionPreview>)
        })}
      </div>
    )
  }
}

export default ShopPage
