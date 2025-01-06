import React from "react";
import FooterList from "./FooterList";
import FooterBrand from "./FooterBrand";
import Link from "next/link";

const CustomerService = {
  title: "CUSTOMER SERVICE",
  name: [
    { id: 1, text: "Help Center", link: "https://help.shopee.com.my/portal" },
    {
      id: 2,
      text: "How to Buy",
      link: "https://help.shopee.com.my/portal/article/78540-[New-to-Shopee]-How-do-I-buy-a-product-on-Shopee%3F",
    },
    {
      id: 3,
      text: "How to Sell",
      link: "https://seller.shopee.com.my/edu/article/351",
    },
    {
      id: 4,
      text: "ShopeePay",
      link: "https://help.shopee.com.my/portal/article/78687-[ShopeePay]-What-is-ShopeePay?",
    },
    {
      id: 5,
      text: "ShopeeCoins",
      link: "https://help.shopee.com.my/portal/article/78476-[Shopee-Coins]-What-is-Shopee-Coins?",
    },
    {
      id: 6,
      text: "Shopee Guarantee",
      link: "https://shopee.com.my/m/shopee-guarantee",
    },
    {
      id: 7,
      text: "Shopee Free Shipping Program",
      link: "https://seller.shopee.com.my/edu/category?sub_cat_id=345",
    },
    {
      id: 8,
      text: "Return & Refund",
      link: "https://help.shopee.com.my/portal/article/78634-[FAQ]-About-Returns%2FRefunds-for-Buyers",
    },
    {
      id: 9,
      text: "Contact Us",
      link: "https://help.shopee.com.my/portal/article/78961-[Customer-service]-How-do-I-contact-Shopee-Customer-Service?",
    },
    {
      id: 10,
      text: "Scam Safety Tips",
      link: "https://shopee.com.my/m/online-shopping-safety-tips",
    },
  ],
};

const AboutUs = {
  title: "ABOUT US",
  name: [
    {
      id: 1,
      text: "About Shopee",
      link: "https://careers.shopee.com.my/about",
    },
    {
      id: 2,
      text: "Shopee Careers",
      link: "https://careers.shopee.com.my/jobs?country_id=6",
    },
    {
      id: 3,
      text: "Privacy Policy",
      link: "https://help.shopee.com.my/portal/article/77527",
    },
    { id: 4, text: "Shopee Mall", link: "https://shopee.com.my/mall/" },
    { id: 5, text: "Seller Centre", link: "https://seller.shopee.com.my/" },
    {
      id: 6,
      text: "Shocking Sale",
      link: "https://shopee.com.my/shocking_sale/",
    },
    {
      id: 7,
      text: "PR Newsroom",
      link: "https://sites.google.com/shopee.com/prnewsroom/home",
    },
    {
      id: 8,
      text: "Shopee Affiliate Program",
      link: "https://s.shopee.com.my/1fyf80LeSJ",
    },
    { id: 9, text: "Shopee Blog", link: "https://shopee.com.my/blog/" },
  ],
};

const Payment = {
  title: "PAYMENT",
  photo: [
    {
      id: 1,
      src: "https://down-my.img.susercontent.com/file/735e9b602704f9fcecc0fc589358d5df",
      link: "",
    },
    {
      id: 2,
      src: "https://down-my.img.susercontent.com/file/8612df33671e5fcf4e3896dddc09126f",
      link: "",
    },
    {
      id: 3,
      src: "https://down-my.img.susercontent.com/file/be96ecd1fe21e89d006f285bae7db4ee",
      link: "",
    },
    {
      id: 4,
      src: "https://down-my.img.susercontent.com/file/2b9fdf2b116defb1373ec0ca833b622e",
      link: "",
    },
    {
      id: 5,
      src: "https://down-my.img.susercontent.com/file/9c50afbccfc08119c4e14038c64cc0ab",
      link: "",
    },
    {
      id: 6,
      src: "https://down-my.img.susercontent.com/file/f3a5219c3d68c4408a9eb1095fb820b8",
      link: "",
    },
    {
      id: 7,
      src: "https://down-my.img.susercontent.com/file/1c15be6ef971c4b91e758590c2b96742",
      link: "",
    },
    {
      id: 8,
      src: "https://down-my.img.susercontent.com/file/fd3605c25740d44da2609c8a1436abc5",
      link: "",
    },
    {
      id: 9,
      src: "https://down-my.img.susercontent.com/file/35c12ef72a9150918b2f25f90b0aad44",
      link: "",
    },
    {
      id: 10,
      src: "https://down-my.img.susercontent.com/file/4033bf33861a853bcba707d544694940",
      link: "",
    },
    {
      id: 11,
      src: "https://down-my.img.susercontent.com/file/f9064fd45144e68e314586ee350b52dd",
      link: "",
    },
    {
      id: 12,
      src: "https://down-my.img.susercontent.com/file/2d504b9eaad31ffb9d9a5070a7f3207b",
      link: "",
    },
  ],
};

