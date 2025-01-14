export const handleSignOut = (navigate) => {
  localStorage.removeItem("users");
  navigate("/login");
};
