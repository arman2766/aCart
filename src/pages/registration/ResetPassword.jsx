import { confirmPasswordReset } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/images/svg/aCart-Logo.svg";
import ConfirmModalBox from "../../components/confirmModalBox/ConfirmModalBox";
import CustomButton from "../../components/customButton/CustomButton";
import { Loader } from "../../components/loader/Loader";
import { auth } from "../../firebase/FirebaseConfig";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmModal, setConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);

  const oobCode = query.get("oobCode"); // Extract reset code from URL

  const handlePasswordReset = async () => {
    if (!oobCode) {
      toast.error("Invalid or missing reset code.");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setConfirmModal(true);
    } catch (error) {
      console.error(error);
      toast.error("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <div className="login-container">
        {confirmModal && (
          <ConfirmModalBox
            title="Password has been reset successfully!"
            onClose={() => {
              setConfirmModal(false);
              navigate("/login");
            }}
            redirect={() => {
              setConfirmModal(false);
              navigate("/login");
            }}
          />
        )}
        <div className="inner-container">
          <div className="form-container">
            <Link to="/">
              <img src={Logo} alt="" className="logo" />
            </Link>
            <form className="form">
              <h2>Reset Password</h2>
              <span className="line"></span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <CustomButton
                text={
                  loading ? <Loader className="loader-btn" /> : "RESET PASSWORD"
                }
                onClick={handlePasswordReset}
              />
            </form>
          </div>
          <div className="auth-image"></div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
