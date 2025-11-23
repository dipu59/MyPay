"use client"
import CbIcon from "@/assets/icons/cbIcon";
import cbIcon from "@/assets/icons/cbIcon";
import DoneIcon from "@/assets/icons/done";
import MasterCardIcon from "@/assets/icons/master-card";
import MasterCardLogo from "@/assets/icons/masterCardlogo";
import VisaIcon from "@/assets/icons/visa";
import VisaIcon2 from "@/assets/icons/visa2";
import Card2Bg from "@/assets/svgs/card2";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Choisissez = () => {
  const businessArr = [
    "Transactions e-commerce",
    "Services basés sur l'abonnement",
    "Dons en ligne pour des associations à but non lucratif",
    "Paiements de réservations et de réservations",
    "Vente de produits numériques",
  ];
  const SURMESURE = [
    "Transactions Sécurisées",
    "Support Multi-Devises",
    "Protection contre la Fraude",
    "Paiement Personnalisable",
    "Interface Adaptée aux Mobiles",
    "Transactions Sécurisées",
    "Support Multi-Devises",
    "Protection contre la Fraude",
    "Paiement Personnalisable",
    "Interface Adaptée aux Mobiles",
  ];
  return (
    <div className="mb-6 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="font-poppins font-medium text-base pt-7 lg:text-[47px] md:text-3xl text-white mt-4 text-center w-[350px] mx-auto md:w-fit"
      >
        Choisissez votre pack & Abonnez-vous
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="font-poppins text-xs  md:text-base px-2  lg:text-lg font-medium text-[#E1E1E1] mt-4 lg:mt-2 md:text-center mx-auto w-[260px] md:w-fit"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </motion.p>

      <div className="flex px-2 md:px-5 md:px mt-[30px] md:mt-[49px]   lg:px-[46px] flex-col lg:flex-row justify-center ">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.21 }}
          className="rounded-[10px] max-w-[800px] w-full pt-[25px]  backdrop-blur-[100px] border-2 border-[#75F2F6]  bg-[#F1F1FF]/20 overflow-hidden  z-20"
        >
          <div className="flex flex-col justify-center items-center">
            <div>
              <button className="standerdGradient text-lg font-semibold leading-[140%] text-black rounded-[40px] py-3.5 cursor-pointer px-[38px]">
                Standerd
              </button>
            </div>
            <div className="flex md:mt-[53px] mt-[30px] justify-center items-center gap-[30px]">
              <CbIcon />
              <MasterCardLogo />
              <VisaIcon2 />
            </div>
            <p className="font-poppins font-semibold text-[50px] md:text-[70px] numberGradient text-transparent bg-clip-text ">
              5% + 0.25 €
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            transition={{ staggerChildren: 1 }}
            viewport={{ once: false, amount: 0.9 }}
            className=""
          >
            <div className="flex flex-col gap-5 md:gap-[31px] pl-10 md:pl-[54px]">
              <p className="font-poppins text-base md:text-[19px] font-bold text-transparent bg-clip-text businessGrad mt-2 md:mt-3">
                Business Acceptés :
              </p>
              {businessArr.map((items, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  viewport={{ once: false, amount: 0.21 }}
                  key={index}
                  className="flex gap-3"
                >
                  <DoneIcon />
                  <p className="font-medium text-base md:text-[19px] font-poppins text-[#F7F7F7] ">
                    {items}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <button className="bg-[#07111E] font-poppins font-medium text-[20px] md:text-[28px] py-4 md:py-7 w-full mt-10 md:mt-[55px] ">
            Démarrer
          </button>
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            delay: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.24 }}
          className="bg-[url(https://res.cloudinary.com/durcctmhu/image/upload/v1763741220/card2_zdxull.png)] mx-auto  max-w-[560px] w-full   lg:-ml-4 lg:-mt-3 mt-7 flex flex-col  pb-5 md:pb-[95px] overflow-hidden  pt-8 z-10 md:h-[756px] h-[650px] rounded-xl  "
        >
          <div className="flex justify-center items-center">
            <button className="standerdGradient text-lg font-semibold leading-[140%] text-black rounded-[40px] py-3.5 cursor-pointer px-[30px]">
              SUR MESURE
            </button>
          </div>
          <p className="card2Gradiant text-center text-transparent bg-clip-text font-poppins font-bold text-base md:text-[19px] py-[22px] md:py-8">
            Dix fonctionnalités essentielles
          </p>
          <motion.div
            initial="hidden"
            whileInView="show"
            transition={{ staggerChildren: 0.7 }}
            viewport={{ once: false, amount: 0.9 }}
            className="flex flex-col gap-6 md:gap-[25px] justify-start  pl-10 md:pl-[60px]"
          >
            {SURMESURE.map((items, index) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, type: "spring" }}
                viewport={{ once: false, amount: 0.31 }}
                key={index}
                className="flex gap-3"
              >
                <DoneIcon />
                <p className="font-medium text-base md:text-[19px] font-poppins text-[#F7F7F7] ">
                  {items}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Choisissez;
