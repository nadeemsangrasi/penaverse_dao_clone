import OutcomeCard from "../shared/OutcomeCard";
import Wrapper from "../shared/Wrapper";
import { outComeCardData } from "../../../data/data";
const OutCome = () => {
  return (
    <div className="relative">
      <div className=" w-[50%] hidden md:block">
        <img
          src="/images/background-ellipse Left.png"
          alt="background-ellipse Left.png"
          className="w-full h-full absolute  right-0 lg:-top[12rem] -top-[15rem]"
        />
      </div>
      <Wrapper>
        <div className=" my-28 flex gap-8 p-2 flex-col-reverse lg:flex-row">
          <div className="lg:w-[50%] ">
            <img src="/images/outcome.png" alt="outcomeImage" />
          </div>
          <div className=" lg:w-[50%] py-16">
            <div>
              <h1
                className="font-bold lg:text-[2.6rem] lg:pb-5 lg:leading-[3.3rem] 
              
              text-2xl md:text-3xl  pb-1 leading-[2rem] md:leading-[3rem] 
              "
              >
                The Outcome for Participants of the Program
              </h1>
              <p className="pb-4 text-sm  md:text-md lg:text-xl font-light">
                As a graduate of this program, you will own valuable products
                such as Full-Stack App Templates, AR and VR Experiences, and
                APIs that are marketed globally by the Panaverse DAO. You will
                also have the opportunity to offer your services at a rate of
                $50 per hour, providing a path to financial stability while
                contributing to the growth of Pakistan's software exports.
              </p>
            </div>
            <div className="flex  flex-wrap gap-4 ">
              {outComeCardData.map((title: string, index: number) => (
                <OutcomeCard key={index} title={title} />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default OutCome;
