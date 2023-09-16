import React from "react";
import data from "@/data/product_slide1.js";

const Slider = ({ children }) => {
  const productList = data.map((product) => {
    return (
      <div className="min-w-[450px] px-6 flex justify-center items-center flex-col text-sm text-primary">
        <img src={product.image.src} alt={product.name} />
        <p className="capitalize font-semibold mb-4">{product.name}</p>
        <p className="capitalize">{product.category}</p>
      </div>
    );
  });
  return (
    <section className="max-w-[1350px]  mx-auto my-32">
      <div className="flex justify-start items-center">
        <div className="min-w-[450px]">{children}</div>
        {productList}
      </div>
    </section>
  );
};

export default Slider;
