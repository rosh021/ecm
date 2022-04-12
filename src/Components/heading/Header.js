import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
          alt=" amazon icon"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <div className="header__option">
          <span className="header_optionLineOne"> Hello Guest</span>
          <span className="header_optionLineTwo"> Sign In</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne"> Returns </span>
          <span className="header_optionLineTwo"> & orders</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne"> Your</span>
          <span className="header_optionLineTwo"> Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
