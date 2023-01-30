import {
  SET_BASKET, ADD_PROD_BASKET, DELETE_PROD_BASKET, DROP_BASKET,
} from '../types/basketTypes';

export const setBasket = (payload) => ({ type: SET_BASKET, payload });
export const addProdBasket = (payload) => ({ type: ADD_PROD_BASKET, payload });// не задействован
export const deleteProdBasket = (payload) => ({ type: DELETE_PROD_BASKET, payload });
export const dropBasket = () => ({ type: DROP_BASKET });
