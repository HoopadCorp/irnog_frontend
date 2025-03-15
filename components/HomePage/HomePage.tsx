"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className=" flex flex-col items-center  gap-24   my-28   bg-cover bg-center">
        <div>
          {/* showing diffrent text based on screen size */}
          <h1 className="text-white uppercase text-9xl select-none text-nowrap hidden md:flex">
            ایرناگ 2025
          </h1>
          <h1 className="text-white uppercase text-7xl select-none text-nowrap md:hidden sm:flex">
            ایرناگ 7
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-5 justify-center align-baseline items-baseline gap-8 lg:mb-48">
          <button
            className="shinyButton max-w-96 min-w-80 mx-auto h-20 text-white  text-2xl py-2 px-4 rounded-4xl hover:cursor-pointer items-center justify-center"
            onClick={() => router.push("/buyTicket")}
          >
            تهیه بلیط
          </button>

          <button
            className=" max-w-96  min-w-80 mx-auto h-20 bg-transparent backdrop-blur-lg border border-gray-300 text-white py-2 px-4 rounded-4xl uppercase  hover:shadow-[0_4px_6px_rgba(255,255,255,0.5)] hover:cursor-pointer"
            onClick={() => router.push("/cfp")}
          >
            هماهنگی برای ارائه
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
