import React from "react";
import BannerImage from "../../../public/assets/Banner-min.jpg";

const Banner = () => {
  return (
    <div className="bg-[url('../../../public/assets/Banner-min.jpg')] w-full h-[730px] bg-cover">
      <div className="text-white px-[140px] flex flex-col justify-start items-start py-60 gap-5">
        <h1 className="text-5xl font-semibold">
          Bid on Unique Items from <br />
          Around the World
        </h1>
        <p className="text-2xl font-light">
          Discover rare collectibles, luxury goods, and vintage <br />
          treasures in our curated auctions
        </p>
        <button className="text-xl text-black font-medium bg-white rounded-4xl px-8 py-4 cursor-pointer hover:text-white border-white border-[1px] hover:bg-black">
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default Banner;
