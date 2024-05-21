import { SpecializedCardType } from "@/types/type";

const SpecializedCard = ({ heading, image }: SpecializedCardType) => {
  return (
    <div className="flex border-b gap-4 md:gap-0">
      <div className="w-full sm:w-[42%]">
        <img
          src={image}
          alt={image.split("/")[2].split(".")[0]}
          height={170}
          width={170}
        />
      </div>
      <div className="w-full lg:w-1/2 lg:py-8">
        <h4 className="font-semibold text-[#00616C] text-sm md:text-lg">
          Specialized Track
        </h4>
        <h1 className="font-bold text-sm md:text-lg lg:text-lg pb-5 leading-[1.4rem] md:leading-[1.6rem]">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default SpecializedCard;
