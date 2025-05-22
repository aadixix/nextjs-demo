import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const BannerGrid = ({ gridData }) => {
  return (
    <div>
      <div className="border-b border-gray-200 pb-2 mb-4">
        <h4 className="text-[25px] font-medium">Featured Stories</h4>
      </div>
      {gridData?.map((data, index) => {
        return (
          <div
            key={index}
            className="grid sm:grid-cols-[35%_1fr] mt-4 gap-2 sm:h-[150px] h-[240px] p-2 gap-2 items-start border rounded-[10px] transition-all duration-500 transform hover:scale-[1.02] hover:shadow"
          >
            <div className="relative w-full sm:h-full h-[130px] rounded-[10px] overflow-hidden">
              <Image
                src={data.img}
                alt=""
                fill
                sizes=""
                className="object-cover border"
              />
            </div>
            <div className="">
              <h4 className="font-semibold md:text-[20px] text-[14px]">
                {data.title}
              </h4>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <FaRegCalendarAlt className="text-gray-700" />
                  <span className="text-sm text-gray-800">{data.date}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BannerGrid;
