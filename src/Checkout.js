import React from "react";
import Basketitem from "./Basketitem";
import "./checkout.css";
import { useStatevalue } from "./StateProvider";
import Subtotal from "./Subtotal";


function Checkout() {
  const [{ basket, user }] = useStatevalue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png"
          alt=""
        />
        <div className="checkout_title">
          <h3>Hello {user?.email}</h3>
          <h2>This is Your Checkout Basket</h2>
        </div>
        {basket.map((item) => (
          <Basketitem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="Checkout_right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
