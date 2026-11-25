import React from "react";

function CartItem({ cart = [], setCart, onContinueShopping }) {
  const totalCost = cart.reduce(
    (total, item) => total + item.cost * item.quantity, 0
  );

  const handleIncrement = (name) => {
    setCart(cart.map(item =>
      item.name === name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const handleDecrement = (name) => {
    setCart(cart.map(item =>
      item.name === name
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));
  };

  const handleRemove = (name) => {
    setCart(cart.filter(item => item.name !== name));
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <h2>Total Cart Amount: ${totalCost.toFixed(2)}</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.name}>
          <img src={item.image} alt={item.name} width="120" />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.cost}</p>

          <button onClick={() => handleDecrement(item.name)}>
            -
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => handleIncrement(item.name)}>
            +
          </button>

          <p>Total: ${item.cost * item.quantity}</p>

          <button onClick={() => handleRemove(item.name)}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={onContinueShopping}>
        Continue Shopping
      </button>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