const Logistics = {
  title: "LOGISTICS",
  photo: [
    {
      id: 1,
      src: "https://down-my.img.susercontent.com/file/my-50009109-7701f269f47edd5ca534cf4fe491d4e8",
      link: "",
    },
    {
      id: 2,
      src: "https://down-my.img.susercontent.com/file/my-50009109-a7e0a7e8e4e8d134a5ab04cfa87393f9",
      link: "",
    },
    {
      id: 3,
      src: "https://down-my.img.susercontent.com/file/my-50009109-687ea6e71526030d09ee090fb5a2db86",
      link: "",
    },
    {
      id: 4,
      src: "https://down-my.img.susercontent.com/file/my-50009109-5ae3048586925c8f6961edd87717a588",
      link: "",
    },
    {
      id: 5,
      src: "https://down-my.img.susercontent.com/file/my-50009109-68145ac1a2f9ecebe890bb175f84525c",
      link: "",
    },
    {
      id: 6,
      src: "https://down-my.img.susercontent.com/file/my-50009109-6b71bdaaae0c6c27188b319873536d38",
      link: "",
    },
    {
      id: 7,
      src: "https://down-my.img.susercontent.com/file/my-50009109-f3c24660d0662cc1610d3bef1052c7c8",
      link: "",
    },
    {
      id: 8,
      src: "https://down-my.img.susercontent.com/file/my-50009109-7987aa3cc7027c10cb10cfefc2269844",
      link: "",
    },
    {
      id: 9,
      src: "https://down-my.img.susercontent.com/file/my-50009109-d060a464da0e31fdbf8dbb5ca6e2b9d9",
      link: "",
    },
    {
      id: 10,
      src: "https://down-my.img.susercontent.com/file/my-50009109-89cb13c3ce6e90fd3d68c079adcde008",
      link: "",
    },
    {
      id: 11,
      src: "https://down-my.img.susercontent.com/file/my-11134258-7r98o-lwm93k1cce3uf9",
      link: "",
    },
    {
      id: 12,
      src: "https://down-my.img.susercontent.com/file/my-11134258-7rask-m2bsun2czgnzd3",
      link: "",
    },
    {
      id: 13,
      src: "https://down-my.img.susercontent.com/file/my-11134258-7rasa-m2bsup9frqqnfc",
      link: "",
    },
  ],
};

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full py-10 px-20 mt-48 h-full bg-zinc-50">
      <div className="flex gap-24 justify-center">
        <FooterList {...CustomerService} />
        <FooterList {...AboutUs} />
        <div className="flex flex-col gap-2 ml-10">
          <div className="flex flex-col gap-5">
            <FooterBrand {...Payment} />
            <FooterBrand {...Logistics} />
          </div>
        </div>
        <div className="flex flex-col gap-2 ml-10">
          <h1 className="font-bold text-[0.85rem] text-zinc-600 mb-3 ">
            FOLLOW US
          </h1>
          <div className="flex flex-col gap-3 text-[0.75rem] text-zinc-600">
            <Link
              href="https://www.facebook.com/ShopeeMY"
              className="flex gap-2 items-center hover:text-[#EE4D2D]"
            >
              <img
                src="https://down-my.img.susercontent.com/file/c11c0702937809e3f9d6a9bb72d56395"
                alt="payment"
                className="w-4 h-4"
              />
              <h1>Facebook</h1>
            </Link>
            <Link
              href="https://www.instagram.com/Shopee_MY/"
              className="flex gap-2 items-center hover:text-[#EE4D2D]"
            >
              <img
                src="https://down-my.img.susercontent.com/file/9d986b85018e2dcbe2dec893621657b3"
                alt="payment"
                className="w-4 h-4"
              />
              <h1>Instagram</h1>
            </Link>
            <Link
              href="https://shopee.com.my/shopee_mamak"
              className="flex gap-2 items-center hover:text-[#EE4D2D]"
            >
              <img
                src="https://down-my.img.susercontent.com/file/880e3d004694ae96b8207120dca86daa"
                alt="payment"
                className="w-4 h-4"
              />
              <h1>Shopee Mamak</h1>
            </Link>
            <Link
              href="https://www.linkedin.com/company/shopee"
              className="flex gap-2 items-center hover:text-[#EE4D2D]"
            >
              <img
                src="https://down-my.img.susercontent.com/file/f2cffbdd4e671db0c283c481130ce8e3"
                alt="payment"
                className="w-4 h-4"
              />
              <h1>LinkedIn</h1>
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-full border-zinc-300 mt-10 max-w-[60rem]" />
      <div className="flex flex-col items-start mt-10 max-w-[60rem] text-sm w-full text-zinc-500">
        <h1>Copyright 2025. Shopee Mobile Malaysia Sdn. Bhd. All Rights Reserved.</h1>
        <h1>Country & Region: Singapore | Malaysia | Thailand | Taiwan | Indonesia | Vietnam | Philippines | Brazil | Mexico | Pakistan | Chile | Colombia</h1>
      </div>
    </div>
  );
};

export default Footer;
