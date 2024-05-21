const Button = ({ title }: { title: string }) => {
  return (
    <button className="mb-4 lg:mb-0 py-2 px-4 md:py-4 lg:px-7 lg:py-3 rounded-full bg-[#00616C] font-bold text-white text-sm md:text-md lg:text-lg">
      {title}
    </button>
  );
};

export default Button;
