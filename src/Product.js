import React from "react";
import "./product.css";
import { useStatevalue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStatevalue();
  const addtocart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
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
      <div className=" info" data-wow-delay="0.2s">
        <p>{title}</p>
        <p className="porduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button onClick={addtocart} type="submit">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
