import React from "react";
import "./AllProducts.css";
import Product from "./Product";

function AllProducts() {
  return (
    <div className="allProducts">
      <div className="allProducts__row">
        <Product
          id="111111111"
          title="Lenovo IdeaPad Flex"
          price={83990.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/717PHDbymML._SL1500_.jpg"
          }
          rating={4}
        />
        <Product
          id="222222222"
          title="Creature Square Sunglass"
          price={349.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/314kGh7sh1L.jpg"
          }
          rating={4}
        />
        <Product
          id="333333333"
          title="Noise Wireless Bluetooth Earbuds"
          price={1999.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61tcqkNYDgL._SL1500_.jpg"
          }
          rating={4}
        />
      </div>

      <div className="allProducts__row">
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
          id="4444444444"
          title="Blue Star 0.8 Ton Inverter Split AC"
          price={254999.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51%2BZOn7EQCL._SL1500_.jpg"
          }
          rating={5}
        />
      </div>

      <div className="allProducts__row">
        <Product
          id="000000005"
          title="Death Note (All-in-One Edition)"
          price={2799.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71sBVJBC3+L.jpg"
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
          id="555555555"
          title="Yamaha 6-Strings Acoustic Guitar"
          price={9490.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51INShoKdNL._SL1000_.jpg"
          }
          rating={5}
        />
      </div>

      <div className="allProducts__row">
        <Product
          id="666666666"
          title="Symphony Air Cooler 12-litres"
          price={11499.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61J2kbra6eL._SL1500_.jpg"
          }
          rating={5}
        />
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
        <Product
          id="000000011"
          title="Single Seater Swing"
          price={11999.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61lOqezfTRL._SL1160_.jpg"
          }
          rating={4}
        />
      </div>

      <div className="allProducts__row">
        <Product
          id="888888888"
          title="BULLMER Men's T Shirt"
          price={999.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/618COfjhmZL._UL1200_.jpg"
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
          id="000000002"
          title="Bajaj Rex Mixer Grinder, 500W"
          price={1942.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/7176dXpdwrL._SL1500_.jpg"
          }
          rating={4}
        />
        <Product
          id="555544444"
          title="Apple iPhone 12 Mini (64GB)"
          price={67100.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71i%2B-WmxHWL._SL1500_.jpg"
          }
          rating={5}
        />
      </div>

      <div className="allProducts__row">
        <Product
          id="777777777"
          title="Kent 8-Litres Water Purifier"
          price={11549.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71pP7OvqaRL._SL1500_.jpg"
          }
          rating={4}
        />
        <Product
          id="999999999"
          title="Ben Martin Men's Jeans"
          price={698.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61Don-d8JfL._UL1440_.jpg"
          }
          rating={4}
        />
      </div>

      <div className="allProducts__row">
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
  );
}

export default AllProducts;
