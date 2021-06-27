import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {

        const handleMobile = () => {
        const vw = Math.max(document.documentElement.clientWidth);
        const productShow = document.getElementById('product__mobile');
        const mainProduct = document.getElementById('main_product');
        const mainProduct1 = document.getElementById('main_product1');
        const mainProduct2 = document.getElementById('main_product2');
        const mainProduct3 = document.getElementById('main_product3');
        const mainProduct4 = document.getElementById('main_product4');
        const mainProduct5 = document.getElementById('main_product5');
        const main = document.getElementById('main');
        if(productShow && mainProduct && mainProduct1 && mainProduct2 && mainProduct3 && mainProduct4 && mainProduct5 && main)
        {
            if(vw <= 768)
            {
                productShow.style.display = "flex";    
                mainProduct.style.display = "none";    
                mainProduct1.style.display = "none";    
                mainProduct2.style.display = "none";    
                mainProduct3.style.display = "none";    
                mainProduct4.style.display = "none";    
                mainProduct5.style.display = "none";    
                main.style.display = "none";    
            }
            else
            {
                productShow.style.display = "none";    
                mainProduct.style.display = "flex";    
                mainProduct1.style.display = "flex";    
                mainProduct2.style.display = "flex";    
                mainProduct3.style.display = "flex";    
                mainProduct4.style.display = "flex";    
                mainProduct5.style.display = "flex";    
                main.style.display = "block";    
            }
        }
    };
    window.addEventListener('resize', handleMobile);

    return (
        <div className="home" onLoad={handleMobile}>
            <div id="main" className="home__container">
                <img 
                    className="home__image"
                    src="../images/shop.svg" 
                    alt="banner" 
                />

                <div id="main_product" className="home__row">
                    {/* product */}
                    {/* product */}
                    <Product 
                        id="12321342"
                        title="Quick Clone Gel - Most Advanced Cloning Gel for Faster, Healthier, Stronger Rooting Clones. (75mL)"
                        price={15.44}
                        image="https://images-na.ssl-images-amazon.com/images/I/713mjTZKNVL._AC_SX679_.jpg"
                        rating={5}
                    />
                    <Product
                        id="12345768" 
                        title="Blue Yeti USB Recording & Streaming on PC and Mac, 3 Condenser Capsules, 4 Pickup Patterns, Headphone Output and Volume, Mic Gain Control, Adjustable Stand, Plug & Play-Silver"
                        price={170.54}
                        image="https://images-na.ssl-images-amazon.com/images/I/71aXlp2i%2BtL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>

                <div id="main_product1" className="home__row">
                    {/* product */}
                    {/* product */}
                    {/* product */}
                    <Product 
                        id="12654785"
                        title="HyperX QuadCast - USB Condenser Gaming Microphone, for PC, PS4 and Mac, Anti-Vibration Shock Mount, Four Polar patterns, Pop Filter, Gain Control, Podcasts, Twitch, YouTube, Discord, Red LED - Black"
                        price={160.21}
                        image="https://images-na.ssl-images-amazon.com/images/I/71RZ-McR9dL._AC_SL1500_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="19547532"
                        title="Anker Wireless Charger, PowerWave Stand, Qi-Certified for iPhone SE, 11, 11 Pro, 11 Pro Max, XR, Xs Max, XS, X, 8, 8 Plus, 10W Fast-Charging Galaxy S20 S10 S9 S8, Note 10 Note 9 (No AC Adapter)"
                        price={18.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51J1d8kZsCL._AC_SL1250_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="34687242"
                        title="Wireless Karaoke Machine, TONOR Bluetooth PA System Portable Singing Speaker with Dual Wireless Microphones, Disco Ball for Home Karaoke, Party, Class and Church（K20）"
                        price={219.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71ue1JM7p4L._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div id="main_product2" className="home__row">
                    {/* product */}
                    <Product 
                        id="16734952"
                        title="LG 49WL95C-W 49-Inch Curved 32: 9 Ultrawide Dqhd IPS with HDR10 and USB Type-C,49 Inch Curved - 32:9 DQHD Resolution"
                        price={1499.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71EP7F-yPKL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>

                <div id="main_product3" className="home__row">
                    {/* product */}
                    {/* product */}
                    <Product 
                        id="23456781"
                        title="CalDigit TS3 Plus Thunderbolt 3 Dock - 87W Charging, 7X USB 3.1 Ports, USB-C Gen 2, DisplayPort, UHS-II SD Card Slot, LAN, Optical Out, for 2016+ MacBook Pro & PC (Space Gray - 0.7m/2.3ft Cable)"
                        price={219.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51ixkd80hwL._AC_SL1028_.jpg"
                        rating={5}
                    />
                    <Product
                        id="13456789" 
                        title="Logitech MX Keys Advanced Wireless Illuminated Keyboard - Graphite"
                        price={109.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61PIn5vGm2L._AC_SL1001_.jpg"
                        rating={4}
                    />
                </div>

                <div id="main_product4" className="home__row">
                    {/* product */}
                    {/* product */}
                    {/* product */}
                    <Product 
                        id="23456764"
                        title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                        price={350.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="24576415"
                        title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
                        price={269.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="23457681"
                        title="Logitech MX Master 3 Advanced Wireless Mouse - Graphite"
                        price={89.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/614w3LuZTYL._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>

                <div id="main_product5" className="home__row">
                    {/* product */}
                    <Product 
                        id="21345765"
                        title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
                        price={999.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71jG%2Be7roXL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>
            </div>

            {/* Moblie sit up */}

            <div hidden id="product__mobile" className="home__rowMobile">
                <img 
                    className="home__image"
                    src="../images/shop.svg" 
                    alt="banner" 
                />

                {/* product */}
                {/* product */}
                <Product 
                    id="12321342"
                    title="Quick Clone Gel - Most Advanced Cloning Gel for Faster, Healthier, Stronger Rooting Clones. (75mL)"
                    price={15.44}
                    image="https://images-na.ssl-images-amazon.com/images/I/713mjTZKNVL._AC_SX679_.jpg"
                    rating={5}
                />
                <Product
                    id="12345768" 
                    title="Blue Yeti USB Recording & Streaming on PC and Mac, 3 Condenser Capsules, 4 Pickup Patterns, Headphone Output and Volume, Mic Gain Control, Adjustable Stand, Plug & Play-Silver"
                    price={170.54}
                    image="https://images-na.ssl-images-amazon.com/images/I/71aXlp2i%2BtL._AC_SL1500_.jpg"
                    rating={5}
                />
                {/* product */}
                {/* product */}
                {/* product */}
                <Product 
                    id="12654785"
                    title="HyperX QuadCast - USB Condenser Gaming Microphone, for PC, PS4 and Mac, Anti-Vibration Shock Mount, Four Polar patterns, Pop Filter, Gain Control, Podcasts, Twitch, YouTube, Discord, Red LED - Black"
                    price={160.21}
                    image="https://images-na.ssl-images-amazon.com/images/I/71RZ-McR9dL._AC_SL1500_.jpg"
                    rating={4}
                />
                <Product 
                    id="19547532"
                    title="Anker Wireless Charger, PowerWave Stand, Qi-Certified for iPhone SE, 11, 11 Pro, 11 Pro Max, XR, Xs Max, XS, X, 8, 8 Plus, 10W Fast-Charging Galaxy S20 S10 S9 S8, Note 10 Note 9 (No AC Adapter)"
                    price={18.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51J1d8kZsCL._AC_SL1250_.jpg"
                    rating={3}
                />
                <Product 
                    id="34687242"
                    title="Wireless Karaoke Machine, TONOR Bluetooth PA System Portable Singing Speaker with Dual Wireless Microphones, Disco Ball for Home Karaoke, Party, Class and Church（K20）"
                    price={219.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71ue1JM7p4L._AC_SL1500_.jpg"
                    rating={4}
                />
                {/* product */}
                <Product 
                    id="16734952"
                    title="LG 49WL95C-W 49-Inch Curved 32: 9 Ultrawide Dqhd IPS with HDR10 and USB Type-C,49 Inch Curved - 32:9 DQHD Resolution"
                    price={1499.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71EP7F-yPKL._AC_SL1500_.jpg"
                    rating={5}
                />
                {/* product */}
                {/* product */}
                <Product 
                    id="23456781"
                    title="CalDigit TS3 Plus Thunderbolt 3 Dock - 87W Charging, 7X USB 3.1 Ports, USB-C Gen 2, DisplayPort, UHS-II SD Card Slot, LAN, Optical Out, for 2016+ MacBook Pro & PC (Space Gray - 0.7m/2.3ft Cable)"
                    price={219.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ixkd80hwL._AC_SL1028_.jpg"
                    rating={5}
                />
                <Product
                    id="13456789" 
                    title="Logitech MX Keys Advanced Wireless Illuminated Keyboard - Graphite"
                    price={109.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61PIn5vGm2L._AC_SL1001_.jpg"
                    rating={4}
                />
                {/* product */}
                {/* product */}
                {/* product */}
                <Product 
                    id="23456764"
                    title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                    price={350.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
                    rating={5}
                />
                <Product 
                    id="24576415"
                    title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
                    price={269.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg"
                    rating={3}
                />
                <Product 
                    id="23457681"
                    title="Logitech MX Master 3 Advanced Wireless Mouse - Graphite"
                    price={89.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/614w3LuZTYL._AC_SL1500_.jpg"
                    rating={5}
                />
                {/* product */}
                <Product 
                    id="21345765"
                    title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
                    price={999.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71jG%2Be7roXL._AC_SL1500_.jpg"
                    rating={4}
                />
            </div>
        </div>
    )
}



export default Home;
