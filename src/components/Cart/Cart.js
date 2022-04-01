import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(props.children);

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat(((total * 10) / 100).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <p>Grand Total: ${parseFloat(grandTotal.toFixed(3))}</p>
      {props.children}
    </div>
  );
};

export default Cart;
