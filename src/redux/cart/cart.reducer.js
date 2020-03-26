import CartActionTypes from './cart.type'
import { addItemToCart } from './cart.utils'
import { removeItemFromCart } from './cart.utils'

const InitialState = {
  hidden: true, // keep dropdown hidden on initial render
  cartItems: []
}

const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => {
          return cartItem.id !== action.payload.id
        })
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer
