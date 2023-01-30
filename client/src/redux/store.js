import { configureStore } from '@reduxjs/toolkit';
import basketReduser from './reducers/basketReduser';
import categoryReducer from './reducers/categoryReducer';
import oneProductReducer from './reducers/oneProductReducer';
import productsReducer from './reducers/productsReducer';

export default configureStore({
  reducer: {
    products: productsReducer,
    oneProduct: oneProductReducer,
    basket: basketReduser,
    category: categoryReducer,

  },

});
