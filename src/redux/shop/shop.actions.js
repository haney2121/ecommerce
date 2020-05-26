import { ADD_SHOP_COLLECTIONS } from '../action.types';

export const getShopCollections = (collections) => ({
  type: ADD_SHOP_COLLECTIONS,
  payload: collections,
});
