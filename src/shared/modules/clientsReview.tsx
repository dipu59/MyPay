"use client";

import { motion } from "framer-motion";
import VisaIcon from "@/assets/icons/visa";
import MasterCardIcon from "@/assets/icons/master-card";
import PaypalIcon from "@/assets/icons/paypal";
import GooglePayIcon from "@/assets/icons/g-pay";
import PayIcon from "@/assets/icons/pay";
import Logo from "@/assets/icons/logo";
import StartQuote from "@/assets/icons/quotestart";
import EndQuote from "@/assets/icons/endQuote";
import AvarterCard from "@/assets/svgs/avarter";

const ClientsReview = () => {
  const Icon = [
    <VisaIcon />,
    <MasterCardIcon />,
    <PaypalIcon />,
    <PayIcon />,
    <GooglePayIcon />,
    <VisaIcon />,
    <MasterCardIcon />,
    <PaypalIcon />,
    <PayIcon />,
    <GooglePayIcon />,
  ];
  return (
    <div className="max-w-[1435px] w-full mt-16 mx-auto px-3 md:px-9  ">
      <motion.div
        className="z-10 md:mt-[190px]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0 }} // 🔥 20% scroll e animate
      >
        <h1 className="text-[#DCDCDC] font-poppins font-semibold text-[30px] text-center">
          Nos clients
        </h1>

        <motion.div
          className="flex w-max py-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60, // ✨ বেশি দিলে আরো smooth slow হবে
          }}
        >
          {/* First row */}
          <div className="flex gap-20 items-center">
            {Icon.map((icon, index) => (
              <div key={index} className="min-w-40 flex justify-center">
                {icon}
              </div>
            ))}
          </div>

          {/* Duplicate row for seamless loop */}
          <div className="flex gap-20 items-center">
            {Icon.map((icon, index) => (
              <div
                key={`dup-${index}`}
                className="min-w-40 flex justify-center"
              >
                {icon}
              </div>
            ))}
          </div>
        </motion.div>
        {/* review section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className=" flex mx-auto flex-col mt-[60-px] reviewCardGradient max-w-[1112px] w-full rounded-[20px] py-[27px]"
        >
          <div className="  flex justify-center items-center">
            <Logo className="md:size-14  size-10" />
          </div>
          <div className="flex px-3 lg:px-0 max-w-[955px] w-full mx-auto justify-between items-start">
            <StartQuote className="lg:size-9 size-7" />
            <EndQuote className="lg:size-9 size-7" />
          </div>
          <p className=" text-center font-poppins font-semibold leading-[180%] max-w-[955px] tracking-[2%] text-[#FFFFFF] flex justify-center w-full mx-auto text-[13px] md:text-sm px-1 mt-3 md:mt-0 md:px-0 lg:text-[19px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className=" mt-10 flex justify-center items-center gap-5 md:mt-[53px]">
            <div>
              <AvarterCard />
            </div>
            <div>
              <p className="font-poppins text-base lg:text-xl leading-8 text-white ">
                Herman Jensen
              </p>
              <p className="font-poppins text-xs md:text-sm lg:text-base text-gray-400 ">
                CEO MyPay
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClientsReview;
