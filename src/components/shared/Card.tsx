const Card = ({
  quater,
  paragraph,
  cardNo,
  border,
}: {
  quater: string;
  paragraph: string;
  cardNo: number;
  border: string;
}) => {
  return (
    <div className={`py-8 px-4 ${border}  my-4 rounded-lg relative`}>
      <p className="font-bold text-[9rem] md:text-[10rem] absolute right-8 top-0 z-0 opacity-10">
        {cardNo}
      </p>
      <h2 className="font-semibold text-lg md:text-xl py-2 pt-10 ">{quater}</h2>
      <p className="text-sm md:text-md font-light ">{paragraph}</p>
    </div>
  );
};

export default Card;
