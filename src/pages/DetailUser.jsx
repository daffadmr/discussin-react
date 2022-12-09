import React from "react";
import { useParams } from "react-router-dom";

function DetailUser() {
  const params = useParams();
  console.log(params.id);
  return (
    <div className="container">
      <h1 className="pb-5">Detail User</h1>
      <div className="users">
        {/* container2 */}
        <div className="w-[80vw] h-[85vh] flex justify-between">
          <div className="h-[100%] w-[25%] bg-white rounded-[15px] shadow-lg border border-slate-200 p-[60px]">
            <div className="w-[80px] h-[80px] bg-red-100  rounded-[50%] mb-[20px]" />
            <h1>Jhon Doe</h1>
          </div>
          <div className="overflow-hidden h-[100%] w-[72%] bg-white rounded-[15px] shadow-lg border border-slate-200">
            {/* header */}
            <div className="w-[100%] h-[60px] px-[20px] leading-[60px] ">
              <span className="text-navy font-bold text-[18px] border-b-[4px] pb-[14px]">
                Posts
              </span>
            </div>
            {/* end header */}
            {/* content */}
            <div className="w-[100%] h-[calc(100%-60px)] bg-[#e9e9e9e7] p-[20px]">
              {/* if there photo */}
              <div className="w-[100%] h-[200px] bg-white rounded-[10px] px-[20px] py-[10px] flex ">
                <div className="w-[80%] h-[100%]">
                  <h2 className="h-[25%] w-[100%]">Title</h2>
                  <p className="h-[50%] w-[100%] overflow-hidden text-justify pr-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque corporis harum ducimus iste velit tenetur, cupiditate
                    saepe, minima fugit alias unde, dolorum quisquam autem
                    corrupti possimus quam magnam laborum! Laborum in nam natus
                    quidem enim commodi, cumque veritatis molestias eveniet,
                    rerum recusandae distinctio sed consequuntur minima
                    corrupti! In alias inventore earum quis sit amet distinctio
                    obcaecati quisquam maxime et voluptatum aspernatur fugiat ad
                    maiores doloremque eaque, ducimus modi fugit officiis vitae!
                    Quibusdam deserunt eligendi doloribus optio, fugit
                    consequuntur. Atque incidunt commodi accusantium alias
                    perferendis esse quae cumque. Aut, iure quam, delectus
                    ducimus a est, totam pariatur ex atque voluptate natus.
                  </p>
                  <div className="h-[25%] w-[100%] flex items-center">
                    <div className=" flex text-xs text-[#556282]">
                      <p className="ml-[10px]">
                        1 <b>Likes</b>
                      </p>
                      <p className="ml-[10px]">
                        0 <b>Dislikes</b>
                      </p>
                      <p className="cursor-pointer ml-[10px]">
                        0 <b>Comment</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[20%] h-[100%] bg-red-500"></div>
              </div>
              {/* end photo */}
              {/* without Photo */}
              <div className="w-[100%] h-[200px] bg-white rounded-[10px] mt-[20px] px-[20px] py-[10px] flex ">
                <div className="w-[100%] h-[100%]">
                  <h2 className="h-[25%] w-[100%]">Title</h2>
                  <p className="h-[50%] w-[100%] overflow-hidden text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque corporis harum ducimus iste velit tenetur, cupiditate
                    saepe, minima fugit alias unde, dolorum quisquam autem
                    corrupti possimus quam magnam laborum! Laborum in nam natus
                    quidem enim commodi, cumque veritatis molestias eveniet,
                    rerum recusandae distinctio sed consequuntur minima
                    corrupti! In alias inventore earum quis sit amet distinctio
                    obcaecati quisquam maxime et voluptatum aspernatur fugiat ad
                    maiores doloremque eaque, ducimus modi fugit officiis vitae!
                    Quibusdam deserunt eligendi doloribus optio, fugit
                    consequuntur. Atque incidunt commodi accusantium alias
                    perferendis esse quae cumque. Aut, iure quam, delectus
                    ducimus a est, totam pariatur ex atque voluptate natus.
                  </p>
                  <div className="h-[25%] w-[100%] flex items-center">
                    <div className=" flex text-xs text-[#556282]">
                      <p>
                        0 <b>Likes</b>
                      </p>
                      <p className="ml-[10px]">
                        0 <b>Dislikes</b>
                      </p>
                      <p className="cursor-pointer ml-[10px]">
                        0 <b>Comment</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end normal */}
              {/* end content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
