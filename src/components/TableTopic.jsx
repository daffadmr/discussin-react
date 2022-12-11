import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Box, Modal, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createTopic, deleteTopic, fetchTopic } from "../store/features/topicSlice";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const TableTopic = ({ data }) => {
  const rows = [...data];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const QuickSearchToolbar = () => {
    return (
      <Box className="absolute top-[-50px] right-0"
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
    
    alert("Berhasil menambahkan data")
    handleClose();
  };

  const handleDelete = (id) => {
    dispatch(deleteTopic(id));
    alert("Berhasil hapus data")
  };

  const columns = [
    {
      field: "ID",
      headerName: "No.",
      width: 100,
      sortable: false,
      renderCell: (index) => index.api.getRowIndex(index.row.ID) + 1,
    },
    { field: "name", headerName: "Name", width: 500 },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      renderCell: (params) => {
        return (
          <div className="w-full flex justify-between">
            <div className="flex items-center">{params.row.description}</div>
            <button
              className="bg-danger p-2 rounded-lg text-white"
              onClick={() => handleDelete(params.row.ID)}
            >
              <DeleteOutlinedIcon />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col">
      <button
        className="bg-navy text-white p-3 my-2 rounded-lg w-[150px]"
        onClick={() => handleOpen()}
      >
        Create Topic
      </button>
      <div className="w-[80vw] h-[80vh] rounded-lg shadow-lg">
        <DataGrid
          getRowId={(data) => data.ID}
          checkboxSelection
          rows={rows}
          columns={columns}
          components={{ Toolbar: QuickSearchToolbar }}
          // componentsProps={{
          //   toolbar: {
          //     showQuickFilter: true,
          //     quickFilterProps: { debounceMs: 500 },
          //   },
          // }}
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
    </div>
  );
};

export default TableTopic;
