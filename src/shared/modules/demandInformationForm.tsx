"use client";
import React from "react";
import Input from "../components/input";
import Link from "next/link";
import { motion } from "framer-motion";
import NewArr from "@/assets/icons/newarr";
import ArrowHero from "@/assets/icons/arrow-hero";
import PlannetSvg from "@/assets/svgs/plannet";
import Shadow from "@/assets/svgs/shadow";
const DemandInformationForm = () => {
  return (
    <div className=" mt-[90px] md:mt-[138px]">
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease:"easeInOut" }}
        viewport={{ once: false, amount: 0.31 }}
        className="font-poppins font-medium text-[30px] md:text-[47px] text-[#F7F7F7] text-center pb-[41px] md:pb-[60px] "
      >
        Demande d’information
      </motion.p>

      <form onSubmit={(e) => e.preventDefault()} className="Infoform z-30">
        <Input label="Nom" type="text" placeholder="Votre nom" />
        <Input label="Prenom" type="text" placeholder="Votre prénom" />
        <Input label="Email" type="email" placeholder="email@example.com" />
        <Input
          label="Nom de l’entreprise"
          type="text"
          placeholder="Le nom de votre entreprise"
        />
        <Input label="Type de votre business" type="text" placeholder="Type" />
        <Input label="Siret" type="number" placeholder="45637XXXXXXX" />
        <Input
          label="Chiffre d’affaire"
          type="number"
          placeholder="1.0000.000"
        />
        <Input label="Pays" type="text" placeholder="France" />
        <Input
          label="Numéro de téléphone"
          type="number"
          placeholder="(+33) 675 763 445"
        />
        {/* Button Here */}
        <button type="submit" className="flex cursor-pointer z-30">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex justify-start items-start "
          >
            {" "}
            <div className="border-2 border-[#42A3FF] py-[9px] pl-[26px] pr-1.5 rounded-[40px]">
              <div className="flex justify-center gap-[50px] items-center">
                <p className="text-gradiants font-poppins font-medium text-[20px] text-transparent bg-clip-text">
                  Envoyer
                </p>
                <ArrowHero />
              </div>
            </div>
          </motion.div>
        </button>
      </form>
    </div>
  );
};

export default DemandInformationForm;
