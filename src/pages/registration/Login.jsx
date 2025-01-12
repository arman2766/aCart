import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/images/jpg/login-img.jpg";
import Logo from "../../assets/images/svg/aCart-Logo.svg";
import CustomButton from "../../components/customButton/CustomButton";
import "./login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <div className="login-container">
        <div className="inner-container">
          <div className="form-container">
            <img src={Logo} alt="" className="logo" />
            <form className="form">
              <h2>Login</h2>
              <span className="line"></span>
              <input type="text" placeholder="Username" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="password"
              />
              <span
                onClick={handlePasswordToggle}
                className="password-show-hide"
              >
                {showPassword ? (
                  <EyeOff className="eye" />
                ) : (
                  <Eye className="eye" />
                )}
              </span>
              {/* <span className="forgot-password">Forgot Password?</span> */}
              <span>
                <p>Don&apos;t have an account?</p>
                <Link to="/signup">Sign Up</Link>
              </span>
              <CustomButton text="LOGIN" />
            </form>
          </div>
          <div className="img">
            <img src={LoginImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
