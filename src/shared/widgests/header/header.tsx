"use client"
import ArowHeader from "@/assets/icons/arrow-header";
import Logo from "@/assets/icons/logo";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1435px] mx-auto px-4 absolute md:px-8 top-0 left-0 right-0 pt-8 md:pt-14 flex justify-between items-center z-10 overflow-hidden">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1, rotate: 360 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      >
        <Logo className="md:w-auto md:h-auto w-10" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        whileDrag={{ scale: 2.1 }}
        className="flex gap-2   z-20"
      >
        <Link
          href={"/"}
          className="flex gap-2 justify-center items-center hover:ring-1 px-4 py-2 mb-2 rounded-2xl hover:bg-[#00262b] group "
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, rotate: 360 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          >
            <ArowHeader className="md:w-auto md:h-auto w-10 group-hover:rotate-360 transition-all duration-500" />
          </motion.div>
          <motion.span
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1, rotate: 360 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="font-inter font-medium text-base md:text-[22px]"
          >
            Espace client
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;
