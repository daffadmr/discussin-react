import { getTouchRippleUtilityClass } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ThreadAPI from "../apis/threads.api";

const Test = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    ThreadAPI.getOneThread(params.id, (result) => setPost(result));
  }, []);
  return (
    <div className="container">
      <h1 className="pb-5">Manage Thread</h1>
      <div className="users">
        <div className="w-[80vw] h-[85vh] border rounded-lg relative overflow-hidden shadow-lg">
          {/* Header */}
          <div className="w-[100%] p-2 bg-secondary text-center">
            You are now in the admin-only view
          </div>
          {/* End Header */}
          {/* Body */}
          {post ? (
            <div className="px-[50px] py-[30px]">
              <div>
                <div>
                  <img
                    src={post.User ? post.User.photo : null}
                    className="w-[70px] h-[70px] rounded-[50%]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ) : null}
          {/* End Body */}
        </div>
      </div>
    </div>
  );
};

export default Test;
