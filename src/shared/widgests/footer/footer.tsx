import Logo from "@/assets/icons/logo";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const Links = [
    {
      heading: "Usefull Links",
      items: [
        "Content",
        "How it Works",
        "Create",
        "Explore",
        "Terms & Services",
      ],
    },
    {
      heading: "Community",
      items: ["Help Center", "Partners", "Suggestions", "Blog", "Newsletters"],
    },
    { heading: "Partner", items: ["Our Partner", "Become a Partner"] },
  ];
  return (
    <div className="mt-[50px] md:mt-[97px] px-7 md:px-12 lg:px-0 ">
      <div className=" max-w-[1100px] flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-start md:items-center w-full mx-auto px-4 md:px-0 ">
        <div className="flex  flex-col gap-[39px] md:gap-[51px]">
          <Logo />
          <p className="font-poppins text-base text-[#FFFFFFB2] max-w-[312px]  ">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {/* Second Section */}
        <div className="flex flex-wrap  md:flex-row gap-9 mt-10 lg:mt-0 md:gap-[145px]">
          {Links.map((item, index: number) => (
            <div key={index}>
              <Link className="hover:text-blue-400 font-poppins transition-all" href={"#"}>
                {item.heading}
              </Link>
              <div className=" space-y-2 mt-4">
                {" "}
                {item.items?.map((item, index) => (
                  <p
                    className="text-gray-500 hover:text-gray-300 cursor-pointer transition-all font-poppins "
                    key={index}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className=" border-t border-t-[#3F3E45] w-full flex flex-col md:flex-row justify-center md:justify-between items-center py-[33px] mt-10 ">
          <div>
            <p className="text-gray-500 text-base md:text-lg">
              Copyright 2025 EvoFin. All Rights Reserved.
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 mt-5 md:mt-0 ">
            <div>
              <FaInstagram className="size-6" />
            </div>
            <div>
              <FaFacebook className="size-6" />
            </div>
            <div>
              <FaTwitter className="size-6" />
            </div>
            <div>
              <FaInstagram className="size-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
