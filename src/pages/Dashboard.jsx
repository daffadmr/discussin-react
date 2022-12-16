import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import axiosInstance from "../configs/axiosInstance";
import { useState } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({})
  console.log(dashboardData)
  const dashboardAPI = async () => {
    try {
      const response = await axiosInstance.get("dashboard");
      console.log(response.data);
      setDashboardData(response.data)
      return response.data;
    } catch(error) {
      console.log(error)
    }
  };

  useEffect(() => {
    dashboardAPI();
  }, []);

  return (
    <div className="px-12">
      <h1>Dashboard</h1>
      <div className="flex text-white mt-5 gap-5">
        <div className="dashboard-card">
          <div className="flex flex-col gap-3 justify-center">
            <h3 className="text-3xl">Users</h3>
            <h3 className="text-3xl font-extrabold">{dashboardData.user_total}</h3>
          </div>
          <div className="flex items-center">
            <PeopleAltOutlinedIcon
              color="white"
              sx={{
                fontSize: 60,
              }}
            />
          </div>
        </div>
        <div className="dashboard-card">
          <div className="flex flex-col gap-3 justify-center">
            <h3 className="text-3xl">Post</h3>
            <h3 className="text-3xl font-extrabold">{dashboardData.post_total}</h3>
          </div>
          <div className="flex items-center">
            <TopicOutlinedIcon
              color="white"
              sx={{
                fontSize: 60,
              }}
            />
          </div>
        </div>
        <div className="dashboard-card">
          <div className="flex flex-col gap-3 justify-center">
            <h3 className="text-3xl">Topics</h3>
            <h3 className="text-3xl font-extrabold">{dashboardData.topic_total}</h3>
          </div>
          <div className="flex items-center">
            <TopicOutlinedIcon
              color="white"
              sx={{
                fontSize: 60,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
