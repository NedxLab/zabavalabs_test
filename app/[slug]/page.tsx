"use client";
import React, { useEffect, useRef, useState } from "react";
import { NftCollection } from "@/types";
import { itemAPI } from "@/api";

export default function Page({ params }: { params: { slug: string } }) {
  const [nftData, setNftData] = useState<NftCollection[]>();
  const id = params.slug.slice(0, 4);
  const contract = params.slug.slice(7);
  console.log(id, contract);
  const fetctNftData = () => {
    itemAPI
      .getNftData(contract, id)
      .then((res) => {
        setNftData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(nftData);
  useEffect(() => {
    fetctNftData();
  }, []);
  return <div>My Post: {params.slug}</div>;
}
