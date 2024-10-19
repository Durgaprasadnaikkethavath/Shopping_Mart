import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Am from "./components/Am";
// import Cards from "./components/Cards";
import Cart from "./components/Cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [waring, setWaring] = useState(false);

  const handleClick = (item) => {
    // console.log(item);
    let isPresent = false;

    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setWaring(true);
      setTimeout(() => {
        setWaring(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };
  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Am handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}

      {waring && <div>Item is already added to cart</div>}
    </React.Fragment>
  );
};

export default App;
