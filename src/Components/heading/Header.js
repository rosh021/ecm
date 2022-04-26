import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import { auth } from "../login/firebase";

export const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handelOnAuth = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <BedroomBabyIcon fontSize="large" className="header__logoIcon" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handelOnAuth} className="header__option">
            <span className="header_optionLineOne"> Hello Guest</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header_optionLineOne"> Returns </span>
          <span className="header_optionLineTwo"> & orders</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne"> Your</span>
          <span className="header_optionLineTwo"> Prime</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
