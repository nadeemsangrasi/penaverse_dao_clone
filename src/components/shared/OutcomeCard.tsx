const OutcomeCard = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-4">
      <div>
        <img src={"/images/polygon-Icon.png"} alt="correctSignImage" />
      </div>
      <h2 className="pt-2 font-medium text-sm md:text-md lg:text-lg w-[200px]">
        {title}
      </h2>
    </div>
  );
};

export default OutcomeCard;
