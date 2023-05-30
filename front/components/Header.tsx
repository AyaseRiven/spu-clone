import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="Header">
      <div className="container mx-auto px-6 md:px-[5.5rem] lg:px-[9.2rem] xl:px-[9.2rem] 3xl:px-[22.7rem] pt-24 md:pt-20 lg:pt-36  xl:pt-48 3xl:pt-32">
        <div className="3xl:pt-24">
          <h1 className="font-size-sm-[40]  mb:mb-2  font-bold leading-none tracking-wider text-pink-600 md:font-size-[72]  text-center">
            Post Highlight
          </h1>
          <p className=" mb-4 font-semibold tracking-wide text-black font-size-sm-[24]  md:font-size-[32] sm:px-16 xl:px-48 justify-center text-center">
            Et has minim elitr intellegat. Mea aeterno eleifend antionpam
          </p>
        </div>
        <div className="grid grid-cols-1 md:px-[0px] md:grid-cols-3 gap-6 md:gap-4 3xl:gap-6 xl:pb-8 3xl:pb-4">
          {/* <!-- Card image --> */}
          <Link href="/">
            <div className="relative">
              <div className="relative rounded-3xl w-auto justify-center bg-gradient-to-br from-sky-600 to-pink-600  ">
                <div className="absolute text-xl top-2 left-2 3xl:top-4 3xl:left-4">
                  <span className=" absolute w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8  3xl:w-12 3xl:h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-700 to-pink-600 ring-1 ring-slate-900/5 shadow-lg cursor-pointer">
                    <Image
                      className=" md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] "
                      src="/image/ping_highlight.png"
                      alt="me"
                      width="20"
                      height="20"
                    />
                  </span>
                  <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                </div>
                <Image
                  className=" w-full rounded-3xl h-[250px] md:h-[120px] lg:h-[160px] xl:h-[220px] 3xl:h-[250px]"
                  src="/image/spu-meta.png"
                  alt="me"
                  width="100"
                  height="100"
                  sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className=" py-6 md:py-8 3xl:py-10 max-sm:text-center ">
              <div className="font-bold text-black -tracking-tighter font-size-sm-[32] md:font-size-[40] ">
                SPU Metaverse
              </div>
              <div className=" font-semibold text-black md:text-pink-600 font-size-sm-[24] md:font-size-[32] pb-2 ">
                Oct 26, 2022
              </div>
              <p className=" text-gray-600 leading-8 font-normal  font-size-sm-[24] md:font-size-[32]">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam
              </p>
            </div>
          </Link>
          {/* <!-- Card image 2--> */}
          <Link href="/">
            <div className="relative">
              <div className="relative rounded-3xl w-auto justify-center bg-gradient-to-br from-sky-600 to-pink-500  ">
                <div className="absolute text-xl top-2 left-2 3xl:top-4 3xl:left-4">
                  <span className=" absolute w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8  3xl:w-12 3xl:h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-700 to-pink-600 ring-1 ring-slate-900/5 shadow-lg cursor-pointer">
                    <Image
                      className=" md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] "
                      src="/image/ping_highlight.png"
                      alt="me"
                      width="20"
                      height="20"
                    />
                  </span>
                  <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                </div>
                <Image
                  className=" w-full rounded-3xl h-[250px] md:h-[120px] lg:h-[160px] xl:h-[220px] 3xl:h-[250px]"
                  src="/image/bidc2.png"
                  alt="me"
                  width={500}
                  height={500}
                  sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className=" py-6 md:py-8 3xl:py-10 max-sm:text-center ">
              <div className="font-bold text-black -tracking-tighter font-size-sm-[32] md:font-size-[40] ">
                BIDC 2022
              </div>
              <div className=" font-semibold text-black md:text-pink-600 font-size-sm-[24] md:font-size-[32] pb-2 ">
                Oct 26, 2022
              </div>
              <p className=" text-gray-600 leading-8 font-normal  font-size-sm-[24] md:font-size-[32]">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam
              </p>
            </div>
          </Link>
          {/* <!-- Card image 3--> */}
          <Link href="/Blogs">
            <div className="relative">
              <div className="relative rounded-3xl w-auto justify-center bg-gradient-to-br from-sky-600 to-pink-500  ">
                <div className="absolute text-xl top-2 left-2 3xl:top-4 3xl:left-4">
                  <span className=" absolute w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8  3xl:w-12 3xl:h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-700 to-pink-600 ring-1 ring-slate-900/5 shadow-lg cursor-pointer">
                    <Image
                      className=" md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] "
                      src="/image/ping_highlight.png"
                      alt="me"
                      width="20"
                      height="20"
                    />
                  </span>
                  <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                </div>
                <Image
                  className=" w-full rounded-3xl h-[250px] md:h-[120px] lg:h-[160px] xl:h-[220px] 3xl:h-[250px]"
                  src="/image/spu-library.png"
                  alt="me"
                  width="100"
                  height="100"
                  sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className=" py-6 md:py-8 3xl:py-10 max-sm:text-center ">
              <div className="font-bold text-black -tracking-tighter font-size-sm-[32] md:font-size-[40] ">
                SPU Library
              </div>
              <div className=" font-semibold text-black md:text-pink-600 font-size-sm-[24] md:font-size-[32] pb-2 ">
                Oct 26, 2022
              </div>
              <p className=" text-gray-600 leading-8 font-normal  font-size-sm-[24] md:font-size-[32]">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam
              </p>
            </div>
          </Link>
        </div>
        <hr className=" w-full h-px mx-auto bg-gray-600 border-0 rounded" />
      </div>
    </div>
  );
};

export default Header;
