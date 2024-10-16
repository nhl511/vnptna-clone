import React from "react";
import Video from "./components/Video";
import Products from "./components/Products";
import MainCarousel from "./components/MainCarousel";
import News from "./components/News";
import Payment from "./components/Payment";
import { intro, video } from "@/data/data";
import { getNewsByCateId } from "@/services/apis/menu.service";
import { getBanner } from "@/services/apis/partner.service";
import { getProducts } from "@/services/apis/products.service";

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
