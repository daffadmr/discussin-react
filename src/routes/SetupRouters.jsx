import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Thread from "../pages/Thread";
import User from "../pages/User";
import Layout from "../components/Layout";
import Topic from "../pages/Topic";

const SetupRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/threads" element={<Thread />}></Route>
          {/* <Route path="/threads/:id" element={<Test />} /> */}
          <Route path="/topics" element={<Topic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouters;
