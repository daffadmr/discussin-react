import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard"
import Thread from "../pages/Thread";
import User from "../pages/User";

const SetupRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/thread" element={<Thread />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouters;
