import React from "react";
import { useStateValue } from "../../../StateProvider";
import "./product.css";

export const Product = ({ title, image, price, rating, id }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_To_Basket",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to basket</button>
    </div>
  );
};
