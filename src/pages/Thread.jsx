/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import { Link } from "@mui/material";

// image
import Author from "../assets/png/author.png";
import Threads from "../assets/png/threads.png";

// Icon
import RightArrow from "../assets/svg/RightArrow";
import Eclipse from "../assets/svg/Eclipse";
import { TabTitle } from "../components/title";
import ThreadAPI from "../apis/threads.api";

const DetailThreads = () => {
  TabTitle("Detail Thread");
  let userId = useParams();
  let id = userId.id;
  const [thread, setThread] = useState();
  const [comment, setComment] = useState([]);
  //detail thread and comment with id
  useEffect(() => {
    ThreadAPI.getOneThread(id, (result) => {
      setThread(result);
    });
    ThreadAPI.getComment(id, (result) => {
      setComment(result);
    });
  }, []);
  // if (thread !== null) {
  //   console.log(thread);
  // }

  // const getThread = async () => {
  //   try {
  //     const response = await axios({
  //       method: "get",
  //       url: `http://localhost:3001/posts/${userId.id}`,
  //     });
  //     // console.log(response.data);
  //     setThread(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="container pb-14">
      <h1 className="pb-5">Manage Thread</h1>
      <div className="w-[80vw] bg-[#B1B1B1] rounded-t-xl px-4 py-1.5 flex items-center justify-between">
        <Link to={"/threads"}>
          <button className="p-1.5 bg-[#CFCFCF] rounded-full">
            <RightArrow />
          </button>
        </Link>
        <p className="text-xs font-semibold tracking-wide">
          You are now in the admin-only view
        </p>
        <div></div>
      </div>
      <div className="w-[80vw] h-[80vh] overflow-scroll overflow-x-hidden border shadow-xl shadow-gray-400 px-14 py-6 space-y-5 rounded-b-xl">
        <div className="header-content flex justify-between">
          <div className="flex items-center space-x-2">
            <img className="w-14 h-14" src={Author} alt="author" />
            <div className="author-name">
              <h2 className="font-bold text-sm">
                {thread ? thread.user.username : null}
              </h2>
              <p className="text-xs">Student College</p>
            </div>
          </div>
          <button className="flex items-center space-x-2">
            <Eclipse />
          </button>
        </div>
        <div className="body-content space-y-3">
          <p className="text-xs">{thread ? thread.title : null}</p>
          <img
            className="w-full h-[400px]"
            src={thread ? thread.photo : Threads}
            alt="Threads"
          />
          <p className="text-xs">{thread?.body}</p>
        </div>
        <div className="footer-content flex space-x-5 text-xs text-[#556282]">
          <p>
            {thread ? thread.count.like : 0} <b>Likes</b>
          </p>
          <p>
            {thread ? thread.count.dislike : 0} <b>Dislikes</b>
          </p>
          <p className="cursor-pointer">
            {thread ? thread.count.comment : 0} <b>Comment</b>
          </p>
        </div>
        {comment?.map((data) => {
          return (
            <>
              <div className="flex items-center">
                <img src={Author} className="w-[35px]" alt="" />
                <div className="pl-2 flex items-center">
                  {data.user.username}
                  <p className="text-[10px] pl-1">12-12</p>
                </div>
              </div>
              <div className="">{data.body}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DetailThreads;
