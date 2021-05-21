import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth, provider } from "./firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        toast.success("You Login Successfully.");
      })
      .catch((error) => {
        toast.error("Something went wrong, please check your credentials!");
        history.push("/login");
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
          toast.success("You Registered Successfully.");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong, please check your credentials!");
        history.push("/login");
      });
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then((auth) => {
        toast.success("You Login Successfully.");
        history.push("/");
      })
      .catch((error) => {
        toast.error("Something went wrong, please check your credentials!");
        history.push("/login");
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.medianews4u.com/wp-content/uploads/2020/06/Ecom-Express-to-Hire-over-7000-Employees.jpg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Ecom-Express Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Ecom-Express Account
        </button>
        <div className="login__Googleline"></div>

        <div className="login__signInGoogleButton" onClick={loginWithGoogle}>
          <p>Login with Google :</p>
          <img
            className="login__signInGoogleIcon"
            src="https://elearnam.com/assets/frontend/elegant/images/gicon.png"
            alt="google login"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
