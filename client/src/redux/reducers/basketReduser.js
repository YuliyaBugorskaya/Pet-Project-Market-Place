import {
  SET_BASKET, ADD_PROD_BASKET, DELETE_PROD_BASKET, DROP_BASKET,
} from '../types/basketTypes';

export default function basketReduser(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_BASKET:
      return payload;
    case ADD_PROD_BASKET:

      return [...state, payload];

    case DELETE_PROD_BASKET:
      return state.filter((el) => el.id !== payload);
    case DROP_BASKET:
      return [];

    default:
      return state;
  }
}
