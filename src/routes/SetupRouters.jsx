import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
// import Thread from "../pages/Thread";
// import User from "../pages/User";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import Home from "../pages/home/Home";
import UserList from "../pages/userList/UserList";
import User from "../pages/user/User";
import Post from "../pages/post/Post";
import NewUser from "../pages/newUser/NewUser";

const SetupRouters = () => {
  return (
    <>
      <Router>
        <Topbar />
        <div className="appContainer">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<UserList />} />
            <Route path="user/:userId" element={<User />} />
            <Route path="newUser" element={<NewUser />} />
            <Route path="posts" element={<Post />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default SetupRouters;
