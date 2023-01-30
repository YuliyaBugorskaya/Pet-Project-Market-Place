import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OneProduct from '../OneProduct/OneProduct';
import { getAllProducts } from '../../redux/actions/productsAction';

export default function MainPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products, 'products---');

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">
          {products?.map((el) => (
            <OneProduct key={el.id} product={el} />
          ))}
        </ul>

      </div>
    </div>

  );
}
