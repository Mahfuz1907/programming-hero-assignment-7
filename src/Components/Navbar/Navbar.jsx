import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import Photo from "../../../public/assets/photo.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-white flex flex-row justify-between items-center px-36 py-10">
        <div className="nav-start text-2xl">
          <h1>
            <span className="text-blue-900">Auction</span>
            <span className="text-yellow-400 font-bold">Gallery</span>
          </h1>
        </div>
        <div className="nav-centre flex flex-row justify-center items-center gap-20 text-xl">
          <h1>Home</h1>
          <h1>Auctions</h1>
          <h1>Categories</h1>
          <h1>How to works</h1>
        </div>
        <div className="nav-end flex flex-row justify-end items-center gap-7">
          <div className="flex justify-center items-center">
            <div className="bg-[#EBF0F5] rounded-full p-3 text-[#0E2954] font-bold">
              <IoIosNotificationsOutline className="w-5 h-5" />
            </div>
            <h1 className="rounded-full relative -top-5 -left-4 px-1 py-0.5 bg-[#0E2954] text-white flex justify-center items-center">
              9
            </h1>
          </div>
          <div>
            <img src={Photo} alt="" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
