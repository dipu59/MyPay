import Shadow from "@/assets/svgs/shadow";
import WorldSvg from "@/assets/svgs/world-svg";
import Choisissez from "@/shared/modules/choisissez";
import ClientsReview from "@/shared/modules/clientsReview";
import DemandInformationForm from "@/shared/modules/demandInformationForm";
import Hero from "@/shared/modules/hero";
import VoriApi from "@/shared/modules/voriApi";
import React from "react";

function page() {
  return (
    <div className=" bg-linear">
      <Hero />
      <Choisissez />
      <VoriApi />
      <div className="overflow-hidden">
        {" "}
        <ClientsReview />
        <div className="relative  ">
          <div className="absolute top-[-110%] z-20 left-[-5%]">
            <Shadow />
          </div>
          <div className="absolute top-[-10%] -left-5 z-0">
            <img src="planets.png" alt="" />
          </div>
          <DemandInformationForm />
          <div className="absolute overflow-hidden top-[-40%] z-20 rotate-180 right-[-20%]">
            <Shadow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
