import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoWithName from "../assets/png/logoWithName.png";
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
    <div className="h-screen w-[224px] shadow-2xl bg-navy pt-4">
      <div className="flex items-center justify-center p-[10px]">
        <img src={logoWithName} alt="" />
      </div>
      <div className="flex flex-col justify-between items-center h-[85vh]">
        <ul>
          {list.map((item) => {
            return (
              <li
                onClick={() => setActiveList(item.name)}
                className={`flex gap-2 my-5 p-2 text-[16px] text-white rounded-[10px] ${
                  activeList === item.name &&
                  "text-navy bg-white font-extrabold"
                } ${
                  activeList === null && window.location.pathname === item.route
                    ? "text-navy bg-white font-extrabold"
                    : ""
                }`}
              >
                <Link to={`${item.route}`} className={`flex gap-2 items-center`}>
                  <item.icon />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <button
            className="flex gap-2 text-[16px] text-white mr-8 bg-danger py-2 px-5 rounded-[10px]"
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
