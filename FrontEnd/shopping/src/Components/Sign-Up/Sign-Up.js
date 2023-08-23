import React, { useState } from "react";
import axios from "axios";
import "./Sign-Style.css";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [User, setUser] = useState("");
  return (
    <>
      <div className="sign-app">
        <div className="sign-up-cart">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            type="Number"
            placeholder="Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const User = { firstName, lastName, age, email, password };
              try {
                const result = await axios.post("http://localhost:5000/users/", {
                  firstName,
                  lastName,
                  age,
                  email,
                  password,
                });
                console.log(result);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Sign-Up
          </button>
        </div>
      </div>
    </>
  );
};
export default SignUp;
