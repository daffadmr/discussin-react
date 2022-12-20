/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

// image
import Author from "../assets/png/author.png";

// Icon
import RightArrow from "../assets/svg/RightArrow";
import Eclipse from "../assets/svg/Eclipse";
import ThreadAPI from "../apis/threads.api";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const DetailThreads = () => {
  const [thread, setThread] = useState();
  const [comments, setComments] = useState();

  let params = useParams();
  useEffect(() => {
    ThreadAPI.getOneThread(params.id, (result) => setThread(result));
    ThreadAPI.getComment(params.id, (result) => setComments(result));
  }, []);
  return (
    <>
      <Helmet>
        <title>Detail Post</title>
        <meta name="description" content="Discuss.In detail post" />
      </Helmet>
      <div className="container pb-14 overflow-y-auto">
        <div>
          <h1 className="pb-5">Manage Post</h1>
          <div className="w-[83.95vw] h-[86vh] overflow-hidden shadow-xl shadow-gray-400 px-[20px] border border-slate-200 py-6 space-y-5 rounded-xl relative">
            <div className="h-[100%] w-[100%]">
              <div className="w-[100%] h-[10%]  sticky top-1  rounded-t-xl flex items-center">
                <Link to={"/dashboard/threads"}>
                  <button className="p-2  bg-navy rounded-full">
                    <RightArrow />
                  </button>
                </Link>
                <div className="w-[100%] flex justify-center">
                  <p className="text-[14px] text-center text-white font-semibold tracking-wide bg-navy px-4 py-3 rounded-md">
                    You are now in the admin-only view
                  </p>
                </div>
              </div>
              {/* <div className="w-[80vw] h-[80vh] overflow-scroll overflow-x-hidden border shadow-xl shadow-gray-400 px-14 py-6 space-y-5 rounded-b-xl"> */}
              <div className="pt-[20px] w-[100%] h-[90%] overflow-y-auto">
                <div className="header-content flex justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-14 h-14 rounded-full"
                      src={
                        thread?.user.photo !== ""
                          ? thread?.user.photo
                          : require("../assets/png/default.png")
                      }
                      alt="author"
                    />
                    <div className="author-name flex flex-col justify-between h-13">
                      <h2 className="font-bold text-[17px]">
                        {thread?.user.username}
                      </h2>
                      <p className="text-xs">Student College</p>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2">
                    <Eclipse />
                  </button>
                </div>
                <div className="body-content space-y-3 py-4">
                  <p className="text-l font-bold">
                    {thread ? thread.title : null}
                  </p>
                  {/* {photos(thread)} */}
                  {thread?.photo === "" ? null : (
                    <div className="flex justify-center">
                      <div className="w-[800px]">
                        <img
                          className="w-[100%]"
                          src={thread?.photo}
                          alt="iamage"
                        />
                      </div>
                    </div>
                  )}
                  <p className="text-l   truncate whitespace-pre-line w-[100%]">
                    {thread?.body}
                  </p>
                </div>
                <div className=" flex text-l items-center text-[#556282] h-[10%">
                  <p>
                    {thread ? thread.count.like : 0} <b>Likes</b>
                  </p>
                  <p className="ml-3">
                    {thread ? thread.count.dislike : 0} <b>Dislikes</b>
                  </p>
                  <p className="cursor-pointer ml-3">
                    {thread ? thread.count.comment : 0} <b>Comment</b>
                  </p>
                </div>
                {comments?.map((data) => {
                  console.log(data);
                  return (
                    <div key={data.ID} className="p-4 bg-[#E5E5E5] my-2 max-w-fit rounded-lg">
                      <div className="flex items-center">
                        <img src={Author} className="w-[50px]" alt="" />
                        <div className="pl-2">
                          <div className="flex items-center">
                            <span>{data.user.username}</span>
                            <span className="text-[10px] pl-1">
                              {dayjs(data.CreatedAt).fromNow()}
                            </span>
                          </div>
                          <div className="">{data.body}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailThreads;
