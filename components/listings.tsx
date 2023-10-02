"use client";

import React from "react";
import TimeCountdown from "./countdown";
import NFTCards from "./slider";
const Listings = () => {
  return (
    <>
      <section className=" py-12 border-b relative flex items-center px-10 flex-col md:flex-row">
        <div className="flex flex-col space-y-5 border-b-[#ffffff33] md:w-1/4 ">
          <h3 className="text-3xl font-bold" data-animation="header">
            Introduction to Zabava
            <span className="text-[#d434fe]"> NFT Listings 1.0</span>
          </h3>
          <p className="text-lg font-light" data-animation="paragraph">
            Buy our NFTs and Earn cashback on Gas Fees!
          </p>
          <TimeCountdown />
        </div>
        <div className="w-screen md:w-3/4" data-animation="reveal">
          <NFTCards />
        </div>
      </section>
    </>
  );
};

export default Listings;
