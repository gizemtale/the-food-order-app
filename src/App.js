import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCardIsShown] = useState(false);

  const showCartHandler = () => {
    setCardIsShown(true);
  };
  // it should be called whenever 'Your Cart' button is clicked. this button however, is part of my Header. o yuzden functioni props ile once Headera gondericez sonra Headerin icindeki HeaderCartButton'a gondericez. prop chain yapmis olucaz bunun yerine context de kullanabilirdik

  const hideCartHandler = () => {
    setCardIsShown(false);
  };
  // Cart'taki close buttonina veya backdropa tiklayinca calisir. bu yuzden bu functioni Cart'a gondericez

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* render Cart if cartIsShown is truthy and not render Cart if cartIsShown is falsy */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
