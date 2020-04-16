import React from 'react'

import { connect } from 'react-redux'
import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckooutButton from '../../components/stripe-button/stripe-button'

import './checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      Checkout Page
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem =>
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )}
      <div className='total'>
        TOTAL: {total}
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </div>
      <StripeCheckooutButton price={total} />
    </div>
  )
}

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapState)(CheckoutPage)
