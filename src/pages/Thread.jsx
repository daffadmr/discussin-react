/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import { Link } from "@mui/material";

// image
import Author from "../assets/png/author.png";

// Icon
import RightArrow from "../assets/svg/RightArrow";
import Eclipse from "../assets/svg/Eclipse";
import { TabTitle } from "../components/title";
import { getPosts, postSelector } from "../store/features/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { commentSelector, getComments } from "../store/features/commentSlice";

const DetailThreads = () => {
  TabTitle("Detail Thread");
  let params = useParams();

  const comments = useSelector(commentSelector.selectAll);
  const dispatch = useDispatch();
  const thread = useSelector((state) =>
    postSelector.selectById(state, params.id)
  );
  const loading = useSelector((state) => state.posts.loading);
  //detail thread and comment with id
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getComments(params.id));
  }, []);

  // const photos = (props) => {
  //   if (props.photo === "") {
  //     return null;
  //   } else {
  //     return <img className="w-full h-[400px]" src={props.photo} alt="photo" />;
  //   }
  // };
  return (
    <div className="container pb-14">
      {loading ? (
        <div className="flex justify-center item-center h-[80vh] w-[80vw]">
          <div className="flex items-center justify-center">
            <CircularProgress color="inherit" />
          </div>
        </div>
      ) : (
        <>
          <h1 className="pb-5">Manage Thread</h1>
          <div className="w-[80vw] h-[80vh] overflow-hidden shadow-xl shadow-gray-400 px-[20px] border border-slate-200 py-6 space-y-5 rounded-xl relative">
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
                    <img className="w-14 h-14" src={Author} alt="author" />
                    <div className="author-name flex flex-col justify-between h-13">
                      <h2 className="font-bold text-[17px]">
                        {thread ? thread.user.username : null}
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
                  {thread.photo === "" ? null : (
                    <div className="flex justify-center">
                      <div className="w-[800px]">
                        <img
                          className="w-[100%]"
                          src={thread.photo}
                          alt="photo"
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
                  return (
                    <div key={data.ID} className="p-4">
                      <div className="flex items-center">
                        <img src={Author} className="w-[50px]" alt="" />
                        <div className="pl-2">
                          <div className="flex items-center">
                            {data.user.username}
                            <p className="text-[10px] pl-1">12-12</p>
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
        </>
      )}
    </div>
  );
};

export default DetailThreads;
