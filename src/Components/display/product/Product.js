import React from "react";
import "./Product.css";
export const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>Lorem ipsum dolor sit amet.</p>
        <p className="product__price">
          <small>$</small>
          <strong>150</strong>
        </p>
        <div className="product__rating">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
        </div>
      </div>
    </div>
  );
};
