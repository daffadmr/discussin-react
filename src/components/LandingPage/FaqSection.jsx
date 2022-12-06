import React from "react";
import quote from "../../assets/png/quote.png"

const FaqSection = () => {
  return (
    <section id="faq">
      <div className="bg-[#d1d1d1]">
        <div className="container">
          <div className="flex flex-col items-center py-16">
            <h1>What People Say About Discuss.In</h1>
            <p>
              Some user testimonials about the experience when using this
              Discuss.In application
            </p>
            <div className="faq-cards pt-20 flex justify-center items-center max-w-7xl gap-10 flex-wrap">
              <div className="card relative w-[455px] h-[176px] bg-[#ebebeb] p-8">
                <div className="flex gap-5">
                  <div className="bg-[#d1d1d1] rounded-full w-[45px] h-[45px]">
                    <img src="" alt="" width={45} />
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
              <div className="card relative w-[455px] h-[176px] bg-[#ebebeb] p-8">
                <div className="flex gap-5">
                  <div className="bg-[#d1d1d1] rounded-full w-[45px] h-[45px]">
                    <img src="" alt="" width={45} />
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
              <div className="card relative w-[455px] h-[176px] bg-[#ebebeb] p-8">
                <div className="flex gap-5">
                  <div className="bg-[#d1d1d1] rounded-full w-[45px] h-[45px]">
                    <img src="" alt="" width={45} />
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
              <div className="card relative w-[455px] h-[176px] bg-[#ebebeb] p-8">
                <div className="flex gap-5">
                  <div className="bg-[#d1d1d1] rounded-full w-[45px] h-[45px]">
                    <img src="" alt="" width={45} />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
