import { CircleUser, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/svg/aCart-Logo.svg";
import { SearchBar } from "../searchBar/SearchBar";
import "./navbar.scss";
export const Navbar = () => {
  const navigation = useNavigate();

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

  const user = JSON.parse(localStorage.getItem("users"));

  const handleSignUp = () => {
    navigation("/signup");
  };

  const handleSignOut = () => {
    localStorage.removeItem("users");
    navigation("/login");
  };

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
          <span
            className="user"
            onClick={() => {
              navigation("/user-dashboard");
            }}
          >
            <CircleUser />
            {user?.name}
          </span>
          <span className="sign-up sign-out">
            {!user ? (
              <span onClick={handleSignUp}>Sign Up</span>
            ) : (
              <span onClick={handleSignOut}>Sign Out</span>
            )}
          </span>
          <span className="cart">
            <ShoppingCart />
          </span>
        </div>
      </nav>
    </>
  );
};
