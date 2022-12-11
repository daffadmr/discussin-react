import React, { useEffect } from "react";
import ThreadAPI from "../apis/threads.api";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteOutlineForeverIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";
import { CircularProgress, Modal } from "@mui/material";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import DoDisturbOffOutlinedIcon from "@mui/icons-material/DoDisturbOffOutlined";
import DoDisturbOnOutlinedIcon from "@mui/icons-material/DoDisturbOnOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  getPosts,
  postSelector,
  suspendPost,
} from "../store/features/postSlice";
// import Swal from "sweetalert2";

const TablePosts = () => {
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();
  const posts = useSelector(postSelector.selectAll);
  const loading = useSelector((state) => state.posts.loading);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  // activity
  const [modal, setModal] = useState({ visible: false, id: 0 });
  const modalHandler = (id) => {
    setModal({ visible: true, id: id });
  };
  console.log(posts);
  const clickHandler = (id) => {
    dispatch(suspendPost(id));
    setModal({ visible: false, id: 0 });
    // const result = datas.map((post) => {
    //   if (post.ID === id) {
    //     console.log(post);
    //     post.isActive = !post.isActive;
    //   }
    //   return post;
    // });
    // setDatas(result);
    // setModal({ visible: false });
  };
  //end activity
  // delete thread
  const [modalDel, setModalDel] = useState({ visible: false, id: 0 });
  const deleteModalHandler = (id) => {
    setModalDel({ visible: true, id: id });
  };
  const clickDeleteHandler = (id) => {
    // const result = [...datas].filter((post) => post.ID !== id);
    // setDatas(result);
    dispatch(deletePost(id));
    setModalDel({ visible: false, id: 0 });
  };
  // end delete thread
  useEffect(() => {
    ThreadAPI.getAllThread((result) => setDatas(result));
  }, []);
  const columns = [
    {
      field: "ID",
      headerName: "No.",
      flex: 0.4,
      renderCell: (index) => index.api.getRowIndex(index.row.ID) + 1,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1.5,
      renderCell: (params) => {
        return (
          <Link
            to={`/dashboard/threads/${params.row.ID}`}
            style={{ fontWeight: "bold" }}
          >
            {params.row.title}
          </Link>
        );
      },
    },
    {
      field: "topic",
      headerName: "Topics",
      flex: 0.6,
      renderCell: (params) => {
        return <div className="font-bold">{params.row.topic.topic_name}</div>;
      },
    },
    {
      field: "createdAt",
      headerName: "Date Created",
      flex: 0.5,
      type: "date",
      renderCell: (params) => {
        let a = new Date(params.row.createdAt);
        let bulans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let tahun = a.getFullYear();
        let bulan = bulans[a.getMonth()];
        let tanggal = a.getDate();
        const pickDate = `${tanggal}/${bulan}/${tahun}`;

        return <span className="font-bold w-[100%]">{pickDate}</span>;
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
                onClick={() => modalHandler(params.row.ID)}
                className="bg-white border border-danger py-1 px-3 rounded flex justify-center items-center cursor-pointer"
              >
                <span className="text-danger font-bold mr-2">
                  Stop Activity
                </span>
                {/* <img
                  className="w-5 h-5 "
                  src={require("../assets/png/do_not_disturb_on.png")}
                  alt=""
                /> */}
                <DoDisturbOnOutlinedIcon sx={{ color: "red" }} />
              </div>
              <div
                className="bg-danger p-1 rounded place-content-center cursor-pointer ml-1"
                onClick={() => deleteModalHandler(params.row.ID)}
              >
                <DeleteOutlinedIcon sx={{ color: "#fff" }} />
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex justify-between w-[100%]">
              <div
                // onClick={() => clickHandler(params.row.id)}
                className="bg-red-300 p-1 rounded flex justify-center items-center place-content-center cursor-pointer"
              >
                <span className="text-[white] font-bold mr-2">Stoped</span>
                {/* <img
                  className="w-5 h-5 "
                  src={require("../assets/png/do_not_disturb_off.png")}
                  alt=""
                /> */}
                <DoDisturbOffOutlinedIcon sx={{ color: "#fff" }} />
              </div>
              <div
                className="bg-danger p-1 rounded place-content-center cursor-pointer ml-1"
                onClick={() => deleteModalHandler(params.row.ID)}
              >
                <DeleteOutlinedIcon sx={{ color: "#fff" }} />
              </div>
            </div>
          );
        }
      },
    },
  ];
  return (
    <>
      {loading ? (
        <div className="flex justify-center item-center h-[80vh] w-[80vw]">
          <div className="flex items-center justify-center">
            <CircularProgress color="inherit" />
          </div>
        </div>
      ) : (
        <>
          <DataGrid
            checkboxSelection
            disableSelectionOnClick
            rows={posts}
            columns={columns}
            getRowId={(data) => data.ID}
          />
          <Modal open={modal.visible}>
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
          </Modal>
          <Modal open={modalDel.visible}>
            <div className="w-[400px] bg-white absolute top-[30%] left-[40%] outline-none flex items-center flex-col p-[38px] rounded-[20px]">
              <DeleteOutlineForeverIcon
                sx={{ color: "red", fontSize: "50px" }}
              />
              <h1 className="font-bold mt-[10px]">Delete Thread</h1>
              <p className="w-[300px] text-center mt-[10px] font-[16px]">
                Are you sure want to delete this thread?
              </p>
              <div className="flex-row flex w-[230px] justify-between mt-[10px]">
                <div
                  className="text-danger w-[103px] h-[30px] flex justify-center items-center outline-danger outline-1 outline font-bold rounded-[4px] cursor-pointer"
                  onClick={() => setModalDel({ visible: false, id: 0 })}
                >
                  No
                </div>
                <div
                  className="text-white bg-danger w-[103px] h-[30px] flex justify-center items-center font-bold rounded-[4px] cursor-pointer"
                  onClick={() => clickDeleteHandler(modalDel.id)}
                >
                  Yes
                </div>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default TablePosts;
