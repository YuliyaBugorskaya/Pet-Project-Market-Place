import { SET_CATEGORY } from '../types/categoryType';

const categoryReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CATEGORY:
      return payload;

    default:
      return state;
  }
};
export default categoryReducer;
