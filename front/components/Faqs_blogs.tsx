import React, { useState } from "react";
import Accordion from "./Accordion";
import Collapsible from "react-collapsible";

const Faqs_blogs = () => {
  const [blogs, setBlogs] = useState(false);
  const handleBlogs = () => {
    setBlogs(!blogs);
  };
  const items = ["", ""];
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          {item}
          <div className="flex flex-col w-full mr-[78px]">
            <div
              className={
                blogs
                  ? "relative pb-12 md:pb-14 xl:pb-16  3xl:mb-[70px] duration-300"
                  : " relative pb-12 md:pb-14 xl:pb-16  3xl:mb-[80px] duration-300"
              }
            >
              <Collapsible
                trigger={
                  <div
                    onClick={handleBlogs}
                    className=" flex max-w-screen-md items-center justify-center"
                  >
                    <div className="relative p-[0.10rem] rounded-r-2xl h-full 3xl:w-full rounded-md bg-gradient-to-r from-white via-pink-600 to-pink-600   md:rounded-r-lg 3xl:rounded-r-2xl md:p-[1px] 3xl:p-[1.75px] z-10">
                      <div className=" absolute h-full z-50 rounded-r-2xl bg-pink-600 w-[4px] md:w-[2px] 3xl:w-[4px] 3xl:rounded-2xl "></div>
                      <div className="relative rounded-r-2xl leading-8 h-full w-full bg-white   md:rounded-r-lg 3xl:rounded-r-2xl">
                        <div className=" flex justify-between p-2 rounded-r-2xl md:p-1 xl:p-4 3xl:p-4 text-left bg-white md:leading-6 3xl:leading-8  md:rounded-r-lg 3xl:rounded-r-2xl">
                          <p className="w-[70%] md:w-[80%] lg:w-[72%] 3xl:w-[66%] pl-4 py-2 3xl:p-2 font-size-sm-[32] md:font-size-[32] 3xl:font-size-[32] text-gray-700 ">
                            โซนกิจกรรมต่างๆ ใน SPU Mateverse มีโซนอะไรบ้าง !
                          </p>
                          <Accordion />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              >
                <div>
                  <div
                    className={
                      blogs
                        ? " px-1 pt-1 md:pt-3 3xl:pt-6 font-size-sm-[24] md:font-size-[24] text-gray-500 font-medium text-left  3xl:leading-6"
                        : "   px-1 pt-1 md:pt-3 3xl:pt-6 font-size-sm-[24] md:font-size-[24] text-gray-500 font-medium text-left  3xl:leading-6"
                    }
                  >
                    Et has minim elir intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit Et has minim elitr intellegat.
                  </div>
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs_blogs;
