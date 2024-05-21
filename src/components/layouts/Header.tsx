import Wrapper from "../shared/Wrapper";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-auto bg-white py-4  backdrop-blur-md w-full top-0  fixed bg-opacity-90 z-[99]">
      <Wrapper>
        <div className="flex justify-between">
          <div>
            <img src={"/logos/penaverse-logo.png"} alt="penaverse-logo" />
          </div>
          <div>
            <ul className="flex py-4 text-sm md:text-md lg:text-lg text-gray-600">
              <li className="hover:text-green-800 px-4 md:px-6">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-green-800 ">
                <Link href={"/"}>Courses</Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
