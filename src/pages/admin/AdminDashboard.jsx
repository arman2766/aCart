import {
  CalendarCheck,
  FolderKanban,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  MailMinus,
  PanelRightOpen,
  ShieldCheck,
  User2Icon,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import SmallLogo from "../../assets/images/png/favicon.png";
import Logo from "../../assets/images/svg/aCart-Logo.svg";

import { Tab, TabList, Tabs } from "react-tabs";

import OrderDetails from "../../components/admin/OrderDetails";
import ProductDetails from "../../components/admin/ProductDetails";
import UsersDetails from "../../components/admin/UsersDetails";
import CustomButton from "../../components/customButton/CustomButton";
import { handleSignOut } from "../../utility/authUtils";
import { user } from "../../utility/userAdminData";
import "./admin-dashboard.scss";

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Track active tab index
  const navigate = useNavigate();

  const tabContent = [
    {
      title: "Total Product",
      icon: <FolderKanban />,
      component: <ProductDetails />,
    },
    {
      title: "Total Users",
      icon: <Users />,
      component: <UsersDetails />,
    },
    {
      title: "Orders",
      icon: <ListOrdered />,
      component: <OrderDetails />,
    },
  ];

  const cardContent = [
    {
      icon: <FolderKanban />,
      title: "Total Products",
      value: 10,
    },
    {
      icon: <Users />,
      title: "Total Users",
      value: 12,
    },
    {
      icon: <ListOrdered />,
      title: "Total Orders",
      value: 17,
    },
  ];
  const now = new Date();

  // Custom formatting
  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(now);
  return (
    <div className="admin-sidebar-container">
      <Sidebar className="admin-sidebar" collapsed={collapsed}>
        <Menu>
          <Link to={"/"}>
            <img
              src={collapsed ? SmallLogo : Logo}
              alt=""
              className={collapsed ? "small-logo" : "logo"}
            />
          </Link>

          <MenuItem component={<Link to="/admin-dashboard" />}>
            {collapsed ? <LayoutDashboard /> : "Dashboard"}
            <PanelRightOpen
              className="collapse"
              onClick={() => setCollapsed(!collapsed)}
            />
          </MenuItem>

          {!collapsed && (
            <SubMenu label="Profile Info">
              <div className="user-info-container">
                <span className="user-icon">
                  <User2Icon />
                  <span>{user?.name}</span>
                </span>
                <span>
                  <MailMinus />
                  {user?.email}
                </span>
                <span>
                  <ShieldCheck />
                  {user?.role}
                </span>
                <span>
                  <CalendarCheck /> {user?.date}
                </span>
              </div>
            </SubMenu>
          )}

          <Tabs
            selectedIndex={activeTabIndex}
            onSelect={(index) => setActiveTabIndex(index)}
          >
            <TabList>
              {tabContent.map((tab, index) => (
                <Tab key={index}>
                  <MenuItem>{collapsed ? tab.icon : tab.title}</MenuItem>
                </Tab>
              ))}
            </TabList>
          </Tabs>

          <MenuItem onClick={() => handleSignOut(navigate)}>
            {collapsed ? <LogOut /> : "Logout"}
          </MenuItem>
        </Menu>
      </Sidebar>

      <main>
        <div className="header-container">
          <span>
            <h2>Hello, {user?.name}</h2>
            <p>Today is {formattedDate}</p>
          </span>
          <span>
            <CustomButton text="Add new product" />
          </span>
        </div>
        <div className="card-container">
          {cardContent.map((item, i) => (
            <div className="card" key={i}>
              <span>
                <p>{item.icon}</p>
                <p>{item.title}</p>
              </span>
              <p className="value">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="tab-content">
          {tabContent[activeTabIndex].component}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
