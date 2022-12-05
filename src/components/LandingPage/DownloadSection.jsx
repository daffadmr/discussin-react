import React from "react";
import LandingPageWave from "../../assets/svg/LandingPageWave.svg";
import DownloadSvg from "../../assets/svg/DownloadSvg.svg";

const DownloadSection = () => {
  return (
    <section id="download">
      <img src={LandingPageWave} width="100%" alt="" />
      <div className="container">
        <div className="flex justify-center flex-wrap relative h-[70vh] lg:h-[80vh] flex-col-reverse">
          <img className="absolute -z-10 xl:left-[300px] top-[120px]" src={DownloadSvg} alt="" />
          <div className="flex flex-col mt-72 absolute top-[-250px] sm:top-0 sm:right-[250px]">
            <h1>Don't have the Discuss.In app yet? Let's download now!</h1>
            <p>Discuss freely discussing the latest news, updated topics, and extensive knowledge</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;