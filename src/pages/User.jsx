import React from "react";
import TableUsers from "../components/TableUsers";

const User = () => {
  return (
    <div className="container">
      <h1 className="pb-5">Manage User</h1>
      <div className="users">
        <TableUsers />
      </div>
    </div>
  );
};

export default User;
