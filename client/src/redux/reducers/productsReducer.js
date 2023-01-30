import { SET_PRODUCTS } from '../types/productsTypes';

const productsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return payload;

    default:
      return state;
  }
};
export default productsReducer;
