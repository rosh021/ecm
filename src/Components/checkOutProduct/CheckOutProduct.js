import React from "react";
import { useStateValue } from "../../StateProvider";
import "./checkOutProduct.css";

export const CheckOutProduct = ({ title, price, rating, image,id }) => {
  const [{ basket }, dispatch] = useStateValue();

  const handelOnRemove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkOutProduct">
      <img src={image} className="checkoutProduct__image" alt="" />
      <div>
        <div className="product__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={handelOnRemove}>Remove From Basket</button>
        </div>
      </div>
    </div>
  );
};
