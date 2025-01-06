import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/svg/aCart-Logo.svg";
import "./footer.scss";

export const Footer = () => {
  const footerList = (
    <ul className="footer-list-item">
      <li>
        <Link to={"/"}>Home</Link>
        <Link to={"/about-us"}>About Us</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/men"}>Men</Link>
        <Link to={"/women"}>Women</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </li>
    </ul>
  );
  return (
    <>
      <div className="footer-container">
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="items">{footerList}</div>
        <div className="social-media">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Youtube />
          </a>
        </div>
        <div className="copyright">
          <p>&copy; 2022 aCart. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
