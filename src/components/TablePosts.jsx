import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { width } from "@mui/system";

const TablePosts = ({ datas }) => {
  // const [rows, setRows] = useState([]);
  const rows = [...datas];
  // const rows = [...datas];
  const columns = [
    { field: "id", headerName: "Post ID", width: 100 },
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "description",
      headerName: "Topics",
    },
    {
      field: "date",
      headerName: "Date Created",
      width: 200,
    },
    {
      field: "isActive",
      headerName: "Action",
      type: "boolean",
      editable: true,
      width: 160,
      renderCell: (params) => {
        if (params.row.isActive === true) {
          return (
            <div className="flex justify-between">
              <span className="bg-secondary py-1 px-3 rounded font-bold">
                Suspend
              </span>
              <div className="bg-secondary p-1 rounded ml-2 place-content-center">
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
            <div className="flex justify-between">
              <div className="bg-secondary py-1 px-3 rounded font-bold">
                Suspended
              </div>
              <div className="bg-secondary p-1 place-content-center rounded ml-2">
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
