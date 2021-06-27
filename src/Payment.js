//jshint esversion:6

import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';


function Payment() {
      const [{basket, user}, dispatch] = useStateValue();

      const stripe = useStripe();
      const elements = useElements();
      const history = useHistory();

    //   create processing and succeeded for purchase button
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    //   create two state to handle change
      const [error, setError] = useState(null);
      const [disabled, setDisabled] = useState(true);
    
    //   one of the most important state regarding whole process to set secret

    const [clientSecret, setClientSecret] = useState(true);
    const [userData, setUserData] = useState({});


      useEffect(() => {
            // generate the special stripe secret which allows us to charge a client
            const getClientSecret = async () => {
                const response = await axios({
                    method: 'post',
                    // Stripes expects the total in a currencies subunits like if using dollars will be in cent that mean multiply by 100

                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                setClientSecret(response.data.clientSecret);
            }
            getClientSecret();
      }, [basket]);

    //   console.log(user);

        const handleSubmit = async (event) => {
            //  doing all fancy stripe stuff
            event.preventDefault();
            setProcessing(true);

            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
                // here will distructure the response
            }).then(({ paymentIntent }) => {
                // paymentIntent = payment confirmation
                // paymentIntent.id = order id
                // paymentIntent.created = to get the time for order creation.

                // will push orders to database to pull it on orders extension
                db.collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created
                    });   

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                // to empty the basket after confirm the payment
                dispatch({
                    type: 'EMPTY_BASKET'
                });

                history.replace('/orders');
            });

        };

    const handleChange = e => {
        // Listen for change in the cardElement
        // and Display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message: "");
    };

    useEffect(() => {
        db.collection('users')
        .doc(user?.uid)
        .get()
        .then(snapshot => {
            setUserData(snapshot.data());
        })
        .catch((error) => console.error("Error: ",error));
        // console.log(userData);
        return () => {
            // setUserData({});
            console.log('Data Updated');
        }
    }, [user?.uid]);

    return (
        <div className="payment">

            <div className="payment__container">
                {/* payment section - delivery add one element left and one element to right*/}
                <h1>
                    Checkout (<Link to="/checkout" style={{textDecoration:"none", color:"red"}}>{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Details</h3>
                    </div>
                    <div className="payment__address">
                        <p>{!userData?.fname? "Guest" : `${userData?.fname} ${userData?.lname}`}</p>
                        <p>{userData?.city}</p>
                        <p>{userData?.country}</p>
                    </div>
                </div>
                {/* payment section - items to review*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment section - payment method*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* stripe magic will go */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h4>Order Total: {value}</h4>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment;
