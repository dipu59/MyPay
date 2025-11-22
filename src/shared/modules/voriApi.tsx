"use client";
import WooCard from "@/assets/svgs/wooCommerceGroup";
import Link from "next/link";
import { motion } from "framer-motion";
import NewArr from "@/assets/icons/newarr";
const VoriApi = () => {
  return (
    <div className="flex mt-20 md:mt-[122px] flex-col md:flex-row px-4 md:px-0 justify-center items-center gap-3 md:gap-[103] overflow-hidden">
      {/* left */}
      <div>
        <motion.p
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
          className="max-w-[613px] w-full font-poppins font-medium text-[30px] md:text-[40px] text-[#E1E1E1]"
        >
          Nous disposons d’une api solide fait pour s’intégrer au mieux à votre
          environnement.
        </motion.p>
        {/* Button */}
        <motion.div
          className="flex justify-start items-center mt-10 md:mt-[50px]"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex justify-start items-center"
          >
            {" "}
            <Link
              href={"#"}
              className="border-2 border-[#42A3FF] py-[9px] pl-[26px] pr-1.5 rounded-[40px]"
            >
              <div className="flex justify-center gap-[50px] items-center">
                <p className="text-gradiants font-poppins font-medium text-[20px] text-transparent bg-clip-text">
                  VOIR l’API
                </p>
                <NewArr />
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
      >
        <WooCard />
      </motion.div>
    </div>
  );
};

export default VoriApi;
