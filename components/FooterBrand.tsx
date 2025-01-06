"use client";
import React from "react";

interface FooterBrandProps {
  photo: {
    id: number;
    src: string;
    link: string;
  }[];
  title: string;
}

const FooterBrand = ({ photo, title }: FooterBrandProps) => {
  return (
    <div>
      <h1 className="font-bold text-[0.85rem] text-zinc-600">{title}</h1>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {photo.map((item) => (
          <div
            className="w-14 h-7 bg-white rounded-sm shadow-sm flex items-center justify-center cursor-pointer"
            key={item.id}
          >
            <img src={item.src} alt="brand" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterBrand;
