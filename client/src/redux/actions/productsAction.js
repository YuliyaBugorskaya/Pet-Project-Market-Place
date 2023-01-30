import axios from 'axios';
import { SET_PRODUCTS } from '../types/productsTypes';

export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });

export const getAllProducts = () => (dispatch) => {
  axios.get('https://fakestoreapi.com/products')
    .then((res) => dispatch(setProducts(res.data)));
};
