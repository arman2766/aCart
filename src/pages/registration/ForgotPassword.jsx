import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/svg/aCart-Logo.svg";
import ConfirmModalBox from "../../components/confirmModalBox/ConfirmModalBox";
import CustomButton from "../../components/customButton/CustomButton";
import { Loader } from "../../components/loader/Loader";
import { auth } from "../../firebase/FirebaseConfig";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [useLogin, setUseLogin] = useState({
    email: "",
  });

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (useLogin.email === "") {
      return alert("Please enter your email address");
    }
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, useLogin.email);
      setConfirmModal(true);
      setUseLogin({ email: "" });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-container">
        {confirmModal && (
          <ConfirmModalBox
            title="Password reset successfully"
            description="Password reset email sent! Please check your inbox."
            onClose={() => {
              setConfirmModal(false);
            }}
            redirect={() => {
              setConfirmModal(false);
            }}
          />
        )}
        <div className="inner-container">
          <div className="form-container">
            <Link to="/">
              <img src={Logo} alt="" className="logo" />
            </Link>
            <form className="form">
              <h2>Forgot Password</h2>
              <span className="line"></span>
              <input
                type="email"
                placeholder="Email"
                value={useLogin.email}
                onChange={(e) =>
                  setUseLogin({ ...useLogin, email: e.target.value })
                }
              />

              <CustomButton
                text={
                  loading ? (
                    <Loader className="loader-btn" />
                  ) : (
                    "FORGOT PASSWORD"
                  )
                }
                onClick={handleForgotPassword}
              />
            </form>
          </div>
          <div className="auth-image"></div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
