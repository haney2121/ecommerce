//utils
import { SHOP_DATA } from '../../utils/shop.data';

const initalState = {
  collections: SHOP_DATA,
};

const shopReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
