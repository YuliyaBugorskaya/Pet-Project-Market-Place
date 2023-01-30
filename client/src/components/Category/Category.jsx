import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';
import OneProduct from '../OneProduct/OneProduct';
import { getCategory } from '../../redux/actions/categoryAction';

export default function Category() {
  const dispatch = useDispatch();
  const { categoryPath } = useParams();
  const category = useSelector((state) => state.category);
  console.log(category, 'products---');

  useEffect(() => {
    dispatch(getCategory(categoryPath));
  }, [categoryPath]);
  return (
    <div className="row">
      <div className="col">
        <ul className="list-group">
          {category?.map((el) => (
            <OneProduct key={el.id} product={el} />
          ))}
        </ul>

      </div>
    </div>

  );
}
