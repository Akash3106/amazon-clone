import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import Basketitem from './Basketitem';
import "./order.css"



function Order({ order }) {
    return (
        <div className="order">
            <h2>order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY ,h:mma")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <Basketitem 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
                
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order_total"> Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandseperator={true}
                prefix={"₹"}
            />
            
        </div>
    )
}

export default Order
