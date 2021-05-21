import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Link } from "react-router-dom";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="Footer">
      <a onClick={handleClick}>
        <div className="Footer__Back-To-Top">
          <ExpandLessIcon className="Footer__Back-To-Top-Text" />
          <div className="footer__back_to_top_text"> Back to Top</div>
        </div>
      </a>

      <div className="Footer__Vertical-Row">
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Get to Know Us</div>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Ecom-Express Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </div>

        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Make Money with Us</div>
          <ul>
            <li>Sell on Ecom-Express</li>
            <li>Sell under Ecom-Express</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Ecom-Express</li>
            <li>Advertise Your Products</li>
            <li>See More Make Money with Us</li>
          </ul>
        </div>

        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>COVID-19 and Ecom-Express</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Ecom-Express App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="Footer__Line">
        <Link to="/">
          <img
            className="Footer__Line-logo"
            src="data:image/png;base64,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"
            alt=""
          />
        </Link>
        <span className="Footer__Line-message">developed by Saikat Paul</span>
      </div>
    </div>
  );
}

export default Footer;
