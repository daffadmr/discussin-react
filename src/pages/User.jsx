import React, { useEffect, useState } from "react";
import UserAPI from "../apis/users.api";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await UserAPI.getAllUser();
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <div className="container">
      <h1>Users</h1>
      <div className="users">
        {user.map((data) => {
          return (
            <div className="user-card">
              <p>{data.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
