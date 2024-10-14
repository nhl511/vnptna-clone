import React from "react";
import Video from "./components/Video";
import Products from "./components/Products";
import MainCarousel from "./components/MainCarousel";
import News from "./components/News";
import Payment from "./components/Payment";
import { intro, video } from "@/data/data";
import { getProducts } from "@/apiRequests/product";
import { getBanner } from "@/apiRequests/partner";
import { getNewsByCateId } from "@/apiRequests/menu";

const Homepage = async () => {
  const banner = await getBanner(1);
  const products = await getProducts(30);
  const news = await getNewsByCateId({ id: 2172, page: 1, num: 10 });

  return (
    <div>
      <MainCarousel images={banner} />
      <Video intro={intro} video={video} />
      <Products products={products} />
      <News news={news.lst} />
      <Payment />
    </div>
  );
};

export default Homepage;
