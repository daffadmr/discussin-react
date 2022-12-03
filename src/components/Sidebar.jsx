import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoWithName from "../assets/svg/LogoWithName";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import auth from "../utils/auth";

const Sidebar = () => {
  const [activeList, setActiveList] = useState(null);
  const navigate = useNavigate();

  const list = [
    {
      icon: GridViewOutlinedIcon,
      route: "/dashboard",
      name: "Dashboard",
    },
    {
      icon: AccountCircleOutlinedIcon,
      route: "/dashboard/users",
      name: "Users",
    },
    {
      icon: TopicOutlinedIcon,
      route: "/dashboard/threads",
      name: "Threads",
    },
    {
      icon: TopicOutlinedIcon,
      route: "/dashboard/topics",
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
                className={`flex gap-2 my-5 px-[40px] mr-5 text-[16px] text-discussin-gray border-8 border-white border-y-0 border-r-0 ${
                  activeList === item.name &&
                  "text-secondary border-8 border-l-secondary border-y-0 border-r-0"
                } ${
                  activeList === null && window.location.pathname === item.route
                    ? "text-secondary border-8 border-l-secondary border-y-0 border-r-0"
                    : ""
                }`}
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
          <button
            className="flex gap-2 text-[16px] text-danger mr-12"
            onClick={() => auth.signOut(navigate)}
          >
            <LogoutOutlinedIcon />
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
