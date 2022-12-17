import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Context from "../context";
import { useContext } from "react";

const PizzaDetalle = ({ pizza }) => {
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
    <div className="pizza-detalle">
      <div
        className="pizza-detalle-img"
        style={{
          backgroundImage: `url(${pizza.img})`,
          backgroundSize: "cover",
        }}
      >
        {/* <img src={pizza.img} /> */}
      </div>
      <div className="pizza-descripcion">
        <h1 className="capitalize">{pizza.name}</h1>
        <hr />
        <p>{pizza.desc}</p>
        <strong>Ingredientes:</strong>
        <ul className="ingredientes detalle-ingredientes">
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}> {ingredient}</li>
          ))}
        </ul>
        <div className="detalle-actions">
          <p>
            Precio:{" "}
            <span className="price">{pizza.price.toLocaleString("de")}</span>
          </p>
          <Button
            variant="warning"
            className="agregar"
            onClick={handleAddToCart}
          >
            Añadir <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </div>
      </div>
    </div>
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={pizza.img} />
    //   <Card.Body>
    //     <Card.Title>{pizza.name}</Card.Title>
    //     <hr />
    //     <Card.Text>
    //       <strong>Ingredientes:</strong>
    //     </Card.Text>

    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item>
    //       <p className="price">{pizza.price.toLocaleString("de")}</p>
    //       <div className="actions">
    //         <Button
    //           variant="danger"
    //           className="ver-mas"
    //           onClick={() => navigate(`/pizza/${pizza.id}`)}
    //         >
    //           Ver mas
    //         </Button>

    //       </div>
    //     </ListGroup.Item>
    //   </ListGroup>
    // </Card>
  );
};

export default PizzaDetalle;
