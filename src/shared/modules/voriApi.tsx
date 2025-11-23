"use client";
import WooCard from "@/assets/svgs/wooCommerceGroup";
import Link from "next/link";
import { motion } from "framer-motion";
import NewArr from "@/assets/icons/newarr";
const VoriApi = () => {
  return (
    <div className="flex mt-20 pb-5 md:mt-[122px] flex-col lg:flex-row px-4 md:px-0 justify-center items-center gap-3 md:gap-[103] overflow-hidden">
      {/* left */}
      <div>
        <motion.p
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: true, amount:0 }}
          className="max-w-[613px] w-full font-poppins font-medium text-[25px] md:text-3xl lg:text-[40px] text-[#E1E1E1]"
        >
          Nous disposons d’une api solide fait pour s’intégrer au mieux à votre
          environnement.
        </motion.p>
        {/* Button */}
        <motion.div
          className="md:flex hidden justify-start items-center mt-10 md:mt-[50px]"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex w-full md:w-fit justify-start items-center"
          >
            {" "}
            <Link
              href={"#"}
              className="border-2 border-[#42A3FF] py-1 md:py-[9px] pl-[26px] pr-1.5 rounded-xl w-full md:rounded-[40px]"
            >
              <div className="flex justify-center gap-4 md:gap-[50px] items-center">
                <p className="text-gradiants font-poppins font-medium text-[20px] text-transparent bg-clip-text">
                  VOIR l’API
                </p>
                <NewArr className=" size-10 md:size-18" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      {/* Right */}
      <motion.div
        initial={{ x: 110, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0 }}
        className="mt-10 md:mt-0"
      >
        <WooCard className="md:size-fit size-72" />
      </motion.div>
      {/* Responsive */}
      {/* Button */}
      <motion.div
        className="flex md:hidden w-full mb-2 justify-start items-center mt-10 md:mt-[50px]"
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0 }}
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex w-full md:w-fit justify-start items-center"
        >
          {" "}
          <Link
            href={"#"}
            className="border-2 border-[#42A3FF] py-1 md:py-[9px] pl-[26px] pr-1.5 rounded-xl w-full md:rounded-[40px]"
          >
            <div className="flex justify-center gap-4 md:gap-[50px] items-center">
              <p className="text-gradiants font-poppins font-medium text-[20px] text-transparent bg-clip-text">
                VOIR l’API
              </p>
              <NewArr className=" size-10 " />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VoriApi;
