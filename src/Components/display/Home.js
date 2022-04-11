import React from "react";
import "./home.css";
import { Product } from "./product/Product";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images.unsplash.com/photo-1624984608976-8a7358d25bce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt=""
        />
        <div className="home__row">
          <Product />
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
};
