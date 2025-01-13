import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Home from "./pages/home/Home";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ForgotPassword from "./pages/registration/ForgotPassword";
import Login from "./pages/registration/Login";
import ResetPassword from "./pages/registration/ResetPassword";
import SignUp from "./pages/registration/SignUp";
import Shop from "./pages/shop/Shop";
import UserDashboard from "./pages/user/UserDashboard";
import { ProtectedRouteAdmin } from "./protectedRoute/ProtectedRouteAdmin";
import { ProtectedRouteUser } from "./protectedRoute/ProtectedRouteUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productInfo/:id" element={<ProductInfo />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRouteUser>
                <UserDashboard />
              </ProtectedRouteUser>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRouteAdmin>
                <AdminDashboard />
              </ProtectedRouteAdmin>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
