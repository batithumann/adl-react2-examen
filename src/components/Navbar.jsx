import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context";

export default function Navigation() {
  const navigate = useNavigate();
  const { total } = useContext(Context);
  return (
    <>
      <Navbar expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img
              alt="logo"
              src="/pizza.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Pizzería Mamma Mia!
          </Navbar.Brand>

          <Nav>
            <NavLink className="active nav-link carrito-link" to="/carrito">
              <FontAwesomeIcon icon={faCartShopping} />${"   "}
              {total.toLocaleString("de")}
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
