import { Container } from "react-bootstrap";
import { useContext } from "react";
import Context from "../context";
import PizzaCard from "../components/PizzaCard";

const Home = () => {
  const { pizzas } = useContext(Context);

  return (
    <Container>
      <section className="pizza-galeria">
        {pizzas &&
          pizzas.map((pizza) => {
            return <PizzaCard key={pizza.id} pizza={pizza} />;
          })}
      </section>
    </Container>
  );
};

export default Home;
