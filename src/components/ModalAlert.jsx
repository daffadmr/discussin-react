import React, { useState } from "react";
import { Modal } from "@mui/material";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import { useEffect } from "react";

function ModalAlert({ popup }) {
  const [modal, setModal] = useState();

  console.log(modal);
  // console.log(popup);
  // setModal({ visible: popup.visible, id: popup.id });
  // console.log(popup);
  // console.log(modal);

  return (
    <Modal open={popup.visible}>
      <div className="w-[400px] bg-white absolute top-[30%] left-[40%] outline-none flex items-center flex-col p-[38px] rounded-[20px]">
        <DoNotDisturbOnIcon sx={{ color: "red", fontSize: "50px" }} />
        <h1 className="font-bold mt-[10px]">Stop All Activity</h1>
        <p className="w-[300px] text-center mt-[10px] font-[16px]">
          Are you sure want to stop all activity this thread?
        </p>
        <div className="flex-row flex w-[230px] justify-between mt-[10px]">
          <div
            className="text-danger w-[103px] h-[30px] flex justify-center items-center outline-danger outline-1 outline font-bold rounded-[4px] cursor-pointer"
            onClick={() => setModal({ visible: false })}
          >
            No
          </div>
          <div
            className="text-white bg-danger w-[103px] h-[30px] flex justify-center items-center font-bold rounded-[4px] cursor-pointer"
            // onClick={() => clickHandler(modal.id)}
          >
            Yes
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAlert;
