import {
  TOGGLE_CART,
  ADD_ITEM_CART,
  REMOVE_ITEM_CART,
  REMOVE_ITEM_CHECKOUT,
} from '../action.types';

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addItemToCart = (item) => ({
  type: ADD_ITEM_CART,
  payload: item,
});

export const removeItemFromCart = (itemId) => ({
  type: REMOVE_ITEM_CART,
  payload: itemId,
});

export const removeItemFromCheckout = (itemId) => ({
  type: REMOVE_ITEM_CHECKOUT,
  payload: itemId,
});
