import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpImg from "../../assets/images/jpg/login-img.jpg";
import Logo from "../../assets/images/svg/aCart-Logo.svg";
import ConfirmModalBox from "../../components/confirmModalBox/ConfirmModalBox";
import CustomButton from "../../components/customButton/CustomButton";
import { Loader } from "../../components/loader/Loader";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
const SignUp = () => {
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleUserSignup = async () => {
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      return alert("All fields are required");
    }

    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      // Create User object
      const user = {
        name: userSignup.name,
        email: userSignup.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };

      // Create User Reference
      const userReference = collection(fireDB, "user");

      //Add User Details
      addDoc(userReference, user);
      setConfirmModal(true);
      setUserSignup({
        email: "",
        password: "",
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmModal = () => {
    setConfirmModal(false);
  };

  const handleRedirect = () => {
    navigation("/login");
  };

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {confirmModal && (
        <ConfirmModalBox
          title="Sign-Up Successful!"
          description="account has been created. Welcome aboard!"
          onClose={handleConfirmModal}
          redirect={handleRedirect}
          userName={userSignup.name || "Your"}
        />
      )}
      <div className="login-container">
        <div className="inner-container">
          <div className="form-container">
            <Link to="/">
              <img src={Logo} alt="" className="logo" />
            </Link>
            <form className="form">
              <h2>Sign Up</h2>
              <span className="line"></span>
              <input
                type="text"
                placeholder="Full Name"
                value={userSignup.name}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, name: e.target.value });
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={userSignup.email}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, email: e.target.value });
                }}
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="password"
                value={userSignup.password}
                onChange={(e) => {
                  setUserSignup({ ...userSignup, password: e.target.value });
                }}
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
              <span>
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>
              </span>
              <CustomButton
                text={loading ? <Loader className="loader-btn" /> : "SIGN UP"}
                onClick={handleUserSignup}
              />
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
