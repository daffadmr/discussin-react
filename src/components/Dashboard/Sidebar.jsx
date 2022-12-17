import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoWithName from "../../assets/png/logoWithName.png";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import auth from "../../utils/auth";
import { Box, Modal } from "@mui/material";

const Sidebar = () => {
  const [activeList, setActiveList] = useState(null);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(window.location.pathname)
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
          {list.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={`${item.route}`}
                  onClick={() => setActiveList(item.name)}
                  className={`flex gap-2 items-center my-5 p-2 text-[16px] rounded-[10px] text-white ${
                    window.location.pathname === item.route &&
                    "text-navy bg-white font-extrabold"
                  // } ${
                  //   activeList === null &&
                  //   window.location.pathname === item.route
                  //     ? "text-navy bg-white font-extrabold"
                  //     : ""
                  // }`}
                  }`}
                >
                  <item.icon />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="bg-danger rounded-[10px]">
          <button
            className="flex gap-2 text-[16px] text-white py-2 px-4 mr-4"
            onClick={() => handleOpen()}
          >
            <LogoutOutlinedIcon />
            Log out
          </button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          className="flex items-center justify-center"
        >
          <Box className="bg-white w-[30vw] flex flex-col gap-3 pt-5 rounded-lg text-center items-center">
            <WarningAmberOutlinedIcon
              className="text-danger"
              sx={{
                fontSize: 50,
              }}
            />
            <h1 className="px-5 font-extrabold">Log Out</h1>
            <p>Are you sure want to log out?</p>
            <div className="flex justify-center items-center px-5 gap-5 -mt-3">
              <button
                className="border border-danger text-danger py-1 px-8 my-5 rounded-lg font-bold"
                onClick={handleClose}
              >
                No
              </button>
              <button
                onClick={() => auth.signOut(navigate)}
                className="bg-danger text-white py-1 px-8 my-5 rounded-lg font-bold"
              >
                Yes
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Sidebar;
