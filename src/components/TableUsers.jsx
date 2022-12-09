import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import UserAPI from "../apis/users.api";
import { useEffect } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";

const TableUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UserAPI.getAllUser((result) => {
      let userFilter = [...result].filter((user) => user.isAdmin !== true);
      setUsers(userFilter);
    });
    console.log([...users]);
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "No.",
      width: 150,
      flex: 0.3,
      renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
    },
    {
      field: "username",
      headerName: "Username",
      flex: 1,
      renderCell: (params) => {
        return (
          <Link
            to={`/dashboard/users/${params.row.id}`}
            className="font-bold cursor-pointer"
          >
            {params.row.username}
          </Link>
        );
      },
    },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "banUntil",
      headerName: "Action",
      flex: 0.5,
      renderCell: (params) => {
        if (params.row.banUntil === 0) {
          return (
            <div className="flex justify-between w-[100%]">
              <div className="bg-danger rounded flex justify-center items-center cursor-pointer w-max ">
                <span className="text-[white] text-center font-bold px-4">
                  Ban
                </span>
              </div>
              <div className="bg-danger p-1 rounded place-content-center cursor-pointer ml-1">
                <DeleteOutlinedIcon sx={{ color: "#fff" }} />
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex justify-between w-[100%]">
              <div className="bg-red-300 rounded flex justify-center items-center cursor-pointer w-max ">
                <span className="text-[white] text-center font-bold px-4">
                  Banned
                </span>
              </div>
              <div className="bg-danger p-1 rounded place-content-center cursor-pointer ml-1">
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
      <div className="w-[80vw] h-[85vh] bg-white shadow-lg rounded-lg">
        {/* {users.map((data, index) => {
          return <div key={index}>{console.log(data)}</div>;
        })} */}
        <DataGrid
          disableSelectionOnClick
          checkboxSelection
          rows={users}
          columns={columns}
          // getRowId={(user) => user.ID}
        />
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

export default TableUsers;
