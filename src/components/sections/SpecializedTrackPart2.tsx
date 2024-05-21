import React from "react";
import Wrapper from "../shared/Wrapper";
import { cardsData, speciliezCardData } from "../../../data/data";
import { SpecializedCardType, CardsData } from "@/types/type";
import SpecializedCard from "../shared/SpecializedCard";
import Card2 from "../shared/Card2";

const SpecializedTrackPart2 = () => {
  return (
    <div>
      <Wrapper>
        <div className="w-full lg:flex relative gap-8 p-2">
          {/* left side */}
          <div className="lg:w-[60%] border p-6 h-fit lg:sticky lg:top-0 shadow-lg ">
            <h4 className="pb-2 md:pb-0 font-semibold text-[#00616C] text-sm md:text-md lg:text-lg ">
              Specialized Track
            </h4>

            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl pb-3 leading-[2rem] md:leading-[3rem] lg:leading-[3rem]">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h1>
            <p className="pb-4 text-sm  md:text-md lg:text-xl font-ligh">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className=" mb-4 lg:mb-0 py-2 px-4 md:py-4 lg:px-7 lg:py-3 rounded-md border border-[#00616C] font-bold text-[#00616C] text-sm md:text-md lg:text-lg">
              Learn More -&gt;
            </button>
            <div className="md:flex gap-2 ">
              {cardsData
                .splice(3)
                .map(
                  ({ quater, paragraph, number }: CardsData, index: number) => (
                    <Card2
                      key={index}
                      quater={quater}
                      paragraph={paragraph}
                      cardNo={number}
                    />
                  )
                )}
            </div>
          </div>
          {/* right side */}
          <div className="lg:w-[40%] flex flex-col gap-4 ml-8 mt-12 lg:mt-0  ">
            {speciliezCardData.map(
              ({ heading, image }: SpecializedCardType, index: number) => (
                <SpecializedCard key={index} heading={heading} image={image} />
              )
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SpecializedTrackPart2;
