/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "@mui/material";

// image
import Author from "../assets/png/author.png";
import Threads from "../assets/png/threads.png";

// Icon
import RightArrow from "../assets/svg/RightArrow";
import Eclipse from "../assets/svg/Eclipse";

const DetailThreads = () => {
  let userId = useParams();
  const [thread, setThread] = useState([]);

  useEffect(() => {
    getThread();
  }, []);

  const getThread = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3001/posts/${userId.id}`,
      });
      // console.log(response.data);
      setThread(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container pb-14">
      <h1 className="pb-5">Manage Thread</h1>
      <div className="w-full bg-[#B1B1B1] rounded-t-xl px-4 py-1.5 flex items-center justify-between">
        <Link href="/threads">
          <button className="p-1.5 bg-[#CFCFCF] rounded-full">
            <RightArrow />
          </button>
        </Link>
        <p className="text-xs font-semibold tracking-wide">
          You are now in the admin-only view
        </p>
        <div></div>
      </div>
      <div className="w-full border shadow-xl shadow-gray-400 px-14 py-6 space-y-5 rounded-b-xl">
        <div className="header-content flex justify-between">
          <div className="flex items-center space-x-2">
            <img className="w-14 h-14" src={Author} alt="author" />
            <div className="author-name">
              <h2 className="font-bold text-sm">John Legend</h2>
              <p className="text-xs">Student College</p>
            </div>
          </div>
          <button className="flex items-center space-x-2">
            <Eclipse />
          </button>
        </div>
        <div className="body-content space-y-3">
          <p className="text-xs">
            It all started back in 2008. I was in my second year of university,
            and one night my friend Megan decided that she wanted to go to a
            lecture about mountains as a ploy to meet hot guys, and she dragged
            me alone
          </p>
          <img className="w-full h-[400px]" src={Threads} alt="Threads" />
          <p className="text-xs">
            It all started back in 2008. I was in my second year of university,
            and one night my friend Megan decided that she wanted to go to a
            lecture about mountains as a ploy to meet hot guys, and she dragged
            me alonoe. To see Everest, one must go to a lookout called Tiger
            Hill, thirteen miles to the southeast.
          </p>
        </div>
        <div className="footer-content flex space-x-5 text-xs text-[#556282]">
          <p>
            163 <b>Likes</b>
          </p>
          <p>
            14 <b>Dislikes</b>
          </p>
          <p>
            20 <b>Comment</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailThreads;
