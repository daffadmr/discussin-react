import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../apis/detailUser";
import { TabTitle } from "../components/title";
import { getThread, threadSelector } from "../store/features/threadSlice";

function DetailUser() {
  const params = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    getDetail(params.id, (result) => setDetails(result));
  }, []);
  TabTitle("Detail User");
  return (
    <div className="container">
      <h1 className="pb-5">Detail User</h1>
      <div className="users">
        <div className="h-[80vh] w-[80vw] rounded-[20px] overflow-hidden bg-white shadow-xl">
          {/* header */}
          <div className="h-[38%] w-[100%]">
            <div className="h-[80px] w-[100%] bg-navy" />
            <div className="h-[calc(100%-80px)] w-[100%] bg-white relative">
              {/* profile */}
              {details !== undefined ? (
                <div className="w-[100%] h-[100%] flex justify-center">
                  <div className="h-[160px] w-[160px] absolute top-[-50px] flex items-center flex-col">
                    <img
                      className="h-[110px] w-[110px] rounded-full border border-white"
                      src={
                        details.user.photo !== ""
                          ? details.user.photo
                          : require("../assets/png/default.png")
                      }
                      alt=""
                    />
                    <div className="pt-1 w-[100%] flex flex-col items-center">
                      <h4 className="font-bold">{details.user.username}</h4>
                      <h5 className="text-sm">{details.user.email}</h5>
                    </div>
                  </div>
                  <div className="w-[100%] h-[50px] absolute bottom-0 flex">
                    <div className="w-[50%] h-[100%] p-3 border-b-[3px] bg-white border-navy flex justify-center items-center">
                      <h2 className="font-bold text-navy ">Threads</h2>
                    </div>
                    {/* <div className="w-[50%] h-[100%] p-3 bg-white flex justify-center items-center">
                      <h2 className="font-bold text-[#ccc] ">Comments</h2>
                    </div> */}
                  </div>
                </div>
              ) : null}
              {/* end profile */}
            </div>
          </div>
          {/* end header */}
          {/* content */}
          {/* card */}
          {details !== undefined && details.data !== null ? (
            <div className="h-[62%] overflow-auto w-[100%] bg-[#ccc] p-[20px]">
              {details.data.map((post) => {
                return (
                  <Link
                    to={`/dashboard/threads/${post.ID}`}
                    key={post.ID}
                    className="h-[190px] w-[100%] flex  bg-white px-[30px] py-[15px] rounded-xl relative"
                  >
                    {/* text and title and like */}
                    <div className="w-[75%] h-[100%]">
                      {/* title and text */}
                      <div className="pl-[10px] border-l-[3px] border-[#ccc]">
                        <h3 className="font-bold">{post.title}</h3>
                        {console.log(post)}
                        <p className="mt-[10px] h-[100px] overflow-hidden">
                          {post.body}
                        </p>
                      </div>
                      {/* end */}
                      {/* like */}
                      <div className=" absolute bottom-[15px] left-[40px]  flex text-l items-center text-[#556282]">
                        <p>
                          {post.count.like} <b>Likes</b>
                        </p>
                        <p className="ml-3">
                          {post.count.dislike} <b>Dislikes</b>
                        </p>
                        <p className=" ml-3">
                          {post.count.comment} <b>Comment</b>
                        </p>
                      </div>
                      {/* end */}
                    </div>
                    {/* end */}
                    <div className="w-[25%] overflow-hidden flex justify-center items-center">
                      <div className="w-[140px]">
                        <img src={post.photo} className="w-[100%]" alt="" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="h-[62%]  w-[100%] bg-[#ccc] p-[10px] ">
              <div className="bg-white w-[100%] h-[100%] rounded-[20px] flex justify-center items-center flex-col">
                <img src={require("../assets/png/defaultPost.png")} alt="" />
                <p className="text-[20px]">
                  {details?.user.username}
                  <span className="font-bold">
                    {" "}
                    has never make a post before
                  </span>
                </p>
                <Link
                  to={"/dashboard/users"}
                  className="pt-[10px] text-[blue] font-bold text-[18px]"
                >
                  Back
                </Link>
              </div>
            </div>
          )}

          {/* end Card */}
          {/* endContent */}
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
