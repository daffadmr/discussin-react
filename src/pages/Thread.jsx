import React, { useEffect, useState } from "react";
import ThreadAPI from "../apis/threads.api";
// import TablePosts from "../components/TablePosts";
import { DataGrid } from "@mui/x-data-grid";
import { randomCreatedDate } from "@mui/x-data-grid-generator";
import { Modal } from "@mui/material";
import { Link } from "react-router-dom";

const Thread = () => {
  // console.log(new Date(1668790800000));
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    ThreadAPI.getAllThread((result) => setPosts(result));
  }, []);

  const clickHandler = (id) => {
    let suspendPost = posts.map((post) => {
      if (post.id === id) {
        post.isActive = !post.isActive;
      }
      return post;
    });
    setPosts(suspendPost);
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
      flex: 1,
      renderCell: (params) => {
        if (params.row.isActive === true) {
          return (
            <div className="flex w-[160px] justify-between">
              <span className="bg-secondary py-1 px-3 rounded font-bold">
                Suspend
              </span>
              <div
                onClick={() => clickHandler(params.row.id)}
                className="bg-secondary p-1 rounded place-content-center cursor-pointer"
              >
                <img
                  className="w-5 h-5 "
                  src={require("../assets/png/do_not_disturb_on.png")}
                  alt=""
                />
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex w-[160px] justify-between">
              <div className="bg-secondary py-1 px-3 rounded font-bold">
                Suspended
              </div>
              <div
                onClick={() => clickHandler(params.row.id)}
                className="bg-secondary p-1 place-content-center rounded cursor-pointer"
              >
                <img
                  className="w-5"
                  src={require("../assets/png/do_not_disturb_off.png")}
                  alt=""
                />
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
          {/* <Modal open={true}>
            <div className="w-[400px] bg-primary absolute top-[50%] left-[40%] outline-none ">
              Hai
            </div>
          </Modal> */}
        </div>
        {/* <TablePosts datas={posts} /> */}
      </div>
    </div>
  );
};

export default Thread;
