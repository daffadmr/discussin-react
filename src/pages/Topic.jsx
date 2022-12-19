import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import TableTopic from "../components/Dashboard/TableTopic";
import { TabTitle } from "../components/title";
import { fetchTopic } from "../store/features/topicSlice";

const User = () => {
  TabTitle("Manage Topic");
  // const topic = useSelector((state) => state.topic.data);
  const topic = useSelector((state) => state.topic.data);
  // const topic = useSelector(topicSelector.selectAll);
  const fetchStatus = useSelector((state) => state.topic.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopic());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Manage Topic</title>
        <meta name="description" content="Manage topic" />
      </Helmet>

      <div className="container">
        <h1 className="text-3xl pb-5">Manage Topic</h1>
        <div className="users">
          <TableTopic data={topic} status={fetchStatus} />
        </div>
      </div>
    </>
  );
};

export default User;
