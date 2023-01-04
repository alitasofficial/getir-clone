import React, { useState, useEffect } from "react";

const headerImageUrl =
  "https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-";
/* https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg */

const Header = () => {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (current < 5) {
      /* 
        TODO 
        useEffect ile çalıştırdığım logic, 
        component render olurken url image'ı çektiği için component render olamadan setinterval çalışıp sayı kaçırıyor.
        Bu hatayı düzelt!!!
        */
      setInterval(() => {
        setCurrent((prevCurrent) => prevCurrent + 1);
        console.log(current);
      }, 2000);
    } else {
      setCurrent(1);
    }
  });

  return (
    /* 
    - Background slider olacak
    - flex olacak, sol ve sağ sectionlar olacak
        - sol sectionda title, ve text olacak
        - sağ sectionda form olacak
    */
    <div className="relative m-auto h-[500px] w-full bg-red-100">
      <div
        style={{ backgroundImage: `url(${headerImageUrl}${current}.jpg)` }}
        className="h-full w-full bg-cover bg-center duration-500"
      ></div>
    </div>
  );
};

export default Header;
