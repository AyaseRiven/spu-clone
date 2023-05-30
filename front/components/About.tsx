import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });
  return (
    <div id="about">
      <div>
        <Image
          className="absolute -z-[100] w-full h-full -translate-y-[40%]"
          src="/image/wave8.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
        <div className=" container mx-auto px-6 md:px-[5.5rem] lg:px-[9.2rem] xl:px-[9.3rem] 3xl:px-[22.7rem] pt-24 md:pt-20 xl:pt-36 3xl:pt-52 ">
          <div className="flex flex-col pb-6 md:pb-12 xl:pb-28 3xl:pb-40 leading-normal">
            <h5 className=" md:mb-2 font-size-sm-[40] md:font-size-[72] text-center font-bold tracking-wider text-pink-600">
              About
            </h5>
            <p className="hidden md:block font-normal font-size-sm-[24] md:font-size-[32] text-white text-center tracking-wider">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam
            </p>
            <p className="md:hidden font-normal font-size-sm-[24] md:font-size-[32] text-white text-center md:tracking-wider">
              Et has minim elitr intellegat. Mea aeterno
            </p>
          </div>
          <div className="relative md:float-right">
            <div className="absolute  -inset-1 bg-gradient-to-br from-sky-600 via-pink-500 to-pink-500 rounded-3xl blur-2xl transition "></div>
            <div className="player-wrapper relative w-full h-[180px] md:w-[100%] md:h-[100%] lg:w-96 lg:h-48 xl:w-[30rem] xl:h-72 3xl:w-[600px] 3xl:h-96 text-white rounded-3xl text-center bg-gradient-to-br from-sky-600 via-pink-500 to-pink-500 ring-1 ring-gray-900/5  leading-none flex ">
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?v=Dh4X_W7Wef0"
              />
            </div>
          </div>
          <div className="font-normal 3xl:h-96 xl:py-2  3xl:py-4 text-gray-400">
            <p className="hidden md:block font-size-sm-[24]  w-full md:w-[55%] 3xl:w-[48%] md:pr-20 pt-4 md:pt-1 3xl:pt-0 md:font-size-[32] text-center md:text-start md:leading-4 lg:leading-6 xl:leading-7 3xl:leading-9 tracking-wider ">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit At nam minimum ponderum. Et has minim elitr
              intellegat. Et has minim litr intellegat. Mea aeterno eleifend
              antiopam ponderum. Et has intellegat. Mea aeterno eleifend ...
            </p>
            <p className="pb-16 md:pb-0 md:hidden font-size-sm-[24]  w-full md:w-[55%] 3xl:w-[48%] md:pr-20 pt-4 md:pt-1 3xl:pt-0 md:font-size-[32] text-center md:text-start md:leading-4 lg:leading-6 xl:leading-7 3xl:leading-9 md:tracking-wider ">
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit At nam minimum ponderum. Et has minim elitr
              intellegat. Et has minim litr intellegat. Mea aeterno ...
            </p>
            <div className="relative w-44 mx-auto md:mx-0  md:w-28 lg:w-40 xl:w-56 3xl:w-80 md:-bottom-9 xl:-bottom-20 3xl:-bottom-20">
              <div className="absolute inset-[-4px] bg-gradient-to-r from-pink-700  to-pink-700 rounded-full blur-xl opacity-100 transition duration-200 "></div>
              <Link
                href="/"
                className="relative py-3 md:py-2 lg:py-2 xl:py-4 3xl:py-5 font-size-sm-[20] md:font-size-[32] 3xl:font-size-[32] text-white text-center justify-center bg-gradient-to-t from-pink-700 via-pink-700 to-pink-600 hover:opacity-80 rounded-full leading-none flex tracking-wider "
              >
                ดูเพิ่มเติม
                <Image
                  className=" text-center ml-4 h-4 w-3 md:-mt-[0.6%] lg:-mt-[0%] md:w-2 md:h-3 lg:w-3 lg:h-4 3xl:w-5 3xl:h-6 pt-1 "
                  src="/image/arrow.png"
                  alt="me"
                  width="10"
                  height="10"
                  sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
