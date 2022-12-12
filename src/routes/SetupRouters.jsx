import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Thread from "../pages/Thread";
import User from "../pages/User";
import Topic from "../pages/Topic";
import Login from "../pages/Login";
import PrivateRouters from "./PrivateRouters";
import ProtectedRouters from "./ProtectedRouters";
import LandingPage from "../pages/LandingPage";
import DetailUser from "../pages/DetailUser";

const SetupRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<PrivateRouters />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<User />} />
          <Route path="users/:id" element={<DetailUser />} />
          <Route path="threads" element={<Thread />} />
          <Route path="topics" element={<Topic />} />
        </Route>
        <Route element={<ProtectedRouters />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouters;
