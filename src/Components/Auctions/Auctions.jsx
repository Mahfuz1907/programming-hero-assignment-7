import React, { use, useState } from "react";
import Auction from "./Auction";
import { FaRegHeart } from "react-icons/fa";
import FavouriteItems from "./FavouriteItems";

const Auctions = ({ bidsPromise }) => {
  const bids = use(bidsPromise);
  const [favourite, setFavourite] = useState([]);
  const [bidPrice, setBidPrice] = useState(0);
  const [clickedMap, setClickedMap] = useState({});

  const handleAddToFavourites = (bid) => {
    setFavourite([...favourite, bid]);
    setBidPrice(bidPrice + bid.currentBidPrice);
    setClickedMap((prev) => ({ ...prev, [bid.id]: true }));
  };

  const handleRemoveFromFavourites = (id) => {
    const itemToRemove = favourite.find((item) => item.id === id);
    setFavourite(favourite.filter((item) => item.id !== id));
    setBidPrice(bidPrice - itemToRemove.currentBidPrice);
    setClickedMap((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="bg-[#EBF0F5] px-[140px] py-24 flex flex-col gap-10">
      <div className="heading flex flex-col gap-3">
        <h1 className="text-[#0E2954] text-3xl font-medium">Active Auctions</h1>
        <p className="text-xl">Discover and bid on extraordinary items</p>
      </div>
      <div className="flex flex-row justify-between items-start gap-5">
        <div className="first flex flex-col gap-10">
          <div className="overflow-x-auto bg-white rounded-3xl">
            <table className="table">
              <thead>
                <tr className="text-xl text-black font-normal">
                  <th>Items</th>
                  <th>Current Bid</th>
                  <th>Time Left</th>
                  <th>Bid Now</th>
                </tr>
              </thead>
              <tbody>
                {bids.map((bid) => (
                  <Auction
                    key={bid.id}
                    bid={bid}
                    clicked={clickedMap[bid.id] || false} // Pass clicked state
                    handleAddToFavourites={handleAddToFavourites}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="side bg-white rounded-3xl">
          <div className="heading border-b-[1px] border-[#DCE5F3] px-7 py-5">
            <h1 className="text-3xl font-medium text-[#0E2954] flex flex-row gap-3 justify-center items-center">
              <FaRegHeart />
              <span>Favorite Items</span>
            </h1>
          </div>
          {favourite.length === 0 ? (
            <div className="body-not-clicked flex flex-col justify-center items-center gap-3 px-7 py-5 text-center">
              <h1 className="text-2xl font-medium">No favorites yet</h1>
              <p className="text-lg">
                Click the heart icon on any item to add it to your favorites
              </p>
            </div>
          ) : (
            <div className="body-clicked px-5">
              {favourite.map((fav) => (
                <FavouriteItems
                  key={fav.id}
                  fav={fav}
                  handleRemoveFromFavourites={handleRemoveFromFavourites}
                />
              ))}
            </div>
          )}
          <div className="footer text-2xl flex flex-row justify-between items-center border-t-[1px] border-[#DCE5F3] px-7 py-5">
            <h1>Total bids Amount</h1>
            <h1 className="font-medium">
              {favourite.length === 0 ? "$0000" : `$${bidPrice}`}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
