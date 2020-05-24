import {
  TOGGLE_CART,
  ADD_ITEM_CART,
  REMOVE_ITEM_CART,
  REMOVE_ITEM_CHECKOUT,
} from '../action.types';

//utils
import {
  addItemToCart,
  removeItemFromCart,
  removeItemFromCheckout,
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM_CHECKOUT:
      return {
        ...state,
        cartItems: removeItemFromCheckout(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
