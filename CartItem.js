import React from "react";

function CartItem({
  name,
  price,
  quantity,
  increment,
  decrement,
  reset,
  bgColor,
}) {
  return (
    <div
      style={{
        border: "2px solid #333",
        padding: "15px",
        width: "260px",
        margin: "15px auto",
        borderRadius: "10px",
        backgroundColor: bgColor,
        color: "#fff",
      }}
    >
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>

      <button onClick={increment}>+</button>

      <button
        onClick={decrement}
        disabled={quantity === 0}
        style={{ margin: "0 10px" }}
      >
        -
      </button>

      <button onClick={reset}>Reset</button>

      <p>
        <b>Total: ${price * quantity}</b>
      </p>
    </div>
  );
}

export default CartItem;