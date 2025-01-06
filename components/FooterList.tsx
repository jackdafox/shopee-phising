"use client";
import Link from "next/link";
import React from "react";

interface FooterListProps {
  name: {
    id: number;
    text: string;
    link: string;
  }[];
  title: string;
}

const FooterList = ({ name, title }: FooterListProps) => {
  return (
    <div className="flex flex-col items-start gap-2 text-[0.75rem] text-zinc-500">
      <h1 className="font-bold text-[0.85rem] text-zinc-600 mb-3">{title}</h1>
      {name.map((item) => (
        <Link href={item.link} key={item.id} className="hover:text-[#EE4D2D]">
          <h1>{item.text}</h1>
        </Link>
      ))}
    </div>
  );
};

export default FooterList;
