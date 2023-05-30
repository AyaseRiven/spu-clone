import { useEffect, useState } from "react";
import Image from "next/image";

interface Data {
  id: number; // Assuming 'id' is a string
  attributes: {
    title: string;
    // other properties of the attributes object, if any
  };
}

const Library = () => {
  const [dataList, setDataList] = useState<Data[]>([]);
  const API_KEY = process.env.STRAPI_API_KEY;
  const API_BASE = process.env.STRAPI_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE}/api/blogs/?populate=*`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((result) => setDataList(result.data));
  }, []);

  return (
    <div>
      {dataList.map((data: Data) => (
        <>
          <div className="blogs">
            <div className="px-6 pt-32 md:px-[5.5rem] lg:px-[9.2rem] xl:px-[13.8rem] 3xl:px-[22.7rem] md:pt-28 lg:pt-48 xl:pt-56 3xl:pt-64">
              <div>
                <h1 className="  font-bold leading-none tracking-wider text-pink-500 font-size-sm-[40] md:font-size-[72]  text-center">
                  {data.attributes.title}
                </h1>
              </div>
              <div className=" pt-12 md:pt-12 md:w-full overflow-hidden h-auto relative">
                {/* {imgList.map((data: Img) => ( */}
                <>
                  <Image
                    className=" w-full mx-auto rounded-3xl h-[250px] md:h-[320px] lg:h-[380px] xl:h-[450px] 3xl:h-[688px]"
                    src={`${API_BASE}${data.attributes.image.data.attributes.url}`}
                    alt="/"
                    width={1000}
                    height={1000}
                    quality={100}
                    sizes="(max-width: 425px) 33vw,(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                  />
                </>
                {/* ))} */}
                <div className="py-8 pb-32 3xl:py-12 max-sm:text-center ">
                  <div className="font-bold font-size-sm-[32] tracking-wider md:font-size-[48]">
                    Welcome to our SPU Libray Metaverse Experience
                  </div>
                  <div className=" font-semibold tracking-widest text-pink-500 font-size-sm-[24] md:font-size-[32] pb-10 md:pb-2 3xl:pb-6   ">
                    Oct 26, 2022
                  </div>
                  <p className="text-gray-500 leading-6 md:leading-6 3xl:leading-9 font-medium font-size-sm-[24] md:font-size-[32]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus nam voluptatum saepe dolorem aliquam architecto
                    laborum accusamus corrupti suscipit assumenda consequatur
                    tempore, harum deleniti, eius sed iste deserunt totam
                    sapiente? Nisi quod, ut minus quos id optio ad assumenda?
                    Est.
                  </p>
                  <p className=" pt-12 leading-6  md:leading-6 3xl:leading-9 md:pt-8 md:py-10 3xl:py-20 text-gray-500 font-medium font-size-sm-[24] md:font-size-[32]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus nam voluptatum saepe dolorem aliquam architecto
                    laborum accusamus corrupti suscipit assumenda consequatur
                    tempore, harum deleniti, eius sed iste deserunt totam
                    sapiente? Nisi quod, ut minus quos id optio ad assumenda?
                    Est.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Library;
