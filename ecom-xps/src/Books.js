import React from "react";
import Product from "./Product";
import "./Books.css";

function Books() {
  return (
    <div className="books">
      <div className="books__row">
        <Product
          id="300000001"
          title="1984 (Deluxe Hardbound Edition)"
          price={399.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/914RNwcL7lL.jpg"
          }
          rating={5}
        />

        <Product
          id="300000002"
          title="12 Rules for Life: An Antidote to Chaos"
          price={370.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71wR8wezE1L.jpg"
          }
          rating={5}
        />

        <Product
          id="300000003"
          title="Feluda Samagra (i & Ii) Hardcover"
          price={1849.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/41e1swIqXrL.jpg"
          }
          rating={4}
        />
      </div>

      <div className="books__row">
        <Product
          id="300000004"
          title="Beyond Order: 12 More Rules for Life"
          price={612.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71mUs3rW9TL.jpg"
          }
          rating={5}
        />

        <Product
          id="300000005"
          title="Crime and Punishment "
          price={149.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81lpZ087szL.jpg"
          }
          rating={5}
        />

        <Product
          id="300000006"
          title="The Alchemist Paperback"
          price={175.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
          }
          rating={4}
        />
      </div>

      <div className="books__row">
        <Product
          id="300000007"
          title="Great Stories for Children Paperback – 1"
          price={152.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/711hfHGE+cL.jpg"
          }
          rating={4}
        />

        <Product
          id="300000008"
          title="The Immortals of Meluha (Shiva Trilogy): 1"
          price={269.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81zHwTa288L.jpg"
          }
          rating={4}
        />

        <Product
          id="300000009"
          title="The Archer Hardcover"
          price={165.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71pjaEBslxL.jpg"
          }
          rating={4}
        />

        <Product
          id="300000010"
          title="The Pursuit of Happiness"
          price={100.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/816Gd8Xh3TL.jpg"
          }
          rating={5}
        />
      </div>

      <div className="books__row">
        <Product
          id="300000011"
          title="Encyclopedia of Space ( Set of 8 Books)"
          price={840.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81PZEckZAUL.jpg"
          }
          rating={5}
        />

        <Product
          id="300000012"
          title="Sapiens: A Brief History of Humankind"
          price={345.0}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg"
          }
          rating={5}
        />

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
    </div>
  );
}

export default Books;
