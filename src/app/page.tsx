import React from "react";
import Video from "./components/Video";
import Products from "./components/Products";
import MainCarousel from "./components/MainCarousel";
import News from "./components/News";
import { images, intro, news, products, video } from "@/data/data";
import Payment from "./components/Payment";

const Homepage = () => {
  return (
    <div>
      <MainCarousel images={images} />
      <Video intro={intro} video={video} />
      <Products products={products} />
      <News news={news} />
      <Payment />
    </div>
  );
};

export default Homepage;
