import React from 'react'
import CustomButtom from '../custom-button/custom-button'

import './cart-dropdown.styles.scss'

const Cart = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButtom>Go To Checkout</CustomButtom>
    </div>
  )
}

export default Cart
