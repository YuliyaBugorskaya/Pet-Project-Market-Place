import { GET_ONE_PRODUCT } from '../types/productsTypes';

const oneProductReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ONE_PRODUCT:
      return payload;

    default:
      return state;
  }
};
export default oneProductReducer;
