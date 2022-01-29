import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div class="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Fire%20TV.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionL1">Hello Guest</span>
          <span className="header_optionL2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionL1">Returns</span>
          <span className="header_optionL2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionL1">Your</span>
          <span className="header_optionL2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon className="header_basketIcon" />
            <span className="header_optionL2 header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
