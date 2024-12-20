import Image from "next/image";
import React from "react";
import HeroPic from "../../../Images/governorpic.png";

function Heroes() {
  return (
    <section className="md:flex items-center bg-cover overflow-hidden">
      {/* Text Section */}
      <div className="md:text-left text-center md:space-y-5 space-y-3 md:w-[50%] md:m-20 m-8">
        <h1 className="text-[#044E83] font-bold md:text-5xl text-3xl">
          Governor Sindh
        </h1>
        <h1 className="text-[#044E83] md:text-5xl text-2xl">
          Kamran Khan Tessori
        </h1>
        <h1 className="text-[#3599be] font-bold md:text-5xl text-2xl">
          Certified Cloud Applied Generative AI Engineer (GenEng)
        </h1>
        <h3 className="text-[#044E83] font-bold text-2xl">
          Earn up to $5,000 / month
        </h3>
        <h3 className="text-[#044E83] font-bold text-2xl">
          Now admissions are open in Hyderabad
        </h3>

        {/* Button and Statistics */}
        <div className="md:flex md:space-x-10 items-center">
          <a
            href="/apply"
            className="bg-[#044E83] text-white rounded-md md:w-[20%] w-full outline-none font-bold py-2 flex justify-center"
          >
            APPLY NOW
          </a>
          <div className="text-center md:text-left">
            <h1 className="text-[#044E83] font-bold text-xl">562,143</h1>
            <h3 className="text-[#044E83]">Accepted Applications</h3>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-[50%]">
        <Image
          src={HeroPic}
          alt="HeroPic"
          className="w-full h-[800px] object-cover"
        />
      </div>
    </section>
  );
}

export default Heroes;
