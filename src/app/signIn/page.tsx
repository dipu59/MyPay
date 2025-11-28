"use client";
import FacebookIcon from "@/assets/icons/facebook-icon";
import GoogleIcon from "@/assets/icons/google-icon";
import SiginMan from "@/assets/svgs/sinin-svg";
import { motion } from "motion/react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegQuestionCircle } from "react-icons/fa";

type UserInfo = {
  UserName: string;
  email: string;
  password: string;
};
const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();

  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-gradient relative before:content-[''] before:absolute before:inset-0 before:h-[1984px] before:bg-[#000000BF] before:z-1   mx-auto w-full left-0 right-0 px-8 flex flex-col    lg:pt-0 overflow-hidden lg:pb-6 ">
      <div className="flex  flex-col justify-center items-center mt-40 z-30 ">
        <div className="flex flex-col md:flex-row md:gap-[94px] p-2 max-w-[1130px] formGradient w-full mx-auto max-h-auto h-full mt-[39px] mb-32">
          {/* Left Side */}
            <div className="bg-gradient relative before:content-[''] before:absolute before:inset-0 before:h-auto md:h-[664px]! h-[464px]! before:bg-[#00000099] border border-[#000000] before:z-1 max-w-[490px] w-full left-0 right-0  flex flex-col justify-center items-center     ">
              <SiginMan className="z-30 md:max-w-[366px] max-w-[276px] " />
            </div>
        
          {/* Right Side */}
          <div className="text-black z-40 ">
            <h1 className="md:text-[30px] mt-[45px] text-[23px] font-sans tracking-[-1%] text-[#2A3547] font-semibold">
              Bienvenue sur MyPay
            </h1>
            <p className=" font-sans text-sm md:text-base tracking-[-2%] text-[#2A3547] md:mt-1">
              Votre admin panel
            </p>
            <div className="flex md:gap-4 gap-3 md:my-8 my-6">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1 }}
                className="flex items-center gap-1 border border-[#EAEFF4] px-5 md:px-[30px] py-2.5 md:py-3 cursor-pointer  bg-[#FFFFFF] hover:shadow"
              >
                <GoogleIcon />
                <p className=" font-sans font-semibold md:text-sm text-xs tracking-[-1%] text-[#2A3547]">
                  Créer avec Google
                </p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1 }}
                className="flex items-center gap-1 border border-[#EAEFF4] px-5 md:px-[30px] py-2.5 md:py-3 cursor-pointer  bg-[#FFFFFF] hover:shadow"
              >
                <FacebookIcon />
                <p className=" font-sans font-semibold md:text-sm text-xs tracking-[-1%] text-[#2A3547]">
                  Créer avec Facebook
                </p>
              </motion.button>
            </div>
            {/* Horijontal Line Drow */}
            <div className="flex gap-2 items-center md:mb-8 mb-6">
              <div className="h-px w-1/2 bg-[#EAEFF4]"></div>
              <p className=" font-sans text-[#5A6A85] text-xs md:text-sm tracking-[-2%] ">
                ou{" "}
              </p>
              <div className="h-px w-1/2 bg-[#EAEFF4]"></div>
            </div>
            {/* Form Start */}
            <form
              className="flex flex-col gap-6 md:gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <label className="font-sans text-xs md:text-sm font-medium md:font-semibold tracking-[-1%] text-[#2A3547]">
                  Nom d’utilisateur
                </label>
                <input
                  className="bg-white border border-[#EAEFF4] md:h-12 h-9 w-full outline-none p-2 mt-1"
                  type="text"
                  {...register("UserName", {
                    required: "UserName is required",
                  })}
                />
                {errors.UserName && (
                  <p className="flex gap-2 items-center text-red-500 text-xs md:text-sm">
                    {errors.UserName.message}
                    <FaRegQuestionCircle />
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-sans text-xs md:text-sm font-medium md:font-semibold tracking-[-1%] text-[#2A3547]">
                  Email
                </label>
                <input
                  className="bg-white border border-[#EAEFF4] md:h-12 h-9 w-full outline-none p-2 mt-1"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid Email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="flex gap-2 items-center text-red-500 text-xs md:text-sm">
                    {errors.email.message}
                    <FaRegQuestionCircle />
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-sans text-xs md:text-sm font-medium md:font-semibold tracking-[-1%] text-[#2A3547]">
                  Mot de passe
                </label>
                <input
                  className="bg-white border border-[#EAEFF4] md:h-12 h-9 w-full outline-none p-2 mt-1"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="flex gap-2 items-center text-red-500 text-xs md:text-sm">
                    {errors.password.message}
                    <FaRegQuestionCircle />
                  </p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1 }}
                className="bg-[#5D87FF] text-[#FFFFFF] font-medium md:font-semibold font-sans w-full min-h-[19px] h-full py-2 md:py-3.5 cursor-pointer mb-3    "
                type="submit"
              >
                Créer un compte
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
