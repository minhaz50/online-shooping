import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  const { product, handleRemoveItem } = props;
  const { name, price, img, shipping, quantity } = props.product;
  return (
    <div className="review-container">
      <div className="review-item">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="review-item-details-container">
          <div className="review-item-details">
            <p className="porduct-name" title={name}>
              {name.length > 20 ? name.slice(0, 20) : name + "..."}
            </p>
            <p>
              <span>price: ${price}</span>
            </p>
            <p>
              <small>Shipping: ${shipping}</small>
            </p>
            <small>quantity: {quantity}</small>
          </div>
          <div className="delete-container">
            <button
              className="btn-delete"
              onClick={() => handleRemoveItem(product)}
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="icon"
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
