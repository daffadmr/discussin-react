import React from 'react'
import HeroWave from "../../assets/svg/HeroWave.svg";
import heroImage from "../../assets/png/heroImage.png";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="hero" className="mb-24 relative">
        <img
          src={HeroWave}
          alt=""
          width="100%"
          className="absolute -z-50 3xl:top-[-100px] 4xl:top-[-200px]"
        />
        <div className="container">
          <div className="flex flex-col">
            <div className="flex justify-center h-full items-center flex-wrap pt-20">
              <div className="flex flex-col gap-8 pb-48 max-w-xl">
                <h1 className="text-4xl">
                  Find information, knowledge, and communities.
                </h1>
                <p>
                  DiscussIn is a place to discuss many things, the lates news in
                  depth and unique.
                </p>
                <div className="flex gap-5">
                  <button>Download the App -{">"}</button>
                  <p>⭐4.8</p>
                  <Link>On Play Store</Link>
                </div>
              </div>
              <img src={heroImage} alt="" />
            </div>
            <div className="flex justify-center gap-[10px] flex-wrap">
              <div className="card w-[247px] h-[172px] text-center rounded-[16px] bg-[#f9f9f9] p-8">
                <div className="flex flex-col">
                  😁
                  <h2>Easy to Use</h2>
                  <p className="text-[12px]">
                    The display interface created is user customized, so it's
                    easy to use.
                  </p>
                </div>
              </div>
              <div className="card w-[247px] h-[172px] text-center rounded-[16px] bg-[#f9f9f9] p-8">
                <div className="flex flex-col">
                  😁
                  <h2>Easy to Use</h2>
                  <p className="text-[12px]">
                    The display interface created is user customized, so it's
                    easy to use.
                  </p>
                </div>
              </div>
              <div className="card w-[247px] h-[172px] text-center rounded-[16px] bg-[#f9f9f9] p-8">
                <div className="flex flex-col">
                  😁
                  <h2>Easy to Use</h2>
                  <p className="text-[12px]">
                    The display interface created is user customized, so it's
                    easy to use.
                  </p>
                </div>
              </div>
              <div className="card w-[247px] h-[172px] text-center rounded-[16px] bg-[#f9f9f9] p-8">
                <div className="flex flex-col">
                  😁
                  <h2>Easy to Use</h2>
                  <p className="text-[12px]">
                    The display interface created is user customized, so it's
                    easy to use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection