import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { setBasket, dropBasket, deleteProdBasket } from '../../redux/actions/basketAction';

export default function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.basket);
  useEffect(() => {
    dispatch(setBasket(basket));
  }, [basket]);

  return (
    <div>
      Basket
      <Button onClick={() => dispatch(dropBasket())} variant="primary">Оформить заказ</Button>
      <div>
        {basket?.map((basketProd) => (

          <Card key={basketProd.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={basketProd.image} />
            <Card.Body>
              <Card.Title>{basketProd?.title}</Card.Title>
              <Card.Text>
                {basketProd?.price}
              </Card.Text>
              <Button onClick={() => dispatch(deleteProdBasket(basketProd.id))} variant="primary">Удалить</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
