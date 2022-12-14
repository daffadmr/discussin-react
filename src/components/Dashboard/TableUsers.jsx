import React from "react";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import {
  deleteUser,
  fetchDataUser,
  userSelector,
} from "../../store/features/userSlice";
import { useEffect } from "react";

const TableUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(userSelector.selectAll);
  const loading = useSelector((state) => state.user.loading);
  useEffect(() => {
    dispatch(fetchDataUser());
  }, [dispatch]);
  const filteredUser = users.filter((user) => {
    return !user.isAdmin;
  });

  const columns = [
    {
      field: "id",
      headerName: "No.",
      width: 200,
      renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
      headerClassName: "",
      headerAlign: "center",
      align: "center",
    },
    { field: "username", headerName: "Username", width: 300 },
    { field: "email", headerName: "Email", width: 400 },
    {
      field: "isAdmin",
      headerName: "Role",
      width: 300,
      renderCell: (params) => (params.row.isAdmin ? "Admin" : "User"),
    },
    {
      headerName: "Action",
      field: "headers",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="w-full flex gap-4">
            {params.row.banUntil === 0 ? (
              <button
                className="bg-white border border-red-600 px-3  rounded-lg text-red-600"
                onClick={() => {}}
              >
                Ban
              </button>
            ) : (
              <button
                className="bg-gray p-2 rounded-lg text-white"
                disabled
                onClick={() => {}}
              >
                Banned
              </button>
            )}
            <button
              className="bg-danger p-2 rounded-lg text-white"
              onClick={() => dispatch(deleteUser(params.row.id))}
            >
              <DeleteOutlinedIcon />
            </button>
            {/* <button
              className="bg-blue-600 p-2 rounded-lg text-white"
              onClick={() => {}}
            >
              <EditOutlinedIcon />
            </button> */}
          </div>
        );
      },
    },
  ];
  const QuickSearchToolbar = () => {
    return (
      <Box
        className="absolute top-[-46px] right-0"
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter sx={{}} />
      </Box>
    );
  };
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
          <div className="w-[80vw] h-[90vh]">
            <DataGrid
              checkboxSelection={false}
              rows={filteredUser}
              columns={columns}
              disableSelectionOnClick
              components={{ Toolbar: QuickSearchToolbar }}
              className="shadow-xl"
              sx={{
                "& .MuiDataGrid-columnHeader .MuiDataGrid-columnSeparator": {
                  display: "none",
                },
                "& .MuiDataGrid-columnHeader:focus": {
                  outline: "none",
                },
                "& .MuiDataGrid-cell:focus": {
                  outline: "none",
                },
                // "& .MuiFormControl-root:active .MuiSvgIcon-root": {
                //   display: "none",
                // },
                borderRadius: 5,
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default TableUsers;
