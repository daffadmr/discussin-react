import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const TableUsers = ({ data }) => {
  const rows = [...data];
  console.log(rows);
  const columns = [
    { field: "id", headerName: "User ID", width: 200 },
    { field: "username", headerName: "Username", width: 200, renderCell: (params) => {
      } },
    { field: "email", headerName: "Email", width: 200 },
    { field: "age", headerName: "Age", width: 200 },
    { field: "action", headerName: "Action", width: 200},
  ];
  return (
    <>
      <div className="w-[80vw] h-[80vh] border rounded-lg">
        <DataGrid
          getRowId={(data) => data.ID}
          rows={rows}
          columns={columns}
        />
      </div>
   
    </>
  );
};

export default TableUsers;
