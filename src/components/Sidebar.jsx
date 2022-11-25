import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoWithName from "../assets/svg/LogoWithName";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
  const [activeList, setActiveList] = useState(null);

  const list = [
    {
      icon: GridViewOutlinedIcon,
      route: "/",
      name: "Dashboard",
    },
    {
      icon: AccountCircleOutlinedIcon,
      route: "/users",
      name: "Users",
    },
    {
      icon: TopicOutlinedIcon,
      route: "/threads",
      name: "Threads",
    },
    {
      icon: TopicOutlinedIcon,
      route: "/topics",
      name: "Topic",
    },
  ];

  return (
    <div className="h-screen w-[224px] shadow-2xl">
      <div className="flex items-center justify-center p-[10px]">
        <LogoWithName />
      </div>
      <div className="flex flex-col justify-between items-center h-[85vh]">
        <ul>
          {list.map((item) => {
            return (
              <li
                onClick={() => setActiveList(item.name)}
                className={`flex gap-2 pb-5 text-[16px] text-primary ${activeList === item.name && 'text-black'} ${activeList === null && window.location.pathname === item.route ? "text-black" : ""}`}
              >
                <Link to={`${item.route}`} className={`flex gap-2`}>
                  <item.icon />
                  {item.name}
                </Link>
              </li>
            );
          })}
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
