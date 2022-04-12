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
          <Product
            title="JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and
          dynamic web apps, games, and pages."
            price={34.95}
            image="https://images-na.ssl-images-amazon.com/images/I/41A1HlpXkpL._SX404_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            title="JavaScript and jQuery: Learn JavaScript and jQuery quickly by building fun, interactive, and
          dynamic web apps, games, and pages"
            price={18.9}
            image="https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Real-World Next.js: Build scalable, high-performance, and modern web applications using Next.js, the React framework for production"
            price={15.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51hnOZHAntL._SX403_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            title="Node.js Design Patterns: Design and implement production-grade Node.js applications using proven patterns and techniques."
            price={64.01}
            image="https://m.media-amazon.com/images/I/71yDpbdEY+L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            title="The Road to React: Learn React quickly by building fun, interactive, and
          dynamic web apps, pages"
            price={29.78}
            image="https://m.media-amazon.com/images/I/511-vIg1HaL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Vue.js Quick Start Guide: Learn how to build amazing and complex reactive web applications easily using Vue.js 1st Edition, Kindle Edition"
            price={34.47}
            image="https://images-na.ssl-images-amazon.com/images/I/41VGV9-ewcL._SX403_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            title="HTML, CSS, and JavaScript All in One: Learn HTML, CSS and  JavaScript quickly by building fun, interactive, and
          dynamic web apps, games, and pages."
            price={23.96}
            image="https://m.media-amazon.com/images/I/41jTCuy9tbL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};
