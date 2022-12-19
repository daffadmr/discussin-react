import React from "react";
import { Helmet } from "react-helmet-async";
import TableUsers from "../components/Dashboard/TableUsers";
import { TabTitle } from "../components/title";

const User = () => {
  TabTitle("Manage User");
  return (
    <>
      <Helmet>
        <title>Dashboard - Manage User</title>
        <meta name="description" content="Discuss.In admin dashboard" />
      </Helmet>
      <div className="container">
        <h1 className="text-3xl pb-5">Manage User</h1>
        <div className="users">
          <TableUsers />
        </div>
      </div>
    </>
  );
};

export default User;
