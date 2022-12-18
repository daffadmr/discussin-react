import React from "react";
import { Link } from "react-router-dom";
import LogoLP from "../../assets/svg/LogoLP.svg";
import auth from "../../utils/auth";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="py-2 bg-white">
      <div className="container lg:px-[110px]">
        <div className="flex justify-between items-center flex-wrap">
          <img className="w-[150px]" src={LogoLP} alt="" />
          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#feature">Feature</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                {auth.isAuthorization() ? (
                  <div className="relative">
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        color="inherit"
                        sx={{
                          padding: 0,
                          textTransform: "capitalize",
                          fontFamily: "inherit",
                          fontSize: "inherit"
                        }}
                        endIcon={<KeyboardArrowDownIcon />}
                      >
                        {localStorage.getItem("username")}
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link to={"/dashboard"}>Dashboard</Link>
                        </MenuItem>
                        <MenuItem
                          className="text-inherit"
                          onClick={() => {
                            auth.signOut();
                          }}
                        >
                          <p>Log out</p>
                        </MenuItem>
                      </Menu>
                  </div>
                ) : (
                  <Link to={"/login"}>Sign in</Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
