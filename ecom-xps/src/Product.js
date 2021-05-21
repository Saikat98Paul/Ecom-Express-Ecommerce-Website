import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast.info(
      `${title} 
        Added worth \n ₹${price}`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  <small className="inr">₹</small>
                  <strong>{value}</strong>
                </p>
              </>
            )}
            desimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
          />
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
