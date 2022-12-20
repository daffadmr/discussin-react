import React, { useEffect } from "react";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import axiosInstance from "../configs/axiosInstance";
import { useState } from "react";
import BarChart from "../components/BarChart";
import { UserData } from "../components/BarData";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.bulan),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#323C5C"],
      },
    ],
  });
  const [tops, setTops] = useState();
  const getTop = async () => {
    try {
      const result = await axiosInstance.get("posts/recents/top");
      setTops(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [dashboardData, setDashboardData] = useState({});

  const dashboardAPI = async () => {
    try {
      const response = await axiosInstance.get("dashboard");
      setDashboardData(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dashboardAPI();
    getTop();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard - Home</title>
        <meta name="description" content="Discuss.In admin dashboard" />
      </Helmet>
      <div className="container">
        <h1 className="pb-5">Dashboard</h1>
        <div className="w-[85vw] h-[90vh] rounded-lg flex">
          <div className="w-[80%]">
            <div className="flex flex-wrap justify-center gap-2 4xl:justify-start text-white mt-5">
              <div className="dashboard-card">
                <div className="flex flex-col gap-3 justify-center">
                  <h3 className="text-3xl">Users</h3>
                  <h3 className="text-3xl font-extrabold">
                    {dashboardData.user_total}
                  </h3>
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
                  <h3 className="text-3xl font-extrabold">
                    {dashboardData.post_total}
                  </h3>
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
                  <h3 className="text-3xl font-extrabold">
                    {dashboardData.topic_total}
                  </h3>
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
            <div className="w-[59vw]">
              <BarChart chartData={userData} />
            </div>
          </div>
          <div className="w-[29%] h-[100%] pl-[10px] border-gray border-l-2 border-y-0 border-r-0">
            <div className="w-[100%] h-[100%] ">
              <div className="flex justify-between  items-center pb-[10px]">
                <h1>Top Thread</h1>
                <TrendingUpOutlinedIcon sx={{ fontSize: 35 }} />
              </div>
              {tops?.map(
                (data, index) =>
                  index < 3 && (
                    <Link
                      to={`threads/${data.ID}`}
                      className="w-[100%] h-[100px] mb-[10px] bg-white shadow-lg border border-[#ccc] rounded-xl flex overflow-hidden p-[12px]"
                    >
                      {data.photo ? (
                        <>
                          <div className=" w-[60%] h-[100%] py-[13px] flex flex-col justify-between">
                            <h3 className="w-[100%] truncate font-bold">
                              {data?.title}
                            </h3>
                            <h5 className="w-[100%] truncate text-[#969696]">
                              {data?.body}
                            </h5>
                          </div>
                          <div className="flex justify-center overflow-hidden items-center w-[40%] h-[100%] rounded-xl">
                            <div className="w-[200px]">
                              <img
                                className="w-[100%]"
                                src={data?.photo}
                                alt="error"
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" w-[100%] h-[100%] py-[13px] flex flex-col justify-between">
                            <h3 className="w-[100%] truncate font-bold">
                              {data?.title}
                            </h3>
                            <h5 className="w-[100%] truncate text-[#969696]">
                              {data?.body}
                            </h5>
                          </div>
                        </>
                      )}
                      {/* <div className=" w-[60%] h-[100%] py-[13px] flex flex-col justify-between">
                    <h3 className="w-[100%] truncate font-bold">
                      {data?.title}
                    </h3>
                    <h5 className="w-[100%] truncate text-[#969696]">
                      {data?.body}
                    </h5>
                  </div>
                  <div className="flex justify-center overflow-hidden items-center w-[40%] h-[100%]">
                    {data.photo && (
                      <div className="w-[200px]">
                        <img
                          className="w-[100%]"
                          src={data?.photo}
                          alt="error"
                        />
                      </div> */}
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
