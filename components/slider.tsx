"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Card from "./card";
import { itemAPI } from "@/api";
import { NftCollection } from "@/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function NFTCards() {
  const [allNfts, setNfts] = useState<NftCollection[]>();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const fetctNfts = () => {
    itemAPI
      .getNfts("piratenation", 50)
      .then((res) => {
        setNfts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetctNfts();
  }, []);
  return (
    <div className="px-3 msm:px-7">
      <Slider {...settings}>
        {allNfts
          ? allNfts.map((item, i) => (
              <Card
                name={item.name}
                image_url={item.image_url}
                collection={item.collection}
                contract={item.contract}
                identifier={item.identifier}
              />
            ))
          : ""}
      </Slider>
    </div>
  );
}
