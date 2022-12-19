import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import auth from "../utils/auth";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <h1 className="text-[5rem]">Error 404</h1>
        <h2>Page not Found</h2>
        {auth.isAuthorization() ? (
          <div className="flex gap-5">
            <Link to={"/"}>Back to home</Link>
            <Link to={"/dashboard"}>Back to dashboard</Link>
          </div>
        ) : (
          <Link to={"/"}>Back to home</Link>
        )}
      </div>
    </>
  );
};

export default NotFound;
