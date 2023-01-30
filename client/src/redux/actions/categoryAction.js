import axios from 'axios';
import { SET_CATEGORY } from '../types/categoryType';

export const setCategoryProd = (payload) => ({ type: SET_CATEGORY, payload });

export const getCategory = (categoryPath) => (dispatch) => {
  // console.log(categoryPath, 'categoryPath=======>');
  axios.get(`https://fakestoreapi.com/products/category/${categoryPath}`)
    .then((res) => dispatch(setCategoryProd(res.data)));
};
