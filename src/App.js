import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import LoginStatusProvider from "./store/LoginContextProvider";

function App() {
  const [cart, setCart] = useState(false);

  function showCartHandler() {
    setCart(true);
  }

  function closeCartHandler() {
    setCart(false);
  }

  return (
    <LoginStatusProvider>
      <CartProvider>
        {cart && <Cart onClose={closeCartHandler} />}
        <Header onShow={showCartHandler}></Header>
        <Meals></Meals>
      </CartProvider>
    </LoginStatusProvider>
  );
}

export default App;
