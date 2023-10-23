import { Container, Spinner } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Context from "../context";
import PizzaDetalle from "../components/PizzaDetalle";

const Pizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { pizzas } = useContext(Context);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const pizza = pizzas.filter((item) => item.id === id);
    if (pizza.length > 0) {
      setDetails(pizza[0]);
      setLoading(false);
    } else {
      navigate("/");
    }
  }, [id, pizzas, navigate]);

  return (
    <Container>
      {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <section>
          <PizzaDetalle pizza={details} />
        </section>
      )}
    </Container>
  );
};

export default Pizza;
