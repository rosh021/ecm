import React, { useState } from "react";
import "./login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

import { Link, useHistory } from "react-router-dom";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import { async } from "@firebase/util";

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        history.push("/");
      }
    } catch (error) {
      alert(error.message);
    }

    // console.log(e);

    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     // history.push("/");
    //     console.log(auth);
    //   })
    //   .catch((error) => alert(error.message));
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        alert("User is Successfully Created");
      }
    } catch (error) {
      alert(error.message);
    }

    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     if (auth) {
    //       console.log(auth);
    //       // history.push("/");
    //     } //it create the user name and password
    //   })
    //   .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <BedroomBabyIcon fontSize="large" className="header__logoIcon" />
          <h2 className="header__logoName">eShop</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login__signButton" onClick={signIn} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to trams and conditions of Amazon Clone.
          Please see our Privacy Notice.
        </p>
        <button
          className="login__registerButton"
          type="submit"
          onClick={register}
        >
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};
