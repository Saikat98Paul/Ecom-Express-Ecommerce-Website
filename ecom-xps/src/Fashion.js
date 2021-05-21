import React from "react";
import "./Fashion.css";
import Product from "./Product";

function Fashion() {
  return (
    <div className="fashion">
      <div className="fashion__row">
        <Product
          id="999999999"
          title="AELOMART Men's Cotton T-Shirt"
          price={415.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71zggz-oAyL._UL1500_.jpg"
          }
          rating={5}
        />

<Product
          id="999999999"
          title="WearIndia Boys' T-Shirt"
          price={440.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/518Y7EIjsvL._UL1222_.jpg"
          }
          rating={4}
        />

        <Product
          id="999999999"
          title="Fogg Xtremo Scent For Men, 100ml"
          price={320.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61u-MgTAjpL._SL1500_.jpg"
          }
          rating={5}
        />
      </div>

      <div className="fashion__row">
        <Product
          id="999999999"
          title="Walkway Womens Fashion Sandals"
          price={499.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71AxLQOtwYL._UL1500_.jpg"
          }
          rating={3}
        />

<Product
          id="999999999"
          title="Chalk By Pantaloons Boys' Plain Regular Fit T-Shirt"
          price={599.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71zPuGQ1-DL._UL1500_.jpg"
          }
          rating={4}
        />


        <Product
          id="999999999"
          title="Centrino Men's 7956 Formal Shoes"
          price={699.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71jgaUQrp5L._UL1500_.jpg"
          }
          rating={4}
        />
      </div>

      <div className="fashion__row">
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
          id="999999999"
          title="Ben Martin Men's Jeans"
          price={698.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61Don-d8JfL._UL1440_.jpg"
          }
          rating={4}
        />
      </div>
    </div>
  );
}

export default Fashion;
