import React from "react";

const ShippingBanner = () => {
  return (
    <div className="bg-primary py-2 text-gray-200 flex justify-center items-center gap-4">
      <span className="text-sm">
        Click and Collect is now available at Hong Kong stores. Enjoy
        complimentary shipping on orders over HK$400
      </span>
      <span className="text-xl">+</span>
    </div>
  );
};

export default ShippingBanner;
