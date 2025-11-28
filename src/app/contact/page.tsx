"use client";
import ArrowHero from "@/assets/icons/arrow-hero";
import BackArrow from "@/assets/icons/back-arrow";
import LocationIcon from "@/assets/icons/location-Icon";
import MessageIcon from "@/assets/icons/message-icon";
import PhoneIcon from "@/assets/icons/phone-Icon";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegQuestionCircle } from "react-icons/fa";

type FormData = {
  FirstName: string;
  LastName: String;
  Email: String;
  message: String;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
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
              <BackArrow className="md:w-10 w-8" />
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
        <div className="flex flex-col md:flex-row md:gap-[42px] p-2 max-w-[1130px] formGradient w-full mx-auto max-h-auto h-full mt-[39px] mb-32">
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
          <div className="z-40 md:mt-[76px] mt-[26px] mb-8">
            <form
              className="space-y-10 px-3 md:px-0"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex md:gap-[43px] gap-10 flex-col md:flex-row md:items-center z-30">
                <div>
                  <label className="text-[#B0B0B0] font-poppins font-medium text-[12px]">
                    Votre nom
                  </label>
                  <div>
                    <input
                      {...register("FirstName", {
                        required: "First Name is required",
                      })}
                      className="font-poppins font-medium text-base md:text-xl text-[#333333] border-b border-b-[#B0B0B0] w-full outline-none focus:outline-none  placeholder:text-[#333333]"
                      placeholder="John"
                      type="text"
                    />
                    {errors.FirstName && (
                      <p className=" text-red-500 pt-1 text-xs flex gap-1  items-center ">
                        {errors.FirstName.message} <FaRegQuestionCircle />
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-[#B0B0B0] font-poppins font-medium text-[12px]">
                    Votre nom
                  </label>
                  <div>
                    <input
                      {...register("LastName", {
                        required: "Last Name is required",
                      })}
                      className="font-poppins font-medium text-base md:text-xl text-[#333333] border-b border-b-[#B0B0B0] w-full outline-none focus:outline-none  placeholder:text-[#333333]"
                      placeholder="Doe"
                      type="text"
                    />
                    {errors.LastName && (
                      <p className=" text-red-500 pt-1 text-xs flex gap-1  items-center ">
                        {errors.LastName.message} <FaRegQuestionCircle />
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[#B0B0B0] font-poppins font-medium text-[12px]">
                  Votre Email
                </label>
                <div>
                  <input
                    {...register("Email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Email Invalid",
                      },
                    })}
                    className="font-poppins font-medium text-base md:text-xl text-[#333333] border-b border-b-[#B0B0B0] w-full outline-none focus:outline-none  placeholder:text-[#333333]"
                    placeholder="John@doe.com"
                    type="email"
                  />
                  {errors.Email && (
                    <p className=" text-red-500 pt-1 text-xs flex gap-1  items-center ">
                      {errors.Email.message} <FaRegQuestionCircle />
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-[#B0B0B0] font-poppins font-medium text-[12px] ">
                  Message
                </label>
                <textarea
                  className="font-poppins font-medium text-base md:text-[17px] text-[#333333] border-b border-b-[#B0B0B0] w-full  outline-none focus:outline-none  placeholder:text-[#333333] mt-1 h-20 "
                  placeholder="Ecrivez votre message"
                  {...register("message", {
                    required: "message is required",
                  })}
                ></textarea>{" "}
                {errors.message && (
                  <p className=" text-red-500 pt-1 text-xs flex gap-1  items-center ">
                    {errors.message.message} <FaRegQuestionCircle />
                  </p>
                )}
              </div>
              {/* Gradient Button */}
              <button className="z-30 w-fit borderGradient p-0.5 cursor-pointer hover:scale-105 active:scale-100 transition-all ">
                <div className="flex justify-center items-center md:py-[18px] py-[9px] md:px-8 px-4 gap-5 bg-[#f2f4f0]">
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
