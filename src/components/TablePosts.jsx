import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLinkClickHandler } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteOutlineForeverIcon from "@mui/icons-material/DeleteForeverOutlined";

const TablePosts = ({ datas }) => {
  // row data
  let posts = [...datas];
  const columns = [
    { field: "ID", headerName: "Post ID", flex: 0.4 },
    {
      field: "title",
      headerName: "Title",
      flex: 2,
      renderCell: (params) => {
        return (
          <Link to={`/threads/${params.row.ID}`} style={{ fontWeight: "bold" }}>
            {params.row.title}
          </Link>
        );
      },
    },
    {
      field: "topic",
      headerName: "Topics",
      flex: 1,
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
                // onClick={() => modalHandler(params.row.ID)}
                className="bg-danger py-1 px-3 rounded flex justify-center items-center cursor-pointer"
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
              <div
                className="bg-danger p-1 rounded place-content-center cursor-pointer ml-1"
                // onClick={() => deleteModalHandler(params.row.ID)}
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
    <>
      <DataGrid
        checkboxSelection
        disableSelectionOnClick
        rows={posts}
        columns={columns}
        getRowId={(data) => data.ID}
      />
    </>
  );
};

export default TablePosts;
