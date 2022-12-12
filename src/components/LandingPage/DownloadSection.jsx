import React from "react";
import LandingPageWave from "../../assets/svg/DownloadSec.svg";
import DownloadSvg from "../../assets/svg/DownloadSvg.svg";

const DownloadSection = () => {
  return (
    <section id="download">
      <div className="container">
        <div className="flex justify-center flex-wrap relative h-[70vh] lg:h-[80vh] flex-col-reverse">
          <img
            className="absolute z-10 top-[120px] lg:left-[100px] 2xl:left-[200px] 4xl:left-[300px]"
            src={DownloadSvg}
            alt=""
          />
          <div className="flex flex-col mt-72 absolute top-0 lg:right-[50px] 2xl:right-[100px] 4xl:right-[200px]">
            <h1>Don't have the Discuss.In app yet? Let's download now!</h1>
            <p>
              Discuss freely discussing the latest news, updated topics, and
              extensive knowledge
            </p>
          </div>
        </div>
      </div>
      <img src={LandingPageWave} width="100%" alt="" />
    </section>
  );
};
// lg:left-[80px] 4xl:left-[300px] top-[120px]
// top-[-250px] sm:top-0 sm:right-[250px]
export default DownloadSection;
