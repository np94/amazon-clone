import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home"> 
            <div className="home__container">
            <img 
            className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="Amazon prime images"
            />
        
        <div className="home__row">
            <Product 
            id="12345"
            title={'Ce Sport qui rend fou (All about tennis)'} 
            price={20.99} 
            image={"https://images-na.ssl-images-amazon.com/images/I/51Z0whXm+4L._SX319_BO1,204,203,200_.jpg"} 
            rating={3}
            />
            
            <Product
            id="123678"
            title={'KitchenAid Mixer KP26M9XCCU 6-Quart Bowl-Lift Professional Stand Mixer, Passion Red'}
            price={549.00}
            image={"https://i.ebayimg.com/images/g/bZYAAOSwm6xeTRYb/s-l600.jpg"}
            rating={5}
            />
            
        </div>
        
        <div className="home__row">
        <Product 
        id="1237897"
        title={'Garmin Fenix 3 Multiple sports with GPS navigation'}
        price={215.00}
        image={"https://images-na.ssl-images-amazon.com/images/I/71YGNKl02LL._AC_SX466_.jpg"}
        rating={2}
        />

        <Product 
        id="12378971"
        title={'Samsung 27 inch FHD 1920x1080 Curved Desktop Monitor for Business, HDMI, VGA, VESA'}
        price={149.00}
        image={"https://images-na.ssl-images-amazon.com/images/I/814GgobXjRL._AC_SX450_.jpg"}
        rating={3}
        />

        <Product 
        id="12378972"
        title={'Sony Playstation 5 Console'}
        price={499.00}
        image={"https://images-na.ssl-images-amazon.com/images/I/61AyKaKa4TL._AC_SX679_.jpg"}
        rating={5} 
        />
        </div>

        <div className="home__row">
        <Product 
        id="12378973"
        title={'Epic Freewave Balanced Board - Balance Trainer'}
        price={99.00}
        image={"https://images-na.ssl-images-amazon.com/images/I/81ajSWZ97aL._AC_SX466_.jpg"}
        rating={4}
        />
        </div>

            </div>
        </div>
    )
}

export default Home
