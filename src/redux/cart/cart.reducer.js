import CartActionTypes from './cart.type'

const InitialState = {
  hidden: true // keep dropdown hidden on initial render
}

const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    default:
      return state
  }
}

export default cartReducer
