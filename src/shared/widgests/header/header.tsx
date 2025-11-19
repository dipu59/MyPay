import ArowHeader from "@/assets/icons/arrow-header";
import Logo from "@/assets/icons/logo";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1435px] mx-auto px-4 absolute md:px-8 top-0 left-0 right-0 pt-8 md:pt-14 flex justify-between items-center z-10">
      <div>
        <Logo className="md:w-auto md:h-auto w-10" />
      </div>
      <div className="flex gap-2">
        <Link href={"/"} className="flex gap-2 justify-center items-center">
          <ArowHeader className="md:w-auto md:h-auto w-10" />
          <span className="font-inter font-medium text-base md:text-[22px]">
            Espace client
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
