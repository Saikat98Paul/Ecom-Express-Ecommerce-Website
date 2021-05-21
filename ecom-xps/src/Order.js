import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Order({ order }) {
  const [{ profile }, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2>Order Details</h2>
      <p>
        <h4>Ordered on: </h4>
        {moment
          .unix(order.data.created)
          .format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
      <p className="order__id">
        <h4>Order id:</h4>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      { profile?.address ? (<h3 className="order__shipping">
        Shipping Details: <a>{profile?.userName}</a>
        <p>{profile?.address}</p>
        <p>{profile?.addressline}</p>
        <p>{profile?.addressstate}</p>
        <p>{profile?.addresscountry}</p>
      </h3>) : (
          <h3 className="order__deliveryAddress">(Delivery is not possible. You didn't fill the address)</h3>
      )}
    </div>
  );
}

export default Order;
