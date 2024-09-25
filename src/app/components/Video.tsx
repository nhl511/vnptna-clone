import React from "react";

const Video = ({ video, intro }: { video: videoType; intro: introType }) => {
  return (
    <div className="w-[100%] mt-9 relative overflow-hidden">
      <video
        src={video.url}
        autoPlay
        muted
        loop
        style={{ width: "100%", height: "600px", objectFit: "cover" }}
      ></video>
      {/* <div className="absolute top-0 bottom-0 left-0 right-0"></div> */}
      <div className="flex flex-col items-center justify-between absolute p-5 w-[624px] h-[475px] top-1/2 left-5 transform  -translate-y-1/2 bg-[url('/images/bgimage.jpg')] bg-cover bg-left-bottom text-white ">
        <div>
          <h3 className="text-2xl text-center px-10">{intro.title}</h3>
          <p className="mt-5 text-xl">{intro.description}</p>
        </div>

        <div className="">
          <button className="bg-orange-400 w-[230px] h-[50px] text-xl">
            Bắt đầu ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
