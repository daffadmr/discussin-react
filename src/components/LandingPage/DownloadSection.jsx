import React from "react";
import LandingPageWave from "../../assets/svg/DownloadSec.svg";
import DownloadSvg from "../../assets/svg/DownloadSvg.svg";
import play from "../../assets/svg/play.svg"
import apple from "../../assets/svg/apple.svg"

const DownloadSection = () => {
  return (
    <section id="download" className="relative mt-20 pt-8">
      <div className="container">
        <div className="flex justify-center flex-col-reverse 2xl:flex-row flex-wrap items-center gap-16">
          <img
            className=""
            src={DownloadSvg}
            alt=""
          />
          <div className="flex flex-col gap-5 2xl:-mt-80 items-center 2xl:items-start text-center">
            <h1>Don't have the Discuss.In app yet? Let's download now!</h1>
            <p>
              Discuss freely discussing the latest news, updated topics, and
              extensive knowledge
            </p>
            <div className="flex gap-5">
              <button><img src={play} alt="" /></button>
              <button><img src={apple} alt="" /></button>
            </div>
          </div>
        </div>
      </div>
      <img src={LandingPageWave} width="100%" alt="" className="absolute bottom-0 -z-10" />
    </section>
  );
};
// lg:left-[80px] 4xl:left-[300px] top-[120px]
// top-[-250px] sm:top-0 sm:right-[250px]
export default DownloadSection;
