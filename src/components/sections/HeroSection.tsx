import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";

const HeroSection = () => {
  return (
    <div className="my-24 lg:my-40">
      <Wrapper>
        <div className="lg:flex">
          <div className="w-full px-2 lg:px-0 lg:w-1/2  pt-7">
            <h4 className="pb-4 md:pb-0 font-semibold text-[#00616C] text-sm md:text-md lg:text-lg">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-5 leading-[2.4rem] md:leading-[3rem] lg:leading-[4rem]">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="pb-6 text-sm  md:text-md lg:text-xl font-light">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="pb-6 text-sm md:text-md lg:text-xl font-light">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <Button title="Learn More" />
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="w-full"
              src={"/images/Hero-Poster.png"}
              alt="Hero-Poster"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
