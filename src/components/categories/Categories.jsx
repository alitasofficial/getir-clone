import React from "react";
import CategoryItem from "./CategoryItem";

import { categoriesData } from "../../data/categoriesData";
import SectionTitle from "../SectionTitle";

const Categories = () => {
  return (
    <section className="wrapper container py-6">
      <SectionTitle name="Categories" />
      <section className="mt-6 grid grid-cols-10  gap-y-10">
        {categoriesData.map((item, index) => (
          <div key={index}>
            <CategoryItem item={item} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Categories;
