import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import { fetchDataUser, userSelector } from "../store/features/userSlice";
import { fetchTopic, topicSelector } from "../store/features/topicSlice";
import { TabTitle } from "../components/title";

const Dashboard = () => {
  TabTitle("Dashboard | discuss.in");
  const users = useSelector(userSelector.selectAll);
  const topics = useSelector(topicSelector.selectTotal);

  const dispatch = useDispatch();

  const filteredUser = users.filter((user) => {
    return !user.isAdmin;
  });

  useEffect(() => {
    dispatch(fetchDataUser());
    dispatch(fetchTopic());
  }, []);

  return (
    <div className="px-12">
      <h1>Dashboard</h1>
      <div className="flex text-white mt-5 gap-5">
        <div className="dashboard-card">
          <div className="flex flex-col gap-3 justify-center">
            <h3 className="text-3xl">Users</h3>
            <h3 className="text-3xl font-extrabold">{filteredUser.length}</h3>
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
            <h3 className="text-3xl">Topics</h3>
            <h3 className="text-3xl font-extrabold">{topics}</h3>
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
