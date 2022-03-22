import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;
  return (
    <div className="product__container">
      <img src={img} alt="" />
      <div className="product__info">
        <p className="product__name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
