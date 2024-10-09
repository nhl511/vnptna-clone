import React from "react";
import Video from "./components/Video";
import Products from "./components/Products";
import MainCarousel from "./components/MainCarousel";
import News from "./components/News";
import Payment from "./components/Payment";
import { intro, video } from "@/data/data";

const getBanner = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      `/api/v1/portal/partner/getBanner?partner_id=66&pos=2&type=1`
  );
  const result = await res.json();
  return result.data;
};

const getProducts = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      `/api/v1/portal/product/getProducts?partner_id=66&limit=30&language=vi`,
    { next: { revalidate: 5 } }
  );
  const result = await res.json();
  return result.data;
};

const getNews = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      `/api/v1/portal/menu/getNewsByCateId?service_id=2172&page=1&num=10`,
    { next: { revalidate: 5 } }
  );
  const result = await res.json();
  return result.data.lst;
};

const Homepage = async () => {
  const banner = await getBanner();
  const products = await getProducts();
  const news = await getNews();

  return (
    <div>
      <MainCarousel images={banner} />
      <Video intro={intro} video={video} />
      <Products products={products} />
      <News news={news} />
      <Payment />
    </div>
  );
};

export default Homepage;
