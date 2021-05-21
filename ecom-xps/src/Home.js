import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.tavant.com/sites/default/files/html-page-assets/images/media/ott-services/OTT-Services-banner.jpg"
          alt=""
        />
        <div className="home__products">
          <div className="home__row">
            <Product
              id="000000001"
              title="ASUS ROG Strix G17 17.3' FHD 120Hz"
              price={122990.0}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/81Ha%2BSI%2BQML._SL1500_.jpg"
              }
              rating={4}
            />
            <Product
              id="000000002"
              title="Bajaj Rex Mixer Grinder, 500W"
              price={1942.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/7176dXpdwrL._SL1500_.jpg"
              }
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="000000003"
              title="Wipro WiFi Enabled Smart Bulb 9-Watt"
              price={599.0}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/71Y3lsKoFUL._SL1500_.jpg"
              }
              rating={3}
            />
            <Product
              id="000000004"
              title="ARKAN Foldable Wooden Laptop Desk"
              price={699.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/61yWIoOkqSL.jpg"
              }
              rating={4}
            />
            <Product
              id="000000005"
              title="Death Note (All-in-One Edition)"
              price={2799.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/71sBVJBC3+L.jpg"
              }
              rating={5}
            />
          </div>

          <div className="home__row">
            <Product
              id="000000006"
              title="LG 190 L Single Door Refrigerator"
              price={16490.0}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/71PjRr580lL._SL1500_.jpg"
              }
              rating={5}
            />
            <Product
              id="000000007"
              title="SPORTS FCB PU-Leather Gym Bag"
              price={699.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/51PkqTguQEL.jpg"
              }
              rating={4}
            />
            <Product
              id="000000008"
              title="New Apple Watch Series 6 (Blue)"
              price={49900.0}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/718qilkBKUL._SL1500_.jpg"
              }
              rating={4}
            />
            <Product
              id="000000009"
              title="Oppo A31 (6GB RAM, 128GB Storage)"
              price={11990.0}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/61IhTtJUXJL._SL1500_.jpg"
              }
              rating={3}
            />
          </div>

          <div className="home__row">
            <Product
              id="000000010"
              title="LG 28 L Convection Microwave Oven"
              price={12299.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/71iB3v552hL._SL1500_.jpg"
              }
              rating={5}
            />
            <Product
              id="000000011"
              title="Single Seater Swing"
              price={11999.0}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/61lOqezfTRL._SL1160_.jpg"
              }
              rating={4}
            />
            <Product
              id="000000012"
              title="Nivia Football Shoes"
              price={750.0}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/61AJE8sEF6L._SL1156_.jpg"
              }
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="000000013"
              title="Harry Potter Box Set"
              price={2749.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/71rOzy4cyAL.jpg"
              }
              rating={5}
            />
            <Product
              id="000000014"
              title="Samsung 6.5 kg Washing Machine"
              price={14190.0}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/51QmQjHQASL._SL1500_.jpg"
              }
              rating={5}
            />
          </div>

          <div className="home__row">
            <Product
              id="000000015"
              title="OnePlus Y Series (43 inches) Full HD LED Smart Android TV"
              price={24999.99}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/812wg%2BpfXAL._SL1500_.jpg"
              }
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
