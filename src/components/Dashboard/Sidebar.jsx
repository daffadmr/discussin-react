import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoWithName from "../../assets/png/logoWithName.png";
import LogoOnly from "../../assets/svg/LogoOnly.svg";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ViewComfyOutlinedIcon from "@mui/icons-material/ViewComfyOutlined";
import auth from "../../utils/auth";
import { Box, Modal } from "@mui/material";

const Sidebar = () => {
  const [activeList, setActiveList] = useState(null);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      icon: ViewComfyOutlinedIcon,
      route: "/dashboard/threads",
      name: "Post",
    },
    {
      icon: TopicOutlinedIcon,
      route: "/dashboard/topics",
      name: "Topic",
    },
  ];

  return (
    <div className="h-screen text-none w-[15vw] shadow-2xl bg-navy pt-4">
      <div className="flex items-center justify-center p-[10px]">
        <Link to={"/dashboard"}>
          <img src={logoWithName} alt="" className="hidden 2xl:inline" />
          <img src={LogoOnly} alt="" className="2xl:hidden" />
        </Link>
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
                  }`}
                >
                  <item.icon />
                  <span className="hidden 2xl:inline">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="bg-danger rounded-[10px]">
          <button
            className="flex gap-2 text-[16px] text-white py-2 px-4 xl:mr-4"
            onClick={() => handleOpen()}
          >
            <LogoutOutlinedIcon />
            <span className="hidden 2xl:inline">Log out</span>
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
            <p className="px-5 font-extrabold">Log Out</p>
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
