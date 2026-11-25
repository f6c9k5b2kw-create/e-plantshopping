import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity, 0
  );

  return (
    <div>
      <header style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "20px"
      }}>
        <h1>Paradise Nursery</h1>

        <button onClick={() => setPage("products")}>
          Plants
        </button>

        <button onClick={() => setPage("cart")}>
          Shopping Cart ({totalItems})
        </button>
      </header>

      {page === "home" && (
        <div>
          <h1>Welcome to Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
          <p>
            Discover our beautiful collection of
            indoor plants.
          </p>

          <button onClick={() => setPage("products")}>
            Get Started
          </button>
        </div>
      )}

      {page === "products" && (
        <ProductList cart={cart} setCart={setCart} />
      )}

      {page === "cart" && (
        <CartItem
          cart={cart}
          setCart={setCart}
          onContinueShopping={() => setPage("products")}
        />
      )}
    </div>
  );
}

export default App;
