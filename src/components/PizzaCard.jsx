import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context";

const PizzaCard = ({ pizza }) => {
  const navigate = useNavigate();
  const { cart, setCart, total, setTotal } = useContext(Context);

  const handleAddToCart = () => {
    setTotal(total + pizza.price);
    cart[pizza.id] = {
      cantidad: cart[pizza.id] ? cart[pizza.id].cantidad + 1 : 1,
      total: cart[pizza.id] ? cart[pizza.id].total + pizza.price : pizza.price,
      pizza: pizza,
    };
    setCart({ ...cart });
    console.log(cart);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <hr />
        <Card.Text>
          <strong>Ingredientes:</strong>
        </Card.Text>
        <ul className="ingredientes">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}> {ingredient}</li>
          ))}
        </ul>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p className="price">{pizza.price.toLocaleString("de")}</p>
          <div className="actions">
            <Button
              variant="danger"
              className="ver-mas"
              onClick={() => navigate(`/pizza/${pizza.id}`)}
            >
              Ver mas
            </Button>
            <Button
              variant="warning"
              className="agregar"
              onClick={handleAddToCart}
            >
              Añadir <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default PizzaCard;
