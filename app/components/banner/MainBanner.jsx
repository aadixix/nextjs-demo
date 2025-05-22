import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import BannerGrid from "./BannerGrid";

const MainBanner = ({ data }) => {
  if (!data) return null;

  return (
    <div className="main_width py-10">
      {/* Top Section Heading */}
      <div className="border-b border-gray-200 pb-2">
        <div className="grid grid-cols-[14px_1fr] items-center gap-2">
          <div className="grid grid-cols-2 items-center">
            <div className="greenBg w-[8px] h-[48px]"></div>
            <div className="greenColorBg w-[8px] h-[48px]"></div>
          </div>
          <h2 className="font-semibold text-[32px]">Top story</h2>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid xl:grid-cols-[68%_1fr] lg:grid-cols-[60%_1fr] xl:gap-6 lg:gap-8 gap-10 mt-4">
        {/* Main Banner Card */}
        <div className="border border-gray-200 rounded-[20px]">
          <div className="relative w-full xl:h-[500px] md:h-[400px] h-[250px] rounded-[20px] overflow-hidden">
            <Image
              src={data.img}
              alt="Top story image"
              fill
              className="w-full h-full object-cover border"
            />
          </div>
          <div className="lg:p-8 md:p-6 p-3">
            <h1 className="lg:text-[40px] text-[#000] md:text-[35px] text-[20px] font-semibold lg:leading-[44px]">
              {data.title}
            </h1>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full border overflow-hidden">
                <img
                  src="/fav.png"
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="font-medium">
                <p>{data.author}</p>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <FaRegCalendarAlt className="text-gray-700" />
                  <span className="text-sm text-gray-800">{data.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaRegClock className="text-gray-700" />
                  <span className="text-sm text-gray-800">{data.timming}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Data */}
        <div>
          <BannerGrid gridData={data.gridData} />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
