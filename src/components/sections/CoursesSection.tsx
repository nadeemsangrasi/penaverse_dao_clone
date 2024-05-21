import { FC, ReactNode } from "react";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import Card from "../shared/Card";
import { CardsData } from "@/types/type";
import { cardsData } from "../../../data/data";

const CoursesSection = () => {
  return (
    <div className="my-14 lg:my-28 relative">
      <div className="absolute -top-28 lg:-top-44 w-[50%] hidden md:block">
        <img
          src="/images/background-ellipse Left.png"
          alt="background-ellipse Left.png"
          className="w-full h-full rotate-180 "
        />
      </div>
      <Wrapper>
        <div className="mt-8 relative ">
          <div className=" p-2">
            <p className="pb-2 md:pb-0 font-semibold text-[#00616C] text-sm md:text-md lg:text-lg">
              Program of Studies
            </p>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl pb-3 leading-[2rem] md:leading-[3rem] lg:leading-[4rem]">
              Core Courses <br /> (Common in All Specializations)
            </h1>
            <p className="pb-4 text-sm  md:text-md lg:text-xl font-light">
              Every participant of the program will start by completing the
              following three core courses.
            </p>
            <Button title="Enroll Now" />
          </div>
          <div className=" my-0 lg:my-12 grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
            {cardsData.map(
              ({ quater, paragraph, number }: CardsData, index: number) => {
                return (
                  <Card
                    key={index}
                    quater={quater}
                    paragraph={paragraph}
                    cardNo={number}
                  />
                );
              }
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CoursesSection;
