import { createSelector } from 'reselect';

//CreateSelector and reselect are for memo - reduce the rendering of the components instead of calling everytime

/**
 * Selectors are a way to get a value from state without saving that value, like set and get in classes
 * @param {*} state  - global start pulling out cart
 */
const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
