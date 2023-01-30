import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function OneCard() {
  const oneProduct = useSelector((state) => state.oneProduct);
  const navigate = useNavigate();
  const changeHandler = () => {
    navigate('/');
  };

  return (

    <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src={oneProduct.image} />
      <Card.Body>
        <Card.Title>{oneProduct?.title}</Card.Title>
        <Card.Text>
          {oneProduct?.description}
        </Card.Text>
        <Card.Text>
          {' '}
          Price
          {oneProduct?.price}
        </Card.Text>

        {/* <Button  variant="primary">В корзину</Button> */}
        <Button onClick={changeHandler} variant="primary">Вернуться</Button>
      </Card.Body>
    </Card>
  );
}
