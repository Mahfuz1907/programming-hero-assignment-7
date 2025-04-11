import React from "react";
import { IoIosClose } from "react-icons/io";

const FavouriteItems = ({ fav, handleRemoveFromFavourites }) => {
  console.log(fav);
  const handleCrossButton = () => {
    console.log(`Cross Button Clicked for id: ${fav.id}`);
    handleRemoveFromFavourites(fav.id);
  };

  return (
    <div className="flex flex-row justify-between items-start gap-5 py-5 border-t-[1px] border-b-[1px] border-t-[#DCE5F3] border-b-[#DCE5F3]">
      <div className="flex flex-row gap-5 justify-start items-start">
        <img src={fav.image} alt="" className="w-24 h-24 object-cover" />
        <div className="content flex flex-col gap-5 justify-start items-start">
          <h1 className="text-[#0E2954]">{fav.title}</h1>
          <div className="text-[#0E2954] flex flex-row justify-start items-start gap-7">
            <h1>${fav.currentBidPrice}</h1>
            <h1>Bids: {fav.bidsCount}</h1>
          </div>
        </div>
      </div>
      <button className="cursor-pointer" onClick={handleCrossButton}>
        <IoIosClose className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FavouriteItems;
