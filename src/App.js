import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartProvider>
      <Header cartClicked={setShowCart} />
      {showCart && <Cart cartClose={setShowCart} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
