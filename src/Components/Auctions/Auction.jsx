import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Auction = ({ bid, handleAddToFavourites, clicked }) => {
  const handleClick = () => {
    handleAddToFavourites(bid);
    toast("Wow so easy!", {
      closeOnClick: true,
      autoClose: 3000,
    });
  };

  return (
    <tr>
      <td className="flex flex-row justify-start items-start gap-5">
        <img src={bid.image} alt="" className="w-24 h-24 object-cover" />
        <h1 className="text-[#0E2954] text-lg">{bid.title}</h1>
      </td>
      <td className="text-[#0E2954] font-medium text-lg text-center">
        ${bid.currentBidPrice}
      </td>
      <td className="text-[#0E2954] font-medium text-lg text-center">
        {bid.timeLeft} Days left
      </td>
      <td className="text-[#0E2954] font-medium text-lg px-10">
        <button className="" onClick={handleClick} disabled={clicked}>
          {clicked ? (
            <FaHeart className="text-red-500 cursor-not-allowed" />
          ) : (
            <FaRegHeart className="cursor-pointer" />
          )}
        </button>
        <ToastContainer closeOnClick={true} autoClose={3000} />
      </td>
    </tr>
  );
};

export default Auction;
