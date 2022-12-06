import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableUsers from "../components/TableUsers";
import {fetchDataUser} from "../store/features/userSlice" 

const User = () => { 
  const users = useSelector((state) => state.user.data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataUser());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="pb-5">Manage User</h1>
      <div className="users">
        <TableUsers data={users}/>
      </div>
    </div>
  );
};

export default User;
