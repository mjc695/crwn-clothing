import React from 'react'

import './checkout-item.styles.scss'
import { clearItemFromCart, removeFromCart, addToCart } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'


const CheckoutItem = ({ cartItem, clearItemFromCart, removeFromCart, addToCart }) => {
  const { imageUrl, name, quantity, price } = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeFromCart(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addToCart(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => {
        clearItemFromCart(cartItem)
      }}>&#10005;</span>
    </div>
  )
}

const mapDispatch = dispatch => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addToCart: (item) => dispatch(addToCart(item)),
  removeFromCart: (item) => dispatch(removeFromCart(item))
})

export default connect(null, mapDispatch)(CheckoutItem)
