//jshint esversion:6

import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth, db } from './firebase';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect } from 'react';
import { useState } from 'react';



function Header() {

    const [{basket, user}] = useStateValue();
    const [userData, setUserData] = useState({});
    
    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
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
        
    const handleMobile = () => {
        let hide = document.getElementById('mobile');
        let hide1 = document.getElementById('mobile1');
        let hide2 = document.getElementById('mobile2');
        let hide3 = document.getElementById('mobile3');
        let manuIcon = document.getElementById('icon');
        let mobileManu = document.querySelector('.mobileManu');
        const vw = Math.max(document.documentElement.clientWidth);
        if(vw <= 768)
        {
            hide.style.display = "none";    
            hide1.style.display = "none";    
            hide2.style.display = "none";    
            hide3.style.display = "none";    
            manuIcon.style.display = "block";    
            mobileManu.style.display = "none";    
        }
        else
        {
            hide.style.display = "flex";    
            hide1.style.display = "flex";    
            hide2.style.display = "flex";    
            hide3.style.display = "flex";    
            manuIcon.style.display = "none";    
            mobileManu.style.display = "none";    
        }
    };
    
    window.addEventListener('resize', handleMobile);

    const showMobileManu = () => {
        let mobileManu = document.querySelector('.mobileManu');
        mobileManu.style.display = "flex";
        mobileManu.classList.add('slide');
    };

    const hideMobileManu =() => {
        let mobileManu = document.querySelector('.mobileManu');
        mobileManu.style.display = "none";
    };

    return (
        <div className="header" onLoad={handleMobile}>
            {/* nav icon for mobile view */}
            <div hidden id="icon" className="navIcon" onClick={showMobileManu}>
                <IconButton style={{background: "rgba(255,255,255,0.1)"}}>
                    <MenuIcon style={{color: "white"}}/>
                </IconButton>
            </div>
            {/* nav icon for mobile view */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="../images/logo.png" alt="Amazon" 
                />
            </Link>
            <div id="mobile" className="header__deliver">
                <Link to="/" style={{textDecoration: "none", color:"white"}}>
                    <p className="header__optionLineOne">Deliver to {userData?.address}</p>
                    <p className="header__optionLineTwo"><LocationOnIcon style={{fontSize: "large"}}/> {userData?.country}</p>
                </Link>
            </div>
            <div className="header__search">
                <input 
                    className="header__searchInPut"
                    type="text"
                />
                <SearchIcon className="header__searchIcon" />
                {/* search icon Mui */}
            </div>

            <div className="header__nav">
                <Link id="mobile1" to={!user &&'/login'} style={{textDecoration: "none"}}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {!userData?.fname?"Guest" : userData.fname}
                        </span>
                        <span className="header__optionLineTwo">
                            {user? "Sign out" : "Sign in"}
                        </span>
                    </div>
                </Link>

                <Link id="mobile2" to="/orders" style={{textDecoration: "none"}}>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>

                <div id="mobile3" className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout" style={{textDecoration: "none"}}>
                    <div className="header__optionBasket">
                        <AddShoppingCartIcon /> 
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span> 
                    </div>
                </Link>
                
            </div>


            {/* moblie view header */}
            
            <div hidden className="mobileManu">
                <div id="closeManuIcon" className="mobileManuExit" onClick={hideMobileManu}>
                    <IconButton style={{background: "rgba(255,255,255,0.1)"}}>
                        <CloseIcon style={{color: "white"}} />
                    </IconButton>
                </div>
                <Link to={!user &&'/login'} style={{textDecoration: "none", marginBottom: "10px"}}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello {!userData?.fname?"Guest" : userData.fname}
                        </span>
                        <span className="header__optionLineTwo">
                            {user? "Sign out" : "Sign in"}
                        </span>
                    </div>
                </Link>

                <Link to="/orders" style={{textDecoration: "none", marginBottom: "10px"}}>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Header;
