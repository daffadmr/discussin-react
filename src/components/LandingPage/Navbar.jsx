import React, { useState } from "react";
import LogoLP from "../../assets/svg/LogoLP.svg";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState(null);
  const [showNav, setShowNav] = useState(false);

  const hamburgerClick = () => {
    setClicked(!clicked);
    setShowNav(!showNav);
  };
  return (
    <header className="py-2 bg-white sticky top-0 z-10 shadow-lg">
      <div className="container lg:px-[110px]">
        <div className="flex justify-between items-center flex-wrap">
          <img className="w-[150px]" src={LogoLP} alt="" />
          <button
            className={`flex flex-col gap-2 transition sm:hidden ${
              clicked ? "click" : ""
            }`}
            onClick={() => hamburgerClick()}
          >
            <span className="hamburger-line origin-top-left transition duration-500 ease-in-out"></span>
            <span className="hamburger-line transition duration-500 ease-in-out"></span>
            <span className="hamburger-line origin-bottom-left transition duration-500 ease-in-out"></span>
          </button>
          <nav
            className={`bg-white absolute right-5 top-9 max-w-[250px] w-[80vw] py-5 shadow-lg rounded-lg sm:flex sm:static sm:bg-transparent sm:shadow-none sm:py-0 sm:justify-end mt-8 sm:mt-0 mr-5 sm:mr-0 items-center ${
              showNav ? "" : "hidden"
            }`}
          >
            <ul className="flex flex-col sm:flex-row px-5 sm:px-0 gap-5">
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
