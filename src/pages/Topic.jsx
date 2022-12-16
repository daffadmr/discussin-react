import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableTopic from "../components/Dashboard/TableTopic";
import { TabTitle } from "../components/title";
import { fetchTopic, topicSelector } from "../store/features/topicSlice";

const User = () => {
  TabTitle("Manage Topic");
  // const topic = useSelector((state) => state.topic.data);
  const topic = useSelector(topicSelector.selectAll);
  const fetchStatus = useSelector((state) => state.topic.status);
  const dispatch = useDispatch();

  console.log(topic);

  useEffect(() => {
    dispatch(fetchTopic());
  }, [dispatch]);

  if (fetchStatus === "loading")
    return (
      <div className="flex justify-center item-center h-[80vh] w-[80vw]">
        <div className="flex items-center justify-center">
          <CircularProgress color="inherit" />
        </div>
      </div>
    );

  return (
    <div className="container">
      <h1 className="text-3xl pb-5">Manage Topic</h1>
      <div className="users">
        <TableTopic data={topic} />
      </div>
    </div>
  );
};

export default User;
