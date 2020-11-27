import React from "react";
import "./basketitem.css";
import { useStatevalue } from "./StateProvider";

function Basketitem({ id, image, title, price, rating }) {
  const [{ basket , user }, dispatch] = useStatevalue();

  const removeFrombasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="Basketproduct">
      <img className="Basketproduct_image" src={image} alt="" />
      <div className="Basketproduct_info">
        <h2 className="Basketproduct_title">{title}</h2>
        <p className="Basketproduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="Basketproduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        <button className="Basketproduct_button" onClick={removeFrombasket}>
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default Basketitem;
