import React from 'react'
import CustomButtom from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'

const Cart = ({ cartItems, history, dispatch }) => {
  console.log('props', cartItems)
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem =>
          <CartItem key={cartItem.id} item={cartItem} />
        )}
      </div>
      <CustomButtom onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }} >Go To Checkout</CustomButtom>
    </div>
  )
}

const mapState = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapState)(Cart))
