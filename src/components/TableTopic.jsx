import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const TableTopic = ({ data }) => {
  const rows = [...data];
  console.log(rows);
  const columns = [
    { field: "ID", headerName: "ID", width: 50 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Description", width: 500 },
  ];
  return (
    <>
      <div className="w-[80vw] h-[80vh] border rounded-lg">
        <DataGrid
          getRowId={(data) => data.ID}
          checkboxSelection
          rows={rows}
          columns={columns}
        />
      </div>
    </>
  );
};

export default TableTopic;
