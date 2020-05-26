//utils
import { ADD_SHOP_COLLECTIONS } from '../action.types';

const initalState = {
  collections: null,
};

const shopReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_SHOP_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
