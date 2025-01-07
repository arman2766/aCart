import { Link } from "react-router-dom";
import SignUpImg from "../../assets/images/jpg/login-img.jpg";
import Logo from "../../assets/images/svg/aCart-Logo.svg";
import CustomButton from "../../components/customButton/CustomButton";
const SignUp = () => {
  return (
    <>
      <div className="login-container">
        <div className="inner-container">
          <div className="form-container">
            <img src={Logo} alt="" className="logo" />
            <form className="form">
              <h2>Sign Up</h2>
              <span className="line"></span>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <span></span>
              <span>
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>
              </span>
              <CustomButton text="SIGN UP" />
            </form>
          </div>
          <div className="img">
            <img src={SignUpImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
