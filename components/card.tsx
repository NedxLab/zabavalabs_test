"use client";
import React, { useEffect, useRef, useState } from "react";
import { NftCollection } from "@/types";
import { itemAPI } from "@/api";

const Card = ({
  name,
  image_url,
  collection,
  identifier,
  contract,
}: NftCollection) => {
  return (
    <>
      {/* <a href={`/${identifier}:${contract}`} className="  text-white "> */}
      <div className="flex items-center justify-center">
        <div className=" w-72 bg-[#150e28] p-5 rounded-md shadow-xl">
          <img src={image_url} alt="NFT collection" />
          <h2 className="text-md font-bold mt-3">{name}</h2>

          <div className="flex justify-between items-center text-sm">
            <p className="text-cyan-400 font-bold">{identifier}</p>
          </div>
          <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
          <div className="flex items-center">
            <img
              src={image_url}
              alt="Collection"
              className="h-8 w-8 border border-white rounded-full mr-2"
            />
            <p className="text-gray-400 text-[12px]">
              collection from{" "}
              <a
                href={`https://opensea.io/collection/${collection}`}
                target="_black"
                rel="no-opener"
                className="text-white font-bold"
              >
                {collection}
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* </a> */}
    </>
  );
};

export default Card;
