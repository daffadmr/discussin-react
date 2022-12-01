import React, { useEffect, useState } from "react";
import TopicAPI from "../apis/topic.api";
import TableTopic from "../components/TableTopic";

const User = () => {
  const [topic, setTopic] = useState([]);
  console.log(topic)
  const getTopic = async () => {
    try {
      const response = await TopicAPI.getAllTopic();
      setTopic(response.data.data_topic);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopic();
  }, []);

  return (
    <div className="container">
      <h1 className="pb-5">Manage Topic</h1>
      <div className="users">
        <TableTopic data={topic}/>
      </div>
    </div>
  );
};

export default User;
