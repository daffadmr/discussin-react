import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Thread from "../pages/Thread";
import User from "../pages/User";
import Topic from "../pages/Topic";
import Login from "../pages/Login";
import PrivateRouters from "./PrivateRouters";
import ProtectedRouters from "./ProtectedRouters";

const SetupRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouters />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/threads" element={<Thread />} />
          <Route path="/topics" element={<Topic />} />
        </Route>
        <Route element={<ProtectedRouters/>}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouters;
