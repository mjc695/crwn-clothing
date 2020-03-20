export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItemToAdd.id === cartItem.id
  )

  if (existingCartItem) {
    console.log('exists so adding 1')
    return (
      cartItems.map(cartItem => {
        console.log('found a match')
        if (cartItems.id === cartItemToAdd.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        }
        else return cartItem
      }
      ) // fix not adding properly
    )
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

