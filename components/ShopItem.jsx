import Image from "next/image";
import React from "react";

function ShopItem({ title, desc, imgsrc, price = null || "", buttonTitle }) {
  return (
    <div className="border border-black flex justify-center items-center">
      <div className="relative h-72 w-56">
        <Image
          alt="Shop Item"
          src={imgsrc}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 px-3 py-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {price && <h3>{price}</h3>}
        <p>{desc}</p>
        <button className="bg-[#ffcb67] px-8 py-3 rounded-full">{buttonTitle}</button>
      </div>
    </div>
  );
}

export default ShopItem;
