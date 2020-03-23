import React from 'react'
import { connect } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping_cart.svg'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div onClick={toggleCartHidden} className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapState = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0),
  cart: cartItems
})

const mapDispatch = dispatch => ({
  toggleCartHidden: async () => await dispatch(toggleCartHidden())
})

export default connect(mapState, mapDispatch)(CartIcon)
