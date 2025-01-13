import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/images/svg/aCart-Logo.svg";
import ConfirmModalBox from "../../components/confirmModalBox/ConfirmModalBox";
import CustomButton from "../../components/customButton/CustomButton";
import { Loader } from "../../components/loader/Loader";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import "./login.scss";

const Login = () => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [useLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigate();

  const handleUserLogin = async () => {
    if (useLogin.email === "" || useLogin.password === "") {
      return alert("Please enter your email and password");
    }

    setLoading(true);
    try {
      // Firebase Authentication
      const users = await signInWithEmailAndPassword(
        auth,
        useLogin.email,
        useLogin.password
      );

      // Firestore Query to Fetch User Details
      const q = query(
        collection(fireDB, "user"),
        where("uid", "==", users?.user?.uid)
      );
      setConfirmModal(true);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let user;
        querySnapshot.forEach((doc) => {
          user = doc.data();
        });

        // Save User Data to Local Storage
        localStorage.setItem("users", JSON.stringify(user));

        // Reset Form
        setUserLogin({ email: "", password: "" });

        setLoading(false);

        // Redirect Based on Role
        if (user.role === "user") {
          navigation("/user-dashboard");
        } else {
          navigation("/admin-dashboard");
        }
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Error during login:", error);
      toast("Login failed. Please check your credentials.");
      setLoading(false);
    }
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  // const handleForgotPassword = async () => {
  //   if (useLogin.email === "") {
  //     return alert("Please enter your email address");
  //   }
  //   setLoading(true);
  //   try {
  //     await sendPasswordResetEmail(auth, useLogin.email);
  //     alert("Password reset email sent! Please check your inbox.");
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <>
      <div className="login-container">
        {confirmModal && (
          <ConfirmModalBox
            title="Login Successful!"
            description="Welcome back to your account"
            onClose={() => {
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
              <h2>Login</h2>
              <span className="line"></span>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setUserLogin({ ...useLogin, email: e.target.value })
                }
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="password"
                onChange={(e) =>
                  setUserLogin({ ...useLogin, password: e.target.value })
                }
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
              <span
                className="forgot-password"
                onClick={() => {
                  navigation("/forgot-password");
                }}
              >
                Forgot Password?
              </span>
              <span>
                <p>Don&apos;t have an account?</p>
                <Link to="/signup">Sign Up</Link>
              </span>
              <CustomButton
                onClick={handleUserLogin}
                text={loading ? <Loader className="loader-btn" /> : "LOGIN"}
              />
            </form>
          </div>
          <div className="auth-image">
            {/* <img src={LoginImg} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
