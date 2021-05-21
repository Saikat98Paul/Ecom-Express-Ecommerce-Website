import React from "react";
import Product from "./Product";
import "./Mobiles.css";

function Mobiles() {
  return (
    <div className="mobiles">
      <div className="mobiles__row">
        <Product
          id="2000000000"
          title="OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)"
          price={29999.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71Lx9l3NivL._SL1500_.jpg"
          }
          rating={5}
        />

        <Product
          id="2000000001"
          title="Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage)"
          price={8799.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg"
          }
          rating={4}
        />

        <Product
          id="200000003"
          title="Redmi 9A (Nature Green, 2GB Ram, 32GB Storage)"
          price={6799.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71sxlhYhKWL._SL1500_.jpg"
          }
          rating={4}
        />
      </div>

      <div className="mobiles__row">
        <Product
          id="2000000002"
          title="Redmi 9 Power (Mighty Black, 6GB RAM, 128GB Storage)"
          price={12999.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61LHaUOhehL._SL1200_.jpg"
          }
          rating={4}
        />

        <Product
          id="2000000005"
          title="Redmi Note 10 (Aqua Green, 6GB RAM, 128GB Storage)"
          price={13999.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71Kmfs0T0BL._SL1500_.jpg"
          }
          rating={4}
        />
      </div>

      <div className="mobiles__row">
        <Product
          id="2000000006"
          title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage)"
          price={10999.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71yYaNztZ0L._SL1500_.jpg"
          }
          rating={4}
        />

        <Product
          id="2000000007"
          title="Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
          price={16499.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg"
          }
          rating={4}
        />

        <Product
          id="2000000009"
          title="OPPO F19 (Prism Black, 6GB RAM, 128GB Storage)"
          price={18990.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71crCF%2BogwL._SL1500_.jpg"
          }
          rating={4}
        />
      </div>

      <div className="mobiles__row">
        <Product
          id="555544444"
          title="Apple iPhone 12 Mini (64GB)"
          price={67100.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71i%2B-WmxHWL._SL1500_.jpg"
          }
          rating={5}
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
    </div>
  );
}

export default Mobiles;
