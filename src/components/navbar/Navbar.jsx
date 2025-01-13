import { CircleUser, CircleX, ShoppingCart, Text } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/svg/aCart-Logo.svg";
import { SearchBar } from "../searchBar/SearchBar";
import "./navbar.scss";
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigation = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  const handleDashboard = () => {
    if (user?.role === "admin") {
      navigation("/admin-dashboard");
    } else {
      navigation("/user-dashboard");
    }
  };

  return (
    <>
      <nav className="navbar-container">
        <Link to={"/"}>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="nav-list desktop-nav">{navList}</div>
        <SearchBar />
        <div className="user-cart-container">
          <span className="user" onClick={handleDashboard}>
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
        {/* Hamburger Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CircleX /> : <Text />}
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="mobile-menu">{navList}</div>}
    </>
  );
};
