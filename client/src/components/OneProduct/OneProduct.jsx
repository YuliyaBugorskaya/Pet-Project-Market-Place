import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProdBasket } from '../../redux/actions/basketAction';
import { setOneProduct } from '../../redux/actions/oneProductAction';

export default function OneProduct({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const basket = useSelector((state) => state.basket);

  const getOneCard = () => {
    dispatch(setOneProduct(product));
    navigate(`/product/${product.id}`);
  };

  const addProdBasketHandler = () => {
    dispatch(addProdBasket(product));
  };
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          {product?.price}
        </Card.Text>
        {basket.filter((el) => el.id === product.id).length ? (
          // если id продукта совпало id продукта в корзине, то получился
          // новый массив из одного продукта, значит есть длинна
          <Button disabled variant="primary">Добавлено</Button>
        ) : (

          <Button onClick={addProdBasketHandler} variant="primary">В корзину</Button>
        )}
        <Button onClick={() => getOneCard()} variant="primary">Подробнее</Button>
      </Card.Body>
    </Card>
  );
}
