import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ThreadAPI from "../apis/threads.api";

const TablePosts = ({ datas }) => {
  // console.log(...datas);
  // const [rows, setRows] = useState([]);
  // datas ? setRows([...datas]) : null;
  const rows = [...datas];
  console.log(datas);
  const clickHandler = (id) => {
    ThreadAPI.upadateThread(id);
  };
  const columns = [
    { field: "id", headerName: "Post ID", flex: 0.4 },
    {
      field: "title",
      headerName: "Title",
      flex: 2,
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
              <div className="bg-secondary p-1 place-content-center rounded ">
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
    <>
      <div className="w-[80vw] h-[80vh] border rounded-lg">
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </div>
    </>
    //   <table className="table-auto w-[80vw]">
    //   <thead className='border'>
    //     <tr>
    //       <th className='py-5 text-left'>
    //         <input type="checkbox" name="" id="" />
    //       </th>
    //       <th className='py-5 text-left'>Song</th>
    //       <th className='py-5 text-left'>Artist</th>
    //       <th className='py-5 text-left'>Year</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr className='border'>
    //       <td className='py-5'>
    //         <input type="checkbox" name="" id="" />
    //       </td>
    //       <td className='py-5'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
    //       <td className='py-5'>Malcolm Lockyer</td>
    //       <td className='py-5'>1961</td>
    //     </tr>
    //   </tbody>
    // </table>
  );
};

export default TablePosts;
