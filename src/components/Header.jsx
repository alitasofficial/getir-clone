import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { RiArrowDownSLine } from "react-icons/ri";

import GetirHeader from "../assets/images/GetirHeader.svg";

const images = [
  {
    url: "https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg",
    alt: "getir",
  },
  {
    url: "https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg",
    alt: "getir",
  },
  {
    url: "https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg",
    alt: "getir",
  },
  {
    url: "https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg",
    alt: "getir",
  },
];

const Header = () => {
  const [index, setIndex] = useState(1);
  const [imageUrl, setImageUrl] = useState(images[0].url);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageUrl(images[index].url);
      setIndex((index + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index, imageUrl]);

  return (
    /* 
    TODO
    - img tagin dönen resimler değişirken sağdan sola kaymalı slide effect ekle

    + Background slider olacak
    - flex olacak, sol ve sağ sectionlar olacak
        - sol sectionda title, ve text olacak
        - sağ sectionda form olacak
    */

    <section className="relative mx-auto h-[500px] w-full">
      <img className="h-full w-full object-cover" src={imageUrl} alt="getir" />

      <div className="absolute top-0 flex h-full w-full items-center justify-center bg-gradient-to-r from-color-getir-primary">
        <div className="wrapper container flex h-full items-center justify-between p-4">
          {/* Content */}
          <div>
            {/* Left Pane */}
            <img src={GetirHeader} alt="getir header logo" />
            <h1 className="mt-10 flex flex-col text-4xl font-semibold text-color-getir-white">
              At your door in
              <span>minutes</span>
            </h1>
          </div>
          <div>
            {/* Right Pane */}
            <div className="rounded-md bg-color-getir-gray-background p-6">
              <h3 className="mb-4 text-center font-bold text-color-getir-navbar">
                Login or register
              </h3>
              <form className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <div className="flex items-center gap-3 rounded-md border-2 border-color-getir-border bg-color-getir-gray-background p-4">
                    <select
                      name=""
                      id=""
                      className="appearance-none bg-color-getir-gray-background"
                    >
                      <option value="+90">🇹🇷 +90</option>
                    </select>
                    <IconContext.Provider
                      value={{
                        color: "#4C3398",
                        className:
                          "cursor-pointer font-bold text-color-getir-navbar",
                      }}
                    >
                      <RiArrowDownSLine />
                    </IconContext.Provider>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Mobile Phone"
                      className=" h-full w-full transform rounded-md border-2 border-color-getir-border bg-inherit px-3 outline-none transition-colors duration-100 placeholder:font-semibold hover:border-color-getir-navbar focus:border-color-getir-navbar"
                    />
                  </div>
                </div>
                <button className="rounded-md bg-color-getir-brand-yellow py-4 font-bold text-color-getir-navbar">
                  Continue with phone number
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div className="relative m-auto h-[500px] w-full">
    //   <div
    //     style={{ backgroundImage: `url(${imageUrl})` }}
    //     className="h-full w-full translate-x-full bg-cover bg-center transition-all duration-500 ease-out"
    //   >
    //     <div className="h-full ">

    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
