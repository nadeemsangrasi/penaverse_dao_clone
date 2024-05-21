import Wrapper from "../shared/Wrapper";

const SpecializedTrackPart1 = () => {
  return (
    <div className="my-16 p-2">
      <Wrapper>
        <div>
          {/* left side  */}
          <div>
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl pb-2 leading-[2rem] md:leading-[3rem] lg:leading-[4rem]">
              Specialized Tracks:
            </h1>
            <p className="pb-4 text-md lg:text-xl font-light md:w-[62%]">
              After completing the first three quarters the participants will
              select one or more specializations consisting of two courses each.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SpecializedTrackPart1;
