//jshint esversion:6

import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';


function Subtotal() {
    const history = useHistory();
    const [{basket, user}] = useStateValue();   
   
    return (
        <div className="subtotal">
            {/* install react-currency-format */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket?.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order
                        contain a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => 
            {
                basket?.length !== 0 && user ? history.push('/data') : alert("please Login and add items to your basket.")
            }
            }>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;