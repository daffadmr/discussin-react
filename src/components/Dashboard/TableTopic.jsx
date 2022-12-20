import React, { useState } from "react";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import {
  Box,
  CircularProgress,
  Modal,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  createTopic,
  deleteTopic,
  updateTopic,
} from "../../store/features/topicSlice";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const TableTopic = ({ data, status }) => {
  const rows = [...data];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modalDelete, setModalDelete] = useState({ open: false, id: null });
  const handleOpenModalDelete = (id) => setModalDelete({ open: true, id: id });
  const handleCloseModalDelete = () => setModalDelete({ open: false });

  const [modalEdit, setModalEdit] = useState({
    open: false,
    id: null,
    name: "",
    description: "",
  });
  const handleOpenModalEdit = (id, name, description) =>
    setModalEdit({ open: true, id: id, name: name, description: description });
  const handleCloseModalEdit = () => setModalEdit({ open: false });

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
  const baseData = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(baseData);

  const handleChangeCreate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChangeEdit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setModalEdit({
      ...modalEdit,
      [name]: value,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(createTopic({ ...formData }));
    alert("Berhasil menambahkan data");
    handleClose();
  };

  const handleDelete = (id) => {
    dispatch(deleteTopic(id));
    alert("Berhasil hapus data");
    handleCloseModalDelete();
  };

  const handleUpdate = (data) => {
    dispatch(updateTopic(data));
    alert("Berhasil edit data");
    handleCloseModalEdit();
  };

  const columns = [
    {
      field: "ID",
      headerName: "#",
      width: 200,
      renderCell: (index) => index.api.getRowIndex(index.row.ID) + 1,
      headerClassName: "",
      headerAlign: "center",
      align: "center",
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
          <div className="flex gap-2">
            <button
              className="bg-danger p-2 rounded-lg text-white"
              onClick={() => handleOpenModalDelete(params.row.ID)}
            >
              <DeleteOutlinedIcon />
            </button>
            <button
              className="bg-navy p-2 rounded-lg text-white"
              onClick={() =>
                handleOpenModalEdit(
                  params.row.ID,
                  params.row.name,
                  params.row.description
                )
              }
            >
              <EditOutlinedIcon />
            </button>
          </div>
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
      <div className="w-[85vw] h-[90vh]">
        <>
          {status === "loading" ? (
            <div className="flex justify-center item-center h-[80vh] w-[85vw]">
              <div className="flex items-center justify-center">
                <CircularProgress color="inherit" />
              </div>
            </div>
          ) : (
            <DataGrid
              getRowId={(data) => data.ID}
              rows={rows}
              columns={columns}
              components={{ Toolbar: QuickSearchToolbar }}
              disableSelectionOnClick
              checkboxSelection={false}
              pageSize={20}
              rowsPerPageOptions={[]}
              hideFooterSelectedRowCount
              className="shadow-xl"
              sx={{
                '.MuiTablePagination-displayedRows': {
                  display: 'none',
                },
                "& .MuiDataGrid-columnHeader .MuiDataGrid-columnSeparator": {
                  display: "none",
                },
                "& .MuiDataGrid-columnHeader:focus": {
                  outline: " none",
                },
                "& .MuiDataGrid-cell:focus": {
                  outline: " none",
                },
                borderRadius: 5,
              }}
            />
          )}
        </>
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
                <TextField
                  onChange={handleChangeCreate}
                  value={formData.name}
                  fullWidth
                  size="small"
                  name="name"
                />
              </div>
              <div className="form-group flex items-center gap-5">
                <label htmlFor="deskripsi">Deskripsi</label>
                <TextareaAutosize
                  className="border border-gray w-full resize-none p-3 rounded focus:border focus:border-b-sky-500"
                  onChange={handleChangeCreate}
                  value={formData.description}
                  minRows={3}
                  name="description"
                />
              </div>
            </div>
          </form>
          <div className="flex justify-end items-center bg-gray px-5 gap-5 rounded-lg rounded-t-none">
            <button onClick={handleClose}>Cancel</button>
            {formData.description.length <= 25 ? (
              <button
                type="submit"
                form="createForm"
                className="bg-navy opacity-50 text-white p-2 my-5 rounded"
                disabled
              >
                Create
              </button>
            ) : (
              <button
                type="submit"
                form="createForm"
                className="bg-navy text-white p-2 my-5 rounded"
              >
                Create
              </button>
            )}
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
      <Modal
        open={modalEdit.open}
        onClose={handleCloseModalEdit}
        className="flex items-center justify-center"
      >
        <Box className="bg-white w-[30vw] flex flex-col gap-3 pt-5 rounded-lg">
          <h1 className="px-5">Edit Topic Description</h1>
          <form id="createForm">
            <div className="flex flex-col gap-5 p-5">
              <div className="form-group flex items-center gap-12">
                <label htmlFor="judul">Judul</label>
                <p className="ml-5">{modalEdit.name}</p>
              </div>
              <div className="form-group flex items-center gap-5">
                <label htmlFor="deskripsi">Description</label>
                <TextareaAutosize
                  className="border border-gray w-full resize-none p-3 rounded focus:border focus:border-b-sky-500"
                  onChange={handleChangeEdit}
                  value={modalEdit.description}
                  minRows={3}
                  name="description"
                />
              </div>
            </div>
          </form>
          <div className="flex justify-end items-center bg-gray px-5 gap-5 rounded-lg rounded-t-none">
            <button onClick={handleCloseModalEdit}>Cancel</button>
            {modalEdit.open && modalEdit.description.length <= 25 ? (
              <button
                type="submit"
                form="createForm"
                className="bg-navy opacity-50 text-white p-2 my-5 rounded"
                disabled
              >
                Edit
              </button>
            ) : (
              <button
                type="submit"
                onClick={() => {
                  handleUpdate({
                    id: modalEdit.id,
                    description: modalEdit.description,
                  });
                }}
                form="createForm"
                className="bg-navy text-white p-2 my-5 rounded"
              >
                Edit
              </button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TableTopic;
