import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button'

import { addToCart } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
    </div>
  )
}

const mapDispatch = dispatch => ({
  addItem: item => dispatch(addToCart(item))
})

export default connect(null, mapDispatch)(CollectionItem)
