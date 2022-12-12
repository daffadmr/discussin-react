import React, { useEffect } from "react";
import { TabTitle } from "../components/title";
import TablePosts from "../components/TablePosts";

const Thread = () => {
  TabTitle("All Thread");
  return (
    <div className="container">
      <h1 className="pb-5">Manage Thread</h1>
      <div className="users">
        <div className="w-[80vw] h-[90vh] rounded-lg relative">
          {/* <div>
            {posts.map((post) => {
              return <h1>{post.title}</h1>;
            })}
          </div> */}
          <TablePosts />
          {/* <Modal open={modal.visible}>
            <div className="w-[400px] bg-white absolute top-[30%] left-[40%] outline-none flex items-center flex-col p-[38px] rounded-[20px]">
              <DoNotDisturbOnIcon sx={{ color: "red", fontSize: "50px" }} />
              <h1 className="font-bold mt-[10px]">Stop All Activity</h1>
              <p className="w-[300px] text-center mt-[10px] font-[16px]">
                Are you sure want to stop all activity this thread?
              </p>
              <div className="flex-row flex w-[230px] justify-between mt-[10px]">
                <div
                  className="text-danger w-[103px] h-[30px] flex justify-center items-center outline-danger outline-1 outline font-bold rounded-[4px] cursor-pointer"
                  onClick={() => setModal({ visible: false })}
                >
                  No
                </div>
                <div
                  className="text-white bg-danger w-[103px] h-[30px] flex justify-center items-center font-bold rounded-[4px] cursor-pointer"
                  onClick={() => clickHandler(modal.id)}
                >
                  Yes
                </div>
              </div>
            </div>
          </Modal> */}
          {/* <Modal open={del.visible}>
            <div className="w-[400px] bg-white absolute top-[30%] left-[40%] outline-none flex items-center flex-col p-[38px] rounded-[20px]">
              <DeleteOutlineForeverIcon
                sx={{ color: "red", fontSize: "50px" }}
              /> */}
          {/* <img
                src={require("../assets/png/warning.png")}
                alt=""
                className="w-[50px]"
              /> */}
          {/* <h1 className="font-bold mt-[10px]">Delete Thread</h1>
              <p className="w-[300px] text-center mt-[10px] font-[16px]">
                Are you sure want to delete this thread?
              </p>
              <div className="flex-row flex w-[230px] justify-between mt-[10px]">
                <div
                  className="text-danger w-[103px] h-[30px] flex justify-center items-center outline-danger outline-1 outline font-bold rounded-[4px] cursor-pointer"
                  onClick={() => setDel({ visible: false })}
                >
                  No
                </div>
                <div
                  className="text-white bg-danger w-[103px] h-[30px] flex justify-center items-center font-bold rounded-[4px] cursor-pointer"
                  onClick={() => deleteHandler(del.id)}
                >
                  Yes
                </div>
              </div>
            </div>
          </Modal> */}
        </div>
        {/* <TablePosts datas={posts} /> */}
      </div>
    </div>
  );
};

export default Thread;
