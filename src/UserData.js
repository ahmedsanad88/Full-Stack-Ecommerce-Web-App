//jshint esversion:6

import React from 'react';
import './UserData.css';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';


function UserData() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    // handling submition to address form.
    const handleSubmit = (e) => {
        e.preventDefault();
        const fname = getId('firstname');
        const lname = getId('lastname');
        const mobile = getId('mobile');
        const address = getId('address');
        const city = getId('city');
        const country = getId('country');

        if (fname && lname && mobile && address && city && country)
        {
            savedata(fname, lname, mobile, address, city, country);
            // show alert
            document.querySelector('.alert').style.display="block";
            // removing alert after 3 sec.
            setTimeout(() => {
                document.querySelector('.alert').style.display="none";
            }, 3000);
            //  reset form after submition
            document.getElementById('contactform').reset();
            // redirect to payment page.
            setTimeout(() => {
                history.push('/payment');
            }, 4000);
        } else {
            alert("please Enter all data required to manage deliver your orders, Thanks..");
        }
    };
    // Getting the id value for each input. 
    function getId(id) {
        return document.getElementById(id).value;
    }
    // save user address data to firestore user database.
    const savedata = (fname, lname, mobile, address, city, country) => {
        if(user) {
            db.collection('users')
                .doc(user?.uid)
                .set({
                    fname: fname,
                    lname: lname,
                    mobile: mobile,
                    address: address,
                    city: city,
                    country: country
                }, {merge: true})
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    alert("Error writing document: ", error);
                });
            } else {
                alert('please login/register First');
            } 
        };
                
    return (
        <div className="form">
            <div className="sub__form">
                <div className="form__text">
                    <h4>Address Form</h4>
                    <p>Please fill below form to complete your purchase prcess</p>
                </div>
                <form action="POST" className="form__elements" id="contactform" autoComplete="off" encType="text/plain">
                    <div className="alert"><p>Thanks For updating your address...</p>
                    <p>Will transfer you into payment page in seconds....</p>
                    </div>

                    <input id="firstname" type="text" placeholder="First Name"/>
                    <input id="lastname" type="text" placeholder="Last Name"/>
                    <input id="mobile" type="tel" placeholder="123-45-678"/>
                    <input id="address" type="text" placeholder="Address"/>
                    <input id="city" type="text" placeholder="City"/>
                    <input id="country" type="text" placeholder="Country"/>
                    <button id="submit" onClick={handleSubmit}>Submit</button>
                </form>
                <button id="home" onClick={() => history.push('/')}>HOME</button>
            </div>
        </div>
    )
}

export default UserData;