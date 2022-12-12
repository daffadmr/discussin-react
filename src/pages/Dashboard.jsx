import React from "react";
import { Link } from "react-router-dom";
import { TabTitle } from "../components/title";

const Dashboard = () => {
  TabTitle("Dashboard");
  return (
    <div>
      Dashboard
      <p>
        <Link to={"/user"}>Ke page user</Link>
      </p>
      <p>
        <Link to={"/thread"}>Ke page thread</Link>
      </p>
    </div>
  );
};

export default Dashboard;
