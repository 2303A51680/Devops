import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const items = [
    { id: 1, name: "Laptop", price: 1000, color: "#1abc9c" },
    { id: 2, name: "Phone", price: 600, color: "#3498db" },
    { id: 3, name: "Headphones", price: 150, color: "#9b59b6" },
    { id: 4, name: "Keyboard", price: 80, color: "#e67e22" },
    { id: 5, name: "Mouse", price: 40, color: "#e74c3c" },
    { id: 6, name: "Monitor", price: 300, color: "#2ecc71" },
  ];

  const [quantities, setQuantities] = useState(
    items.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const increment = (id) => {
    setQuantities({ ...quantities, [id]: quantities[id] + 1 });
  };

  const decrement = (id) => {
    if (quantities[id] > 0) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  const reset = (id) => {
    setQuantities({ ...quantities, [id]: 0 });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>

      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={quantities[item.id]}
          increment={() => increment(item.id)}
          decrement={() => decrement(item.id)}
          reset={() => reset(item.id)}
          bgColor={item.color}
        />
      ))}
    </div>
  );
}

export default Cart;