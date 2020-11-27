import { Link, useHistory } from 'react-router-dom';
import React, { useState , useEffect}from 'react'
import CheckoutItem from './CheckoutItem';
import './payment.css'
import { useStatevalue } from './StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { gettotal } from './reducer';
import axios from './axios';
import {db} from "./firebase"

function Payment() {
    const [{ basket, user } , dispatch] = useStatevalue();
    const history = useHistory();
    
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate sepecial stripe secret  which allows us to change a customer
        const getClientSecret = async() => {
            const response = await axios({
                method: "post",
                // Stripe expects the total in  a currencies subunits 
                url: `/payment/create?total=${gettotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)

             
        }
        getClientSecret();

    },[basket])
    console.log("The secrets >>>", clientSecret)
    const handleSubmit = async (event) => {
         // do all the fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment( clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
         // paymentIntern = payment confirmation
         
            
            db.collection("users")
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created 
            })

            setSucceeded(true); 
            setError(null)
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
        }

    const handleChange = event => {
        //Listen for the changes in the cardElement
        //and display any error as the customer type there card details

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
        
    }

    return (
            <div className="payment">
                    
                <div className="payment_container">
                    {/* payment section delivery a ddress */}
                    <h1>Checkout (
                        <Link to="/checkout" > {basket?.length} items )</Link></h1>
                        <div className="payment_section">
                        <div className="payment_title">
                            <h3 className="h3tag">
                            Delivery  Address 
                            </h3>
                </div>
                    <div className="address">
                        <p>{user?.email}</p>
                            <p>100 H.A VIHAR HARIHAR NAGAR </p>
                            <p>INDIRA NAGAR </p>
                            <p>Lucknow</p>
                        
                    </div>
                </div>

                </div>
                    <div className="payment_section">
                        <div className="payment_titles">
                            <h3 className="h3tag" >
                                Product Reviews 
                            </h3>
                        </div>
                        <div className="payment_items">
                        
                        {basket.map((item) => (
                        <CheckoutItem
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        ))}
                        </div>
                        
                    </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3 className="h3tag">Payment method</h3>
                    </div>
                    <div className="payment_mode">
                    
                        <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="price_container">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3 className="h3tag"> order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={gettotal(basket)}
                                displayType={"text"}
                                thousandSeperator={true}
                                prefix={"₹"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>
                                    {processing ? <p>Processing </p>: "BuyNOw"}
                                </span>

                            </button>
                        </div> 
                        {/* Error */}
                        {error && <div>{error}</div>}
                        </form>
                
                    </div>
                
                </div>
                
                
            
            </div> 

        )
    }

export default Payment
