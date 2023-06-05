import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import Accordion from "./Accordion";
import Faqs_blogs from "./Faqs_blogs";
import { useQuery } from "react-query";
import { getFAQsData } from "@/api/api_faqs";
const FAQs = () => {
  const [blogs, setBlogs] = useState(false);
  const handleBlogs = () => {
    setBlogs(!blogs);
  };
    const { data, isLoading } = useQuery({
    queryKey: ["getApiFAQs"],
    queryFn: async () => getFAQsData(),
  });
  useEffect(() => {
  }, [data]);

  return (
    <div id="FAQs">
      <div className="3xl:py-12">
        <div className=" md:h-screen 3xl:h-auto relative">
          <div className=" absolute md:h-[80%]  3xl:h-auto inset-0 lg:-top-4 lg:-bottom-4 3xl:-top-14 3xl:-bottom-14 bg-gradient-to-br from-sky-600 to-pink-600 rounded-tl-main rounded-br-main blur-3xl opacity-75"></div>
          <div className=" relative md:min-h-[82%] lg:min-h-[72%] xl:min-h-[80%] 3xl:min-h-screen h-auto bg-white rounded-tl-main md:rounded-tl-main 3xl:rounded-tl-XXL rounded-br-main md:rounded-br-main 3xl:rounded-br-XXL leading-none flex ">
            <div className="container relative mx-auto py-6 3xl:pb-12 px-6 md:px-[5.5rem] lg:px-[9.2rem] 3xl:px-[22.7rem]">
              <div className="leading-normal text-center">
                <h5 className="mb-1 pt-8 xl:pt-12 3xl:pt-32 font-size-sm-[40]  md:font-size-[72]  3xl:font-size-[72]  text-center font-bold tracking-wider text-pink-500">
                {data?.result.data.attributes.title}
                </h5>
                <p className=" pb-12 md:pb-8 3xl:pb-24  font-size-sm-[24]   md:font-size-[32] 3xl:font-size-[32] text-black font-medium text-center">
                {data?.result.data.attributes.sub_title}
                </p>

                <li className=" block md:flex md:justify-between py-2">
                  <div className="columns-3">
                    <Faqs_blogs />
                  </div>
                  {/* <div className="flex flex-col md:w-48 lg:w-52 xl:w-72  3xl:w-full md:mr-4 lg:mr-6 3xl:mr-[50px]">
                    <Faqs_blogs />
                  </div>
                  <div className="flex flex-col md:w-48 lg:w-52 xl:w-72 3xl:w-full ">
                    <Faqs_blogs />
                  </div> */}
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
