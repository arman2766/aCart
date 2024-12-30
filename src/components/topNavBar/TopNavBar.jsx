import { CirclePercent, Repeat, Truck } from "lucide-react";
import "./topNavBar.scss";
export const TopNavBar = () => {
  return (
    <>
      <div className="top-navbar-container">
        <span className="top-nav-left">
          <Truck color="#fff" />
          <p>Free Delivery For All Orders Now</p>
        </span>
        <span className="top-nav-center">
          <CirclePercent color="#fff" />
          <p>Offer Every Product</p>
        </span>
        <span className="top-nav-right">
          <Repeat color="#fff" />
          <p> Quick Easy Return</p>
        </span>
      </div>
    </>
  );
};
