import React, { useEffect, useState } from "react";
import ThreadAPI from "../apis/threads.api";
import TablePosts from "../components/TablePosts";

const Thread = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    ThreadAPI.getAllThread((result) => setPosts(result));
    console.log(posts);
  }, []);
  return (
    <div className="container">
      <h1 className="pb-5">Manage Thread</h1>
      <div className="users">
        <TablePosts datas={posts} />
      </div>
    </div>
  );
};

export default Thread;
