import { Suspense } from "react";
import "./App.css";
import Auctions from "./Components/Auctions/Auctions";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  const bidsPromise = fetch("../public/bids.json").then((res) => res.json());

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center p-20">
            <span className="loading loading-spinner loading-xl text-green-400"></span>
          </div>
        }
      >
        <Auctions bidsPromise={bidsPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
