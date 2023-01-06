import React from "react";
import DownloadGetir from "./DownloadGetir";
import SectionTitle from "../SectionTitle";
import Info from "./Info";

const Promotions = () => {
  return (
    <section className=" bg-color-getir-gray-background shadow-inner">
      <div className="wrapper pt-8 pb-16">
        <SectionTitle name="Promotions" />
        <DownloadGetir />
        <Info />
      </div>
    </section>
  );
};

export default Promotions;
