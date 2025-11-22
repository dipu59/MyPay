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
  ];
  return (
    <div className="max-w-[1435px] w-full mx-auto px-10 md:px-9  ">
      <motion.div
        className="z-10 md:mt-[190px]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0 }} // 🔥 20% scroll e animate
      >
        <h1 className="text-[#DCDCDC] font-poppins font-semibold text-[30px] text-center">
          Nos clients
        </h1>

        <motion.div
          className="flex justify-center mt-[62px] flex-wrap md:gap-[200px] gap-17 items-center"
          initial="hidden"
          whileInView="show"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: false, amount: 0.9 }} // 🔥 Icons o 20% e animate
        >
          {Icon.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ animationDelay: 0.6, scale: 1.6 }}
              className="hover:shadow-2xl  hover:shadow-blue-400  cursor-pointer"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
        {/* review section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className=" flex j  mx-auto flex-col mt-[60-px] md:mt-[103px] reviewCardGradient max-w-[1112px] w-full rounded-[20px] py-[27px]"
        >
          <div className="flex justify-center items-center">
            <Logo />
          </div>
          <div className="flex max-w-[955px] w-full mx-auto justify-between items-start">
            <StartQuote />
            <EndQuote />
          </div>
          <p className=" text-center font-poppins font-semibold leading-[180%] max-w-[955px] tracking-[2%] text-[#FFFFFF] flex justify-center w-full mx-auto text-[19px] md:text-[21px] ">
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
              <p className="font-poppins text-xl leading-8 text-white ">
                Herman Jensen
              </p>
              <p className="font-poppins text-base text-gray-400 ">CEO MyPay</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClientsReview;
