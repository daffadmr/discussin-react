import React from "react";
import quote from "../../assets/png/quote.png"
import fabio from "../../assets/png/fabio.png"
import jack from "../../assets/png/jack.png"
import alex from "../../assets/png/alex.png"
import jonathan from "../../assets/png/jonathan.png"

const FaqSection = () => {
  return (
    <section id="faq">
      <div className="">
        <div className="container">
          <div className="flex flex-col items-center py-16">
            <h1>What People Say About Discuss.In</h1>
            <p>
              Some user testimonials about the experience when using this
              Discuss.In application
            </p>
            <div className="faq-cards pt-20 flex justify-center items-center max-w-7xl gap-10 flex-wrap">
              <div className="card relative max-w-md bg-[#FAEA5A] p-8">
                <div className="flex gap-5">
                  <div className="rounded-full w-1/2 h-[45px]">
                    <img src={fabio} alt="" />
                    <img src={quote} alt="" className="absolute top-[-13px] left-16"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Fabio Quartaro</h3>
                    <p>
                      The application that is the main application in my search
                      for the latest news about anything, and the news that is
                      always updated'
                    </p>
                  </div>
                </div>
              </div>
              <div className="card relative max-w-md bg-[#FAEA5A] p-8">
                <div className="flex gap-5">
                  <div className="rounded-full w-1/2 h-[45px]">
                    <img src={jack} alt="" />
                    <img src={quote} alt="" className="absolute top-[-13px] left-16"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Jack Miller</h3>
                    <p>
                    This application is very useful for me and always displays the latest news from around the world
                    </p>
                  </div>
                </div>
              </div>
              <div className="card relative max-w-md bg-[#FAEA5A] p-8">
                <div className="flex gap-5">
                  <div className="rounded-full w-1/2 h-[45px]">
                    <img src={alex} alt="" />
                    <img src={quote} alt="" className="absolute top-[-13px] left-16"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Alex Espargaro</h3>
                    <p>
                    Application that is very easy to use and looks comfortable, love this application!
                    </p>
                  </div>
                </div>
              </div>
              <div className="card relative max-w-md bg-[#FAEA5A] p-8">
                <div className="flex gap-5">
                  <div className="rounded-full w-1/2 h-[45px]">
                    <img src={jonathan} alt="" />
                    <img src={quote} alt="" className="absolute top-[-13px] left-16"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Jonathan Rea</h3>
                    <p>
                    Free to discuss with any topic as long as it does not violate the rules, recommended for download!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
