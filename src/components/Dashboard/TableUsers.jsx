import React, { useState } from "react";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Modal, TextField } from "@mui/material";
import {
  banUser,
  deleteUser,
  fetchDataUser,
} from "../../store/features/userSlice";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import axiosInstance from "../../configs/axiosInstance";

dayjs.extend(utc);
dayjs.extend(relativeTime);

const TableUsers = () => {
  const dispatch = useDispatch();
  // const users = useSelector(userSelector.selectAll);
  const users = useSelector((state) => state.user.data);
  const page = useSelector((state) => state.user.currentPage);
  const totalPage = useSelector((state) => state.user.totalPage);
  const loading = useSelector((state) => state.user.loading);
  console.log(totalPage);
  const [total, setTotal] = useState(totalPage);
  const [currentPage, setCurrentPage] = useState(page);

  const [modalBan, setModalBan] = useState({ open: false, id: null });
  const handleOpenModalBan = (id) => setModalBan({ open: true, id: id });
  const handleCloseModalBan = () => setModalBan({ open: false });

  const [banUntil, setBanUntil] = useState("");

  const handleChange = (e) => {
    setBanUntil(e.target.value);
  };

  const handleBan = async (id, data) => {
    await dispatch(banUser(id, data));
  };

  console.log(page);
  const [dashboardData, setDashboardData] = useState({})
  console.log(dashboardData)
  const dashboardAPI = async () => {
    try {
      const response = await axiosInstance.get("dashboard");
      console.log(response.data);
      setDashboardData(response.data)
      return response.data;
    } catch(error) {
      console.log(error)
    }
  };

  useEffect(() => {
    dashboardAPI();
    dispatch(fetchDataUser(1));
  }, []);

  useEffect(() => {
    currentPage && dispatch(fetchDataUser(currentPage));
  }, [currentPage]);

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
      headerName: "Action",
      field: "headers",
      width: 400,
      renderCell: (params) => {
        const day1 = dayjs(params.row.banUntil).utc();
        const day2 = dayjs.utc();
        return (
          <div className="w-full flex items-center gap-4">
            {day1.diff(day2, "x") < 0 ? (
              <button
                className="bg-danger border border-red-600 px-3 py-2  rounded-lg text-white"
                onClick={() => {
                  handleOpenModalBan(params.row.id);
                }}
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
            {day1.diff(day2, "x") >= 0 && (
              <p>{dayjs(params.row.banUntil).fromNow(true)} until unban</p>
            )}
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
              rows={users}
              columns={columns}
              hideFooterSelectedRowCount
              pageSize={users.length}
              onPageChange={(newPage) => {
                setCurrentPage(newPage+1);
              }}
              rowCount={dashboardData.user_total}
              paginationMode="server"
              // rowCount={ukuran}
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
      <Modal
        open={modalBan.open}
        onClose={handleCloseModalBan}
        className="flex items-center justify-center"
      >
        <Box className="bg-white w-[30vw] flex flex-col gap-3 pt-5 rounded-lg text-center items-center">
          <DeleteForeverOutlinedIcon
            className="text-danger"
            sx={{
              fontSize: 50,
            }}
          />
          <h1 className="px-5 font-extrabold">Ban User</h1>
          <p>How long do you want to ban this user (in days)?</p>
          <div className="input-group flex items-center gap-4">
            <TextField
              size="small"
              className="w-[132px]"
              type="number"
              name="banUntil"
              value={banUntil}
              onChange={handleChange}
            />{" "}
            <p>Days</p>
          </div>
          <div className="flex justify-center items-center px-5 gap-5 -mt-3">
            <button
              className="border border-danger text-danger py-1 px-8 my-5 rounded-lg font-bold"
              onClick={handleCloseModalBan}
            >
              No
            </button>
            {banUntil <= 0 ? (
              <button
                onClick={() => {}}
                disabled
                className="bg-danger opacity-50 text-white py-1 px-8 my-5 rounded-lg font-bold"
              >
                Yes
              </button>
            ) : (
              <button
                onClick={() => handleBan({id: modalBan.id, banUntil: parseInt(banUntil)})}
                className="bg-danger text-white py-1 px-8 my-5 rounded-lg font-bold"
              >
                Yes
              </button>
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default TableUsers;
