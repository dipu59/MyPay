"use client";

import ArrowHero from "@/assets/icons/arrow-hero";
import HeroImg from "@/assets/svgs/hero-img";
import RoboartHand from "@/assets/svgs/roboart-hand";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import PaymentSupport from "./paymentSupport";

 const Hero = () => {
  return (
    <div className="bg-gradient relative before:content-[''] before:absolute before:inset-0 before:h-[1984px] before:bg-[#000000BF] before:z-1   mx-auto w-full left-0 right-0 px-8 flex flex-col    lg:pt-0 overflow-hidden lg:pb-6 ">
      <motion.div
        className="max-w-[1450px] flex justify-center gap-10 flex-col lg:flex-row items-center w-full mt-32 md:mt-0 lg:mt-48 mx-auto z-10 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT TEXT SIDE */}
        <motion.div
          className="z-10 w-full md:w-[87%] md:mt-60 lg:mt-0 lg:w-[50%]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-poppins font-medium md:max-w-[1000px] lg:max-w-[720px] w-full text-[26px] md:mt-0 mt-7 md:text-[40px] lg:text-[40px] leading-[140%]"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradiant font-poppins text-transparent bg-clip-text">
              MyPay
            </span>{" "}
            Plateforme de gestion de paiements en ligne pour business High-Risk.
          </motion.h1>

          <motion.p
            className="text-[#E1E1E1] text-xs md:text-sm font-poppins max-w-[557px] font-medium py-[15px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Business High-Risk pris en charge : Servitia Financia et
            Investitiones , Mercator es titulorum Pecuniae mutuatae ad diem
            Mercatores cryptae valutarum...
          </motion.p>

          {/* Button Start */}
          <motion.div>
            <motion.div
              className="flex justify-start items-center"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex justify-start items-center"
              >
                {" "}
                <Link
                  href={"/"}
                  className="border-2 border-[#42A3FF] py-2 md:py-[15px] md:pl-[26px] pl-7 pr-2.5 md:pr-[15px] rounded-[40px]"
                >
                  <div className="flex justify-center gap-3.5 items-center">
                    <p className="text-gradiants font-poppins font-medium text-base md:text-[20px] text-transparent bg-clip-text">
                      COMMENCER
                    </p>
                    <ArrowHero />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SIDE */}
        <motion.div
          className="z-10 w-full relative md:w-[50%]"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroImg className="md:-mt-10" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-40 md:-right-[250px] lg:-right-8"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <RoboartHand />
          </motion.div>
        </motion.div>
      </motion.div>
      <PaymentSupport />
    </div>
  );
};

export default Hero;
