import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableUsers from "../components/TableUsers";
import { fetchDataUser, userSelector } from "../store/features/userSlice";

const User = () => {
  // const users = useSelector((state) => state.user.data)
  const users = useSelector(userSelector.selectAll);
  const dispatch = useDispatch();

  const filteredUser = users.filter((user) => {
    return !user.isAdmin;
  });

  useEffect(() => {
    dispatch(fetchDataUser());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="pb-5">Manage User</h1>
      <div className="users">
        <TableUsers data={filteredUser} />
      </div>
    </div>
  );
};

export default User;
