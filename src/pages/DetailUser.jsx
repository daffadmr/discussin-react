import React from "react";
import { useParams } from "react-router-dom";

function DetailUser() {
  const params = useParams();
  return (
    <div className="container">
      <h1 className="pb-5">Detail User</h1>
      <div className="users">
        <div className="h-[80vh] w-[80vw] rounded-[20px] overflow-hidden">
          {/* header */}
          <div className="h-[38%] w-[100%]">
            <div className="h-[80px] w-[100%] bg-navy" />
            <div className="h-[calc(100%-80px)] w-[100%] bg-white relative">
              {/* profile */}
              <div className="w-[100%] h-[100%] flex justify-center">
                <div className="h-[160px] w-[160px] absolute top-[-50px] flex items-center flex-col">
                  <div className="h-[110px] w-[110px] rounded-full bg-black border border-white"></div>
                  <div className="pt-1 w-[100%] flex flex-col items-center">
                    <h4 className="font-bold">Nama Saya</h4>
                    <h5 className="text-sm">emaiSaya@gamil.com</h5>
                  </div>
                </div>
                <div className="w-[100%] h-[50px] absolute bottom-0 flex">
                  <div className="w-[50%] h-[100%] p-3 border-b-[3px] bg-white border-navy flex justify-center items-center">
                    <h2 className="font-bold text-navy ">Threads</h2>
                  </div>
                  <div className="w-[50%] h-[100%] p-3 bg-white flex justify-center items-center">
                    <h2 className="font-bold text-[#ccc] ">Comments</h2>
                  </div>
                </div>
              </div>
              {/* end profile */}
            </div>
          </div>
          {/* end header */}
          {/* content */}
          <div className="h-[62%] w-[100%] bg-[#ccc] p-[20px]">
            {/* card */}
            <div className="h-[190px] w-[100%] flex  bg-white px-[30px] py-[15px] rounded-xl relative">
              {/* text and title and like */}
              <div className="w-[75%] h-[100%]">
                {/* title and text */}
                <div className="pl-[10px] border-l-[3px] border-[#ccc]">
                  <h3 className="font-bold">Judul Title</h3>
                  <p className="mt-[10px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae dignissimos deserunt asperiores alias iure. Dicta
                    assumenda obcaecati architecto, culpa quae officia amet ut
                    ipsam nisi! Facere, doloribus totam adipisci aut tempora
                    rerum ipsam, inventore eligendi architecto ad ex itaque quo?
                  </p>
                </div>
                {/* end */}
                {/* like */}
                <div className=" absolute bottom-[20px] flex text-l items-center text-[#556282]">
                  <p>
                    0 <b>Likes</b>
                  </p>
                  <p className="ml-3">
                    0 <b>Dislikes</b>
                  </p>
                  <p className="cursor-pointer ml-3">
                    0 <b>Comment</b>
                  </p>
                </div>
                {/* end */}
              </div>
              {/* end */}
              <div className="w-[25%] bg-black">hai</div>
            </div>
            {/* end Card */}
          </div>
          {/* endContent */}
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
