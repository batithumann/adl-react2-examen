import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./context";
import Navigation from "./components/Navbar";
import Home from "./views/Home";
import Carrito from "./views/Carrito";
import Pizza from "./views/Pizza";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const endpoint = "/pizzas.json";
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const sharedData = { pizzas, setPizzas, cart, setCart, total, setTotal };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(endpoint);
      const data = await res.json();
      setPizzas(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <Context.Provider value={sharedData}>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
