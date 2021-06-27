//jshint esversion:6

import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket, user}] = useStateValue();

    return (
        <div className="checkout">
        {/* we will divide checkout page into left & right */}
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://chloecaldwell.com/wp-content/uploads/2019/12/UPS-2017-Banner-Ad-728x90-NC-CA-En-2.png"
                    alt="Ads"
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title" >
                        Your Shopping Basket
                    </h2>
                    {/* BasketItems */}
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

            <div className="checkout__right">
                {/*  building float subtotal comp. */}
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
