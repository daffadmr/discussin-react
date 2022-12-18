import React from "react";
import LandingPageWave from "../../assets/svg/DownloadSec.svg";
import DownloadSvg from "../../assets/svg/DownloadSvg.svg";

const DownloadSection = () => {
  return (
    <section id="download" className="relative mt-20 pt-8">
      <div className="container">
        <div className="flex justify-center flex-col-reverse 2xl:flex-row flex-wrap items-center">
          <img
            className=""
            src={DownloadSvg}
            alt=""
          />
          <div className="flex flex-col gap-5 2xl:-mt-80">
            <h1>Don't have the Discuss.In app yet? Let's download now!</h1>
            <p>
              Discuss freely discussing the latest news, updated topics, and
              extensive knowledge
            </p>
            <div className="flex">
              <button>Google Play</button>
              <button>App store</button>
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
