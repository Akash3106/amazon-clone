import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStatevalue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStatevalue();
  const handelsignout = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo"
        ></img>
      </Link>

      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handelsignout} className="header_option">
            <span className="line1">Hello {user ? user.email : "Guest"}</span>
            <span className="line2">{user ? "Sign out" : "Sign In"}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="line1">Returns</span>
          <span className="line2">& Order</span>
        </div>
        <div className="header_option">
          <span className="line1">Try</span>
          <span className="line2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="line2 basket_count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
