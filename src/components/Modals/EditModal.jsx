import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react-redux";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function EditModal() {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const dispatch = useDispatch();
    //const user = useSelector(state => state.user);
    const [values, setValues] = useState({
        email, username
      });

    const handleEditUser = () => {
    setValues({ email: '', username: '' });
    dispatch(editUser({
      email: values.email,
      username: values.username,
    }));
    navigate('/users');
    }}
    
    return (
      <Fragment>
        <Button onClick={handleOpen} variant="gradient">
          className="bg-blue-600 p-2 rounded-lg text-white"
                onClick={handleOpen}
          <EditOutlinedIcon/>
        </Button>
        <Dialog>
        open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          <DialogHeader 
            className="font-bold text-black m-0 text-[32px] leading-[normal]">
            Edit User
        </DialogHeader>
          <DialogBody/>
            <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Username
                </label>
                </div>
                <div class="md:w-2/3">
                <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none" id="inline-username" type="text" placeholder="Alex Espargaro"/>
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                    Email
                </label>
                </div>
                <div class="md:w-2/3">
                <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none" id="inline-email" type="email" placeholder="alexespargo@gmail.com"/>
                </div>
            </div>
            </form>
          <DialogBody/>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="bg-blue-600" onClick={handleEditUser}>
              <span>Save Changes</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    );

  
