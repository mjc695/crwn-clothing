import React from 'react'
import CustomButtom from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'

import './cart-dropdown.styles.scss'

const Cart = ({ cartItems }) => {
  console.log('props', cartItems)
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem =>
          <CartItem key={cartItem.id} item={cartItem} />
        )}
      </div>
      <CustomButtom>Go To Checkout</CustomButtom>
    </div>
  )
}

const mapState = state => ({
  cartItems: state.cart.cartItems
})

export default connect(mapState)(Cart)
