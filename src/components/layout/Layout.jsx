import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { TopNavBar } from "../topNavBar/TopNavBar";
import "./layout.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <TopNavBar />
      <Navbar />
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};
