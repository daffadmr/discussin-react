import React from "react";
import featureImage from "../../assets/png/featureImage.png";

const FeatureSection = () => {
  return (
    <section id="feature" className="mt-12 bg-[#f9f9f9]">
      <div className="container flex items-center justify-center">
        <div className="flex flex-col justify-center items-center py-20 max-w-7xl">
          <h1>Discuss.In Features</h1>
          <div className="flex pt-16 gap-12 flex-wrap ">
            <div className="flex flex-col gap-8 justify-center w-[423px]">
              <div className="flex gap-4">
                <div className="flex flex-col text-right">
                  <h3 className="font-bold">Friendly Design for New User</h3>
                  <p>
                    The application that we build has a friendly appearance to
                    the user, of course the user will not find it difficult to
                    use.
                  </p>
                </div>
                😁
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col text-right">
                  <h3 className="font-bold">
                    Various news, topics, and many useful articles for you
                  </h3>
                  <p>
                    You can find various news from anywhere in the world here
                    easily.
                  </p>
                </div>
                😁
              </div>
            </div>
            <img src={featureImage} alt="" />
            <div className="flex flex-col gap-8 justify-center w-[423px]">
              <div className="flex gap-4">
                😁
                <div className="flex flex-col">
                  <h3 className="font-bold">
                    Users are free to argue in posts
                  </h3>
                  <p>
                    Free to argue in posts to channel your opinion about the
                    post
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                😁
                <div className="flex flex-col">
                  <h3 className="font-bold">Following each other users</h3>
                  <p>
                    You can follow other users who you think are good writers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
