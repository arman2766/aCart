import { CircleUser, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/svg/aCart-Logo.svg";
import { SearchBar } from "../searchBar/SearchBar";
import "./navbar.scss";
export const Navbar = () => {
  const navList = (
    <ul className="nav-list-items">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/shop"}>Shop</Link>
      </li>
      <li>
        <Link to={"/men"}>Men</Link>
      </li>
      <li>
        <Link to={"/women"}>Women</Link>
      </li>
      <li>
        <Link to={"/kids"}>Kids</Link>
      </li>
    </ul>
  );
  return (
    <>
      <nav className="navbar-container">
        <Link to={"/"}>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="nav-list">{navList}</div>
        <SearchBar />
        <div className="user-cart-container">
          <span className="user">
            <CircleUser />
          </span>
          <span className="cart">
            <ShoppingCart />
          </span>
        </div>
      </nav>
    </>
  );
};
