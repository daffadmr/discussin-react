import React, { useEffect, useState } from "react";
import UserAPI from "../apis/users.api";
import TableUsers from "../components/TableUsers";

const User = () => {
  const [user, setUser] = useState([]);
  console.log(user)
  const getUser = async () => {
    try {
      const response = await UserAPI.getAllUser();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <h1 className="pb-5">Manage User</h1>
      <div className="users">
        <TableUsers data={user}/>
      </div>
    </div>
  );
};

export default User;
