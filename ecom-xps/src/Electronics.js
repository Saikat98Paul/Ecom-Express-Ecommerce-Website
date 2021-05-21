import React from "react";
import "./Electronics.css";
import Product from "./Product";

function Electronics() {
  return (
    <div className="electronics">
      <div className="electronics__row">
        <Product
          id="300000013"
          title="Ikigai: The Japanese secret to a long and happy life"
          price={300.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
          }
          rating={5}
        />
      </div>
      <div className="electronics__row">
        <Product
          id="300000013"
          title="Ikigai: The Japanese secret to a long and happy life"
          price={300.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
          }
          rating={5}
        />
      </div>
      <div className="electronics__row">
        <Product
          id="300000013"
          title="Ikigai: The Japanese secret to a long and happy life"
          price={300.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
          }
          rating={5}
        />
      </div>
      <div className="electronics__row">
        <Product
          id="300000013"
          title="Ikigai: The Japanese secret to a long and happy life"
          price={300.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg"
          }
          rating={5}
        />

<Product
          id="300000013"
          title="Prestige Iris 750 Watt Mixer Grinder"
          price={3399.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81%2BM1QrVNIL._SL1500_.jpg"
          }
          rating={5}
        />

<Product
          id="300000013"
          title="Cosmic Byte 7.1 USB Dual Driver Gaming Headset"
          price={2599.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81IfrXVE19L._SL1500_.jpg"
          }
          rating={5}
        />

<Product
          id="300000013"
          title="pTron Bassbuds Bluetooth 5.0 earphones"
          price={899.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61HSxuSHiKL._SL1100_.jpg"
          }
          rating={5}
        />
      </div>
      <div className="electronics__row">
        <Product
          id="300000013"
          title="Redgear Cosmo 7.1 USB Wired Gaming Headphones with RGB"
          price={1999.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71nFWwpCLzL._SL1500_.jpg"
          }
          rating={5}
        />
      </div>
    </div>
  );
}

export default Electronics;
