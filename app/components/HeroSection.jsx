import React from "react";
import HeroImage from "@/public/assets/aesop_.png";

const HeroSection = () => {
  const style = {
    backgroundImage: `url(${HeroImage.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <section
      style={style}
      className="px-8 flex justify-start items-start gap-20 pt-28 pb-40"
    >
      <div className="text-white font-semibold font-serif">
        <span className="text-3xl text-gray-200">Aesop</span>{" "}
        <span> &#174;</span>
      </div>

      <div className="max-w-md text-gray-200">
        <p className="text-sm font-semibold">Doorways to the undiscovered</p>
        <h3 className="text-3xl my-6">
          Othertopias: a collection of unorthodox fragrances
        </h3>
        <p className="font-medium">
          Step inside six fragrant worlds that transcend our immediate
          perception—vivid and distinctive.
        </p>
        <button className="mt-9 p-4 border-white border-[1px] flex justify-between items-center gap-24">
          <span>Discover the fragrance</span>
          <span>&#8594;</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
