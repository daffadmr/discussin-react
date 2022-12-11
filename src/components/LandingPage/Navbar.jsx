import React from 'react'
import { Link } from "react-router-dom";
import LogoWithName from "../../assets/svg/LogoWithName";

const Navbar = () => {
  return (
    <header className="py-2 bg-white">
    <div className="container lg:px-[110px]">
      <div className="flex justify-between items-center flex-wrap">
        <LogoWithName />
        <nav>
          <ul className="flex gap-5">
            <li>Home</li>
            <li>Feature</li>
            <li>Download</li>
            <li>FAQ</li>
            <li>About</li>
          </ul>
        </nav>
        <Link to={"/login"}>Sign in</Link>
      </div>
    </div>
  </header>
  )
}

export default Navbar