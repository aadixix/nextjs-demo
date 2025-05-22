import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const CardSections = ({ cards }) => {
  return (
    <div className="mt-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {cards?.map((card, index) => (
        <div className="" key={index}>
          <div className="mt-4 gap-2 h-full p-2 gap-2 items-start border rounded-[10px] transition-all duration-500 transform hover:scale-[1.02] hover:shadow">
            <div className="relative w-full lg:h-[220px] md:h-[150px] h-[120px] rounded-[10px] overflow-hidden">
              <Image
                src="/banner/panther.jpg"
                alt=""
                fill
                sizes=""
                className="object-cover border"
              />
            </div>
            <div className="mt-2 p-2">
              <h4 className="font-semibold md:text-[20px] text-[14px]">
                {card.title}
              </h4>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <FaRegCalendarAlt className="text-gray-700" />
                  <span className="text-sm text-gray-800">{card.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSections;
