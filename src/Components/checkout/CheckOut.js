import React from "react";
import { useStateValue } from "../../StateProvider";
import { CheckOutProduct } from "../checkOutProduct/CheckOutProduct";
import "./checkout.css";
import { SubTotal } from "./subtotal/SubTotal";

export const CheckOut = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-fe.ssl-images-amazon.com/images/G/35/x-site/events/2019/Outlet/Outlet_1500x300_2._CB453940163_.jpg"
          alt=""
        />

        <h2 className="checkout__title"> Your Shopping Cart</h2>
        <hr />
        {basket.map((item) => (
          <CheckOutProduct
            title={item.title}
            image={item.image}
            id={item.id}
            price={item.price}
            rating={item.rating}
          
          />
        
        ))}
        
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};
