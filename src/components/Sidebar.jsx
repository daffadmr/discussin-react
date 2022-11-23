import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/logo";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
  return (
    <div className="h-screen w-[224px] shadow-2xl">
      <div className="flex items-center justify-center p-[10px]">
        <Logo />
      </div>
      <div className="flex flex-col justify-between items-center h-[85vh]">
        <ul>
          <li className="sidebar-list">
            <GridViewOutlinedIcon />
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li className="sidebar-list">
            <AccountCircleOutlinedIcon />
            <Link to={"/users"}>Users</Link>
          </li>
          <li className="sidebar-list">
            <GridViewOutlinedIcon />
            <Link to={"/threads"}>Threads</Link>
          </li>
          <li className="sidebar-list">
            <TopicOutlinedIcon />
            <Link to={"/topics"}>Topics</Link>
          </li>
        </ul>
        <div>
          <button className="flex gap-2 text-[16px] text-primary">
            <LogoutOutlinedIcon />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
