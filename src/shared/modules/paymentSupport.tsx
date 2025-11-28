"use client";

import { motion } from "motion/react";
import VisaIcon from "@/assets/icons/visa";
import MasterCardIcon from "@/assets/icons/master-card";
import PaypalIcon from "@/assets/icons/paypal";
import GooglePayIcon from "@/assets/icons/g-pay";
import PayIcon from "@/assets/icons/pay";

const PaymentSupport = () => {
  const icons = [
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
    <div className="z-10 mt-52 md:mt-[190px] pb-10 lg:pb-0 overflow-hidden">
      <h1 className="text-[#DCDCDC] font-poppins font-semibold md:text-[30px] text-[24px] text-center">
        Nos supports de paiement
      </h1>

      <div className="relative mt-[62px] w-full overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // ✨ বেশি দিলে আরো smooth slow হবে
          }}
        >
          {/* First row */}
          <div className="flex gap-20 items-center">
            {icons.map((icon, index) => (
              <div key={index} className="min-w-40 flex justify-center">
                {icon}
              </div>
            ))}
          </div>

          {/* Duplicate row for seamless loop */}
          <div className="flex gap-20 items-center">
            {icons.map((icon, index) => (
              <div
                key={`dup-${index}`}
                className="min-w-40 flex justify-center"
              >
                {icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentSupport;
