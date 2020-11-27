import React from 'react'
import "./basketitem.css"

function CheckoutItem({id, image, title, price, rating}) {
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
        
                </div>
            
            </div>
    )
}

export default CheckoutItem;
