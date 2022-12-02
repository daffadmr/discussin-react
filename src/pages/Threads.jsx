import React, { useEffect, useState } from "react";
import ThreadAPI from "../apis/threads.api";
import { DataGrid } from "@mui/x-data-grid";
import { Modal } from "@mui/material";
import { Link, useLinkClickHandler } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const Thread = () => {
  // console.log(new Date(1668790800000));
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState({ visible: false, id: null });
  useEffect(() => {
    ThreadAPI.getAllThread((result) => setPosts(result));
    console.log(posts);
  }, []);

  const modalHandler = (id) => {
    setModal({ visible: true, id: id });
  };
  const clickHandler = (id) => {
    let suspendPost = posts.map((post) => {
      if (post.id === id) {
        post.isActive = !post.isActive;
      }
      return post;
    });
    setPosts(suspendPost);
    setModal({ visible: false });
  };
  const columns = [
    { field: "id", headerName: "Post ID", flex: 0.4 },
    {
      field: "title",
      headerName: "Title",
      flex: 2,
      renderCell: (params) => {
        return (
          <Link to={`/threads/${params.row.id}`} style={{ fontWeight: "bold" }}>
            {params.row.title}
          </Link>
        );
      },
      // maxWidth: 200,
      // minWidth: 250,
    },
    {
      field: "Topic",
      headerName: "Topics",
      flex: 1,
      renderCell: (params) => {
        return <div>{params.row.Topic.name}</div>;
      },
    },
    {
      field: "createdAt",
      headerName: "Date Created",
      flex: 1,
      type: "date",
      renderCell: (params) => {
        let a = new Date(params.row.createdAt);
        let bulans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let tahun = a.getFullYear();
        let bulan = bulans[a.getMonth()];
        let tanggal = a.getDate();
        const pickDate = `${tanggal}/${bulan}/${tahun}`;

        return <span>{pickDate}</span>;
      },
    },
    {
      field: "isActive",
      headerName: "Action",
      type: "boolean",
      editable: true,
      flex: 0.8,
      renderCell: (params) => {
        if (params.row.isActive === true) {
          return (
            <div className="flex justify-between w-[100%]">
              <div
                onClick={() => modalHandler(params.row.id)}
                className="bg-danger p-1 rounded flex justify-center items-center cursor-pointer"
              >
                <span className="text-[white] font-bold mr-2">
                  Stop Activity
                </span>
                <img
                  className="w-5 h-5 "
                  src={require("../assets/png/do_not_disturb_on.png")}
                  alt=""
                />
              </div>
              <div className="bg-danger p-1 rounded place-content-center cursor-pointer ml-1">
                <DeleteOutlinedIcon />
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex justify-between w-[100%]">
              <div
                onClick={() => clickHandler(params.row.id)}
                className="bg-red-300 p-1 rounded flex justify-center items-center place-content-center cursor-pointer"
              >
                <span className="text-[white] font-bold mr-2">Stoped</span>
                <img
                  className="w-5 h-5 "
                  src={require("../assets/png/do_not_disturb_off.png")}
                  alt=""
                />
              </div>
              <div className="bg-danger p-1 rounded place-content-center cursor-pointer ml-1">
                <DeleteOutlinedIcon />
              </div>
            </div>
          );
        }
      },
    },
  ];
  return (
    <div className="container">
      <h1 className="pb-5">Manage Thread</h1>
      <div className="users">
        <div className="w-[80vw] h-[80vh] border rounded-lg relative">
          <DataGrid
            checkboxSelection
            disableSelectionOnClick
            rows={posts}
            columns={columns}
          />
          <Modal open={modal.visible}>
            <div className="w-[400px] bg-white absolute top-[30%] left-[40%] outline-none flex items-center flex-col p-[38px] rounded-[20px]">
              <img
                src={require("../assets/png/warning.png")}
                alt=""
                className="w-[50px]"
              />
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
          </Modal>
        </div>
        {/* <TablePosts datas={posts} /> */}
      </div>
    </div>
  );
};

export default Thread;
