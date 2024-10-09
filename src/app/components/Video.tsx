import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import styles from "./video.module.css";

const Video = ({ video, intro }: { video: videoType; intro: introType }) => {
  return (
    <div className="w-[100%] relative overflow-hidden">
      <video
        src={video.url}
        autoPlay
        muted
        loop
        style={{ width: "100%", height: "600px", objectFit: "cover" }}
      ></video>
      <div className="w-full h-full bg-black absolute top-0 opacity-30"></div>
      <div className="flex mx-4 flex-col items-center justify-between absolute p-5 max-w-[624px] h-[80%] top-1/2  transform  -translate-y-1/2 bg-[url('/images/bgimage.jpg')] bg-cover bg-left-bottom text-white rounded-lg">
        <div>
          <h3 className="text-lg text-center">{intro.title}</h3>
          <p className="mt-5 text-base">{intro.description}</p>
        </div>

        <div>
          <ChevronDown
            size={60}
            strokeWidth={2.5}
            className="transform mx-auto mb-4 animate-fastBounce"
          />
          <Link href="/survey">
            <button className={styles.btn}>Bắt đầu ngay</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
