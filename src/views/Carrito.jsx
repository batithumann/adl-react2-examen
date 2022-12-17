import { Container, Table, Button } from "react-bootstrap";
import { useContext } from "react";
import Context from "../context";

const Carrito = () => {
  const { cart, setCart, total, setTotal } = useContext(Context);

  const handleAddToCart = (pizza) => {
    setTotal(total + pizza.price);
    cart[pizza.id] = {
      cantidad: cart[pizza.id] ? cart[pizza.id].cantidad + 1 : 1,
      total: cart[pizza.id] ? cart[pizza.id].total + pizza.price : pizza.price,
      pizza: pizza,
    };
    setCart({ ...cart });
    console.log(cart);
  };

  const handleRemoveFromCart = (pizza) => {
    setTotal(cart[pizza.id].cantidad > 0 ? total - pizza.price : total);
    cart[pizza.id] = {
      cantidad: cart[pizza.id].cantidad > 0 ? cart[pizza.id].cantidad - 1 : 0,
      total:
        cart[pizza.id].cantidad > 0 ? cart[pizza.id].total - pizza.price : 0,
      pizza: pizza,
    };
    setCart({ ...cart });
    console.log(cart);
  };

  return (
    <Container>
      <section className="carrito">
        <Table borderless hover>
          <thead>
            <tr>
              <th colSpan={5}>Detalles del pedido:</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cart).map((id) => {
              console.log(cart[id].pizza);
              return (
                <tr key={id}>
                  <td>
                    <img src={cart[id].pizza.img} alt={cart[id].pizza.name} />{" "}
                    {cart[id].pizza.name}
                  </td>
                  <td className="table-total">
                    {cart[id].total.toLocaleString("de")}
                  </td>
                  <td className="table-button button-remove">
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveFromCart(cart[id].pizza)}
                    >
                      -
                    </Button>
                  </td>
                  <td className="table-button">{cart[id].cantidad}</td>
                  <td className="table-button button-add">
                    <Button onClick={() => handleAddToCart(cart[id].pizza)}>
                      +
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <h2>Total: ${total.toLocaleString("de")}</h2>
        <Button variant="success">Ir a Pagar</Button>
      </section>
    </Container>
  );
};

export default Carrito;
