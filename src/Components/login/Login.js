import React from "react";
import "./login.css";

import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://s.yimg.com/fz/api/res/1.2/Y6_2JrgbOtmw17xWJcdJyw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEyMDtxPTgwO3c9MTY2/https://s.yimg.com/zb/imgv1/5f2270c1-a608-31a5-b210-32579831f7ce/t_500x300"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__signButton">Sign In</button>
        </form>
        <p>
            By signing-in you agree to trams and conditions of Amazon Clone. Please see our Privacy Notice.
        </p>
        <button className="login__registerButton">Create Your Amazon Account</button>
      </div>
    </div>
  );
};
