"use client";
import { FC } from "react";
import { newsContent } from "./NewsContent";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

const News: FC = () => {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link);
  };
  return (
    <div className="bg-gray-900 pb-10  ">
      <div className="uppercase text-center text-white py-8 text-6xl select-none">
        اخبار
      </div>
      <div className="text-white flex flex-col gap-6 md:flex-row justify-center items-center mb-10">
        {newsContent.map((news, index) => (
          <div
            key={index}
            className="w-4/5 md:w-2/6 lg:w-1/6  flex flex-col gap-4  items-center h-[40rem]  pt-0 border border-white rounded-lg"
          >
            <div className="p-0 overflow-hidden">
              <Image
                src={news.value.image}
                width={400}
                height={400}
                alt="news"
                className="w-fit  rounded-lg "
              />
              <div
                className="text-center p-3 font-bold text-2xl hover:text-secondary hover:cursor-pointer h-28"
                onClick={() => handleClick(news.value.link)}
              >
                {news.value.title}
              </div>
            </div>
            <div
              className="px-3 text-sm text-right mb-3 h-auto overflow-hidden"
              dir="rtl"
            >
              {news.value.contentSummary}...
            </div>

            {/* Button */}

            <div
              className=" hover:cursor-pointer w-2/3  h-13 mt-8 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-secondary rounded-full shadow-md group"
              onClick={() => handleClick(news.value.link)}
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
                <FaArrowRight className="w-6 h-6" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                بیشتر بخوانید
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
