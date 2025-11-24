import ArrowHero from "@/assets/icons/arrow-hero";
import BackArrow from "@/assets/icons/back-arrow";
import LocationIcon from "@/assets/icons/location-Icon";
import MessageIcon from "@/assets/icons/message-icon";
import PhoneIcon from "@/assets/icons/phone-Icon";
import Link from "next/link";
import React from "react";
import { FaPhone, FaPhoneSlash } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="bg-gradient relative before:content-[''] before:absolute before:inset-0 before:h-[1984px] before:bg-[#000000BF] before:z-1   mx-auto w-full left-0 right-0 px-8 flex flex-col    lg:pt-0 overflow-hidden lg:pb-6 ">
      <div className="flex  flex-col justify-center items-center mt-40 z-30">
        {/* Heading And Link */}
        <div className="flex justify-between items-center max-w-[1130px] w-full mx-auto">
          <Link
            href={"/"}
            className="active:scale-95 hover:scale-110 rounded-sm transition-all "
          >
            <div>
              <BackArrow />
            </div>
          </Link>
          <div>
            <p className=" font-poppins font-medium md:text-[47px] text-[25px] text-[#FFFFFF] text-center z-50">
              Contactez-nous
            </p>
          </div>
          <div></div>{" "}
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col md:flex-row md:gap-[42px] p-2 max-w-[1130px] formGradient w-full mx-auto max-h-[530px] h-full mt-[39px]">
          {/* Information Section  */}
          <div className="bg-gradient relative before:content-[''] before:absolute before:inset-0 before:h-auto before:bg-[#00000099] border border-[#000000] before:z-1 max-w-[385px] w-full left-0 right-0  flex flex-col    ">
            <div className="lg:px-[34px] md:px-[22px] px-[18px] md:pt-[54px] md:pb-[114px] pb-[90px] pt-[37px] z-20 ">
              <h2 className="font-poppins text-[#F7F7F7] font-semibold text-lg md:text-2xl">
                Informations
              </h2>
              <p className="max-w-[278px] w-full font-poppins font-medium text-[12px] text-[#BCBCBC] mt-2.5">
                Veuillez trouver ci-dessous nos informations de contact
              </p>
              <div className="md:mt-[45px] mt-7 space-y-8 md:space-y-[50px]">
                <div className="flex gap-3 justify-start items-center">
                  <PhoneIcon />
                  <div>
                    <p className="font-poppins font-medium text-sm md:text-base text-[#F7F7F7]">
                      +33 017 797 176
                    </p>
                    <p className="font-poppins font-medium text-sm md:text-base mt-1 text-[#F7F7F7]">
                      +33 017 797 176
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <MessageIcon />
                  <p className="font-poppins font-medium text-sm md:text-base text-[#F7F7F7]">
                    Support@mypay.com
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <LocationIcon />
                  <p className="font-poppins font-medium text-sm md:text-base text-[#F7F7F7]">
                    Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section Start */}
          <div className="z-40 mt-[76px] mb-[32px]">
            <form className="space-y-10">
              <div className="flex gap-[43px] items-center z-30">
                <div>
                  <label className="text-[#B0B0B0] font-poppins font-medium text-[12px]">
                    Votre nom
                  </label>
                  <div>
                    <input
                      className="font-poppins font-medium text-base md:text-xl text-[#333333] border-b border-b-[#B0B0B0] w-full outline-none focus:outline-none  placeholder:text-[#333333]"
                      placeholder="John"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[#B0B0B0] font-poppins font-medium text-[12px]">
                    Votre nom
                  </label>
                  <div>
                    <input
                      className="font-poppins font-medium text-base md:text-xl text-[#333333] border-b border-b-[#B0B0B0] w-full outline-none focus:outline-none  placeholder:text-[#333333]"
                      placeholder="Doe"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-[#B0B0B0] font-poppins font-medium text-[12px]">
                  Votre Email
                </label>
                <div>
                  <input
                    className="font-poppins font-medium text-base md:text-xl text-[#333333] border-b border-b-[#B0B0B0] w-full outline-none focus:outline-none  placeholder:text-[#333333]"
                    placeholder="John@doe.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="text-[#B0B0B0] font-poppins font-medium text-[12px] ">
                  Message
                </label>
                <textarea
                  className="font-poppins font-medium text-base md:text-[17px] text-[#333333] border-b border-b-[#B0B0B0] w-full  outline-none focus:outline-none  placeholder:text-[#333333] mt-1 h-20 "
                  placeholder="Ecrivez votre message"
                ></textarea>
              </div>
              {/* Gradient Button */}
              <button className="z-30 w-fit borderGradient p-0.5 cursor-pointer hover:scale-105 active:scale-100 transition-all ">
                <div className="flex justify-center items-center py-[18px] px-8 gap-5 bg-[#f2f4f0]">
                  <p className="text-[#4B86FC]">ENVOYER</p>
                  <ArrowHero />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
