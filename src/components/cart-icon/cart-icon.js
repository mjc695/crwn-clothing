import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping_cart.svg'
import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div onClick={toggleCartHidden} className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapState = (state) => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatch = dispatch => ({
  toggleCartHidden: async () => await dispatch(toggleCartHidden())
})

export default connect(mapState, mapDispatch)(CartIcon)
