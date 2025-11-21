"use client";

import { motion } from "framer-motion";
import VisaIcon from "@/assets/icons/visa";
import MasterCardIcon from "@/assets/icons/master-card";
import PaypalIcon from "@/assets/icons/paypal";
import GooglePayIcon from "@/assets/icons/g-pay";
import PayIcon from "@/assets/icons/pay";



const PaymentSupport = () => {
  const Icon = [
    <VisaIcon />,
    <MasterCardIcon />,
    <PaypalIcon />,
    <PayIcon />,
    <GooglePayIcon />,]
  return (
    <motion.div
      className="z-10 md:mt-[190px]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 1 }} // 🔥 20% scroll e animate
    >
      <h1 className="text-[#DCDCDC] font-poppins font-semibold text-[30px] text-center">
        Nos supports de paiement
      </h1>

      <motion.div
        className="flex justify-between mt-[62px] flex-wrap md:gap-[200px] gap-17 items-center"
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
            transition={{ duration: 0.6,  ease: "easeOut" }}
            whileHover={{animationDelay: 0.6, scale: 1.6, }}
            className="hover:shadow-2xl  hover:shadow-blue-400  cursor-pointer"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PaymentSupport;
