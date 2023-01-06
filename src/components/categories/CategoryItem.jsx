import React from "react";

const CategoryItem = ({ item }) => {
  const { id, type, name, picURL, order, productCount, subCategories, slug } =
    item;
  return (
    <div className="flex flex-col items-center">
      <img
        src={picURL}
        alt=""
        width={50}
        height={50}
        className="block rounded-md border border-color-getir-border"
      />
      <div className="min-h-8 mt-2 text-center font-semibold">{name}</div>
    </div>
  );
};

export default CategoryItem;
