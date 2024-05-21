import Link from "next/link";
import Wrapper from "../shared/Wrapper";

const Footer = () => {
  return (
    <div className="border-t mt-16 py-12 ">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-6 p-2 lg:p-0 lg:gap-0 gap-8">
          <div className="lg:col-span-2">
            <img
              src="/logos/penaverse-logo.png"
              alt="penaverse-logo"
              className="w-[160px] pb-4"
            />
            <p
              className="lg:pb-6 font-light
            leading-6 md:leading-0
            pb-4 text-sm  md:text-md lg:text-lg "
            >
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program Getting Ready for the Next
              Generation of the Internet
            </p>
            <div className="icons">
              <div className="bg-[#029EAF] inline-block rounded-full mr-2">
                <img
                  src="/logos/facebook.svg"
                  alt="facebook.svg"
                  className="p-2  invert"
                />
              </div>
              <div className="bg-[#029EAF] inline-block rounded-full mr-2">
                <img
                  className="p-2  invert"
                  src="/logos/youtube.svg"
                  alt="youtube.svg"
                />
              </div>
              <div className="bg-[#029EAF] inline-block rounded-full mr-2">
                <img
                  className="p-2  invert"
                  src="/logos/youtube.svg"
                  alt="youtube.svg"
                />
              </div>
              <div className="bg-[#029EAF] inline-block rounded-full mr-2">
                <img
                  className="p-2  invert"
                  src="/logos/github.svg"
                  alt="github.svg"
                />
              </div>
              <div className="bg-[#029EAF] inline-block rounded-full mr-2">
                <img
                  className="p-2  invert"
                  src="/logos/twitter.svg"
                  alt="twitter.svg"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl pb-2 leading-[2rem]">Programs</h1>
            <ul>
              <li
                className="lg:pb-1 font-light
            leading-6 md:leading-0
             text-sm  md:text-md lg:text-lg"
              >
                Web 3.0 and Metaverse
              </li>
              <li
                className="lg:pb-1 font-light
  leading-6 md:leading-0
   text-sm  md:text-md lg:text-lg"
              >
                Artificial Intelligence{" "}
              </li>
              <li
                className="lg:pb-1 font-light
  leading-6 md:leading-0
   text-sm  md:text-md lg:text-lg"
              >
                Cloud-Native Computing
              </li>
              <li
                className="lg:pb-1 font-light
  leading-6 md:leading-0
   text-sm  md:text-md lg:text-lg"
              >
                Ambient Computing and IoT
              </li>
              <li
                className="lg:pb-1 font-light
  leading-6 md:leading-0
   text-sm  md:text-md lg:text-lg"
              >
                Genomics and Bioinformatics
              </li>
              <li
                className="lg:pb-1 font-light
  leading-6 md:leading-0
  text-sm  md:text-md lg:text-lg"
              >
                Network Programmability and Automation
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-xl pb-2 leading-[2rem]">Pages</h1>
            <ul>
              <li
                className="lg:pb-1 font-light
  leading-6 md:leading-0
   text-sm  md:text-md lg:text-lg"
              >
                <Link href={"/"}>Home</Link>{" "}
              </li>
              <li
                className="lg:pb-1 font-light
  leading-6 md:leading-0
   text-sm  md:text-md lg:text-lg"
              >
                <Link href={"#"}>Quarter 1</Link>{" "}
              </li>
              <li
                className="lg:pb-1 font-light
  leading-6 md:leading-0
   text-sm  md:text-md lg:text-lg"
              >
                <Link href={"#"}>Quarter 2</Link>{" "}
              </li>
              <li className="pb-1 font-light">
                <Link href={"#"}>Quarter 3</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
