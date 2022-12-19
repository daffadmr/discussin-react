import React from "react";
import { Link } from "react-router-dom";
import LogoWithName from "../../assets/svg/LogoWithName";
import auth from "../../utils/auth";

const Footer = () => {
  return (
    <footer className="bg-[#301C8A] text-white">
      <div className="container">
        <div className="py-12 flex flex-col xl:flex-row justify-between flex-wrap gap-16">
          <div className="flex flex-col gap-2">
            <LogoWithName />
            {auth.isAuthorization() ? (
              <div className="flex flex-col">
                <Link to={"/dashboard"}>Go to Dashboard</Link>
                <span
                  className="p-0 m-0"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  Log out
                </span>
              </div>
            ) : (
              <Link to={"/login"}>
                <span className="underline"> Admin Page</span>
              </Link>
            )}
          </div>
          <div className="flex gap-16 xl:gap-52 flex-col xl:flex-row flex-wrap">
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">About</h3>
              <ul>
                <li>About us</li>
                <li>Features</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">Company</h3>
              <ul>
                <li>Blog</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">About</h3>
              <ul>
                <li>Support@Explore.co.id</li>
                <li>021-1234-4456</li>
                <li>Explore, SCBD. Jakarta</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 bg-[#373F41] text-white">
        <p>© Discuss.In. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
