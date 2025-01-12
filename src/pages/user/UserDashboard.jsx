const UserDashboard = () => {
  const userName =
    JSON.parse(localStorage.getItem("users") || "{}")?.name || "Guest";

  return <div>{userName} Dashboard</div>;
};

export default UserDashboard;
