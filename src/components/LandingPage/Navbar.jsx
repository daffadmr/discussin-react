import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import LogoLP from "../../assets/svg/LogoLP.svg";
import auth from "../../utils/auth";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
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
          {/* <LogoWithName /> */}
          <nav>
            <ul className="flex gap-5">
              <li>Home</li>
              <li>Feature</li>
              <li>Download</li>
              <li>FAQ</li>
              <li>About</li>
            </ul>
          </nav>
          {auth.isAuthorization() ? (
            <div className="relative">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
              >
                Halo, {Cookies.get("username")}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                className="ml-20"
              >
                <MenuItem onClick={handleClose}><Link to={"/dashboard"}>Dashboard</Link></MenuItem>
                <MenuItem  className="text-inherit" onClick={() => {auth.signOut()}}><p>Log out</p></MenuItem>
              </Menu>
            </div>
          ) : (
            <Link to={"/login"}>Sign in</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
