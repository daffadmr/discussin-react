import React, { useState } from "react";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Box, Modal, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createTopic, deleteTopic } from "../../store/features/topicSlice";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const TableTopic = ({ data }) => {
  const rows = [...data];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modalDelete, setModalDelete] = useState({ open: false, id: null });
  const handleOpenModalDelete = (id) => setModalDelete({ open: true, id: id });
  const handleCloseModalDelete = () => setModalDelete({ open: false });

  const dispatch = useDispatch();

  const QuickSearchToolbar = () => {
    return (
      <Box
        className="absolute top-[-46px] right-[60px]"
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter />
      </Box>
    );
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("judul");
    const description = formData.get("deskripsi");
    dispatch(createTopic({ name, description }));

    alert("Berhasil menambahkan data");
    handleClose();
  };

  const handleDelete = (id) => {
    dispatch(deleteTopic(id));
    alert("Berhasil hapus data");
  };

  const columns = [
    {
      field: "ID",
      headerName: "No.",
      width: 100,
      sortable: false,
      renderCell: (index) => index.api.getRowIndex(index.row.ID) + 1,
    },
    { field: "name", headerName: "Name", width: 300 },
    {
      field: "description",
      headerName: "Description",
      width: 800,
    },
    {
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <button
              className="bg-danger p-2 rounded-lg text-white"
              onClick={() => handleOpenModalDelete(params.row.ID)}
            >
              <DeleteOutlinedIcon />
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col">
      <button
        className="bg-navy text-white px-2 mb-2 rounded-lg self-end mr-5 text-[20px] absolute top-[38px]"
        onClick={() => handleOpen()}
      >
        +
      </button>
      <div className="w-[80vw] h-[90vh]">
        <DataGrid
          getRowId={(data) => data.ID}
          checkboxSelection
          rows={rows}
          columns={columns}
          components={{ Toolbar: QuickSearchToolbar }}
          className="shadow-xl"
          sx={{
            "& .MuiDataGrid-columnHeader .MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-columnHeader:focus": {
              outline: " none",
            },
            "& .MuiDataGrid-cell:focus": {
              outline: " none",
            },
            borderRadius: 5
          }}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        className="flex items-center justify-center"
      >
        <Box className="bg-white w-[30vw] flex flex-col gap-3 pt-5 rounded-lg">
          <h1 className="px-5">Create Topic</h1>
          <form onSubmit={handleCreate} id="createForm">
            <div className="flex flex-col gap-5 p-5">
              <div className="form-group flex items-center gap-12">
                <label htmlFor="judul">Judul</label>
                <TextField fullWidth size="small" name="judul" />
              </div>
              <div className="form-group flex items-center gap-5">
                <label htmlFor="deskripsi">Deskripsi</label>
                <TextField fullWidth size="small" name="deskripsi" />
              </div>
            </div>
          </form>
          <div className="flex justify-end items-center bg-gray px-5 gap-5 rounded-lg rounded-t-none">
            <button onClick={handleClose}>Cancel</button>
            <button
              type="submit"
              form="createForm"
              className="bg-navy text-white p-2 my-5 rounded"
            >
              Create
            </button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={modalDelete.open}
        onClose={handleCloseModalDelete}
        className="flex items-center justify-center"
      >
        <Box className="bg-white w-[30vw] flex flex-col gap-3 pt-5 rounded-lg text-center items-center">
          <DeleteForeverOutlinedIcon
            className="text-danger"
            sx={{
              fontSize: 50,
            }}
          />
          <h1 className="px-5 font-extrabold">Delete Topics</h1>
          <p>Are you sure want to delete this Topics?</p>
          <div className="flex justify-center items-center px-5 gap-5 -mt-3">
            <button
              className="border border-danger text-danger py-1 px-8 my-5 rounded-lg font-bold"
              onClick={handleCloseModalDelete}
            >
              No
            </button>
            <button
              onClick={() => handleDelete(modalDelete.id)}
              className="bg-danger text-white py-1 px-8 my-5 rounded-lg font-bold"
            >
              Yes
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TableTopic;
