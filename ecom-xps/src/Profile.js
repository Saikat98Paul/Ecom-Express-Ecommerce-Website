import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db } from "./firebase";
import "./Profile.css";
import { useStateValue } from "./StateProvider";

function Profile() {
  const history = useHistory();
  const [{ user, profile }, dispatch] = useStateValue();
  const [name, setName] = useState(profile?.userName);
  const [phone, setPhone] = useState(profile?.phone);
  const [address, setAddress] = useState(profile?.address);
  const [addressline, setAddressline] = useState(profile?.addressline);
  const [addresscountry, setAddresscountry] = useState(profile?.addresscountry);
  const [addressstate, setAddressstate] = useState(profile?.addressstate);

  const submitProfile = (e) => {
    e.preventDefault();
    console.log("name -> ", name);

    let uid = user?.uid;

    // set into database
    db.collection("users")
      .doc(uid)
      .collection("profile")
      .doc(`profile${uid}`)
      .set({
        userName: name,
        phone: phone,
        address: address,
        addressline: addressline,
        addressstate: addressstate,
        addresscountry: addresscountry,
        email: user?.email,
      });

    history.push("/");
  };

  const handleNameChange = (val) => {
    setName(val);
  };

  const handlePhoneChange = (val) => {
    setPhone(val);
  };

  const handleAddresshouseChange = (val) => {
    setAddress(val);
  };

  const handleAddresslineChange = (val) => {
    setAddressline(val);
  };

  const handleAddressstateChange = (val) => {
    setAddressstate(val);
  };

  const handleAddresscountryChange = (val) => {
    setAddresscountry(val);
  };

  return (
    <div className="profile">
      <Link to="/">
        <img
          className="profile__logo"
          src="https://www.medianews4u.com/wp-content/uploads/2020/06/Ecom-Express-to-Hire-over-7000-Employees.jpg"
        />
      </Link>
      <div className="profile__container">
        <h1>Profile</h1>
        <form>
          <h5>Email</h5>
          <input type="email" defaultValue={user?.email} disabled />

          <h5>Name</h5>
          <input
            type="text"
            placeholder="Please Enter Your Name"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />

          <h5>Mobile</h5>
          <input
            type="text"
            placeholder="Please Enter Your Contact Number"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
          />

          <h5>Delivery Address</h5>
          <input
            type="text"
            placeholder="Please Enter Your House-No & Address-Line"
            value={address}
            onChange={(e) => handleAddresshouseChange(e.target.value)}
          />

          <input
            type="text"
            placeholder=" City-Pincode"
            value={addressline}
            onChange={(e) => handleAddresslineChange(e.target.value)}
          />

          <input
            type="text"
            placeholder="Please Enter Your State"
            value={addressstate}
            onChange={(e) => handleAddressstateChange(e.target.value)}
          />

          <input
            type="text"
            placeholder="Please Enter Your Country"
            value={addresscountry}
            onChange={(e) => handleAddresscountryChange(e.target.value)}
          />

          <button onClick={submitProfile} className="profile__UpdateButton">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
