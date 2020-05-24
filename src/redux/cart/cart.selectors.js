import { createSelector } from 'reselect';

//CreateSelector and reselect are for memo - reduce the rendering of the components instead of calling everytime

/**
 * Selectors are a way to get a value from state without saving that value, like set and get in classes
 * @param {*} state  - global start pulling out cart
 */
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartPriceTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    )
);
