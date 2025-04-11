import React from "react";

const Footer = () => {
  return (
    <div className="bg-white py-32">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-2xl text-center">
          <span className="text-blue-900">Auction</span>
          <span className="text-yellow-400 font-bold">Gallery</span>
        </h1>
        <div className="text-xl flex flex-row justify-center items-center gap-5">
          <h1>Bid.</h1>
          <h1>Win.</h1>
          <h1>Own.</h1>
        </div>
        <div className="text-lg flex flex-row justify-center items-center gap-10">
          <h1>Home</h1>
          <h1>Auctions</h1>
          <h1>Categories</h1>
          <h1>How to works</h1>
        </div>
        <p className="text-center">© 2025 AuctionHub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
