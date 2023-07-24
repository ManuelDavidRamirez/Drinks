import { types } from "../types";

export const cartReducer = (state = [], action) => {
  const { idDrink } = action.payload
  const item = state.find((item) => item.idDrink === idDrink)

  const addItemToCart = (item) => {
    const cartUpdated = item
      ? state.map((item) => item.idDrink === idDrink
        ? {
          ...item,
          quantity: item.quantity + 1
        }
        : item
      )
      : [
        ...state, {
          ...action.payload,
          quantity: 1
        }
      ]

    localStorage.setItem("cart", JSON.stringify(cartUpdated))

    return cartUpdated
  }

  const removeAllItemsFromCart = () => {
    const cartUpdated = state.filter((item) => item.idDrink !== idDrink)

    localStorage.setItem("cart", JSON.stringify(cartUpdated))

    return cartUpdated
  }

  const removeItemToCart = () => {
    const cartUpdated = action.payload.quantity > 1
      ? state.map((item) => item.idDrink === idDrink
        ? {
          ...item,
          quantity: item.quantity - 1
        }
        : item
      )
      : state.filter((item) => item.idDrink !== idDrink)

    localStorage.setItem("cart", JSON.stringify(cartUpdated))

    return cartUpdated
  }

  switch (action.type) {
    case types.addItemToCart:
      return addItemToCart(item)
    case types.removeItemFromCart:
      return removeItemToCart()
    case types.removeAllItemsFromCart:
      return removeAllItemsFromCart()
    case types.cleanCart:
      localStorage.removeItem("cart")
      return []
    default:
      return state
  }
}