import React from "react";
import TableUsers from "../components/Dashboard/TableUsers";
import { TabTitle } from "../components/title";

const User = () => {
  TabTitle("Manage User");
  return (
    <div className="container">
      <h1 className="text-3xl pb-5">Manage User</h1>
      <div className="users">
        <TableUsers />
      </div>
    </div>
  );
};

export default User;
