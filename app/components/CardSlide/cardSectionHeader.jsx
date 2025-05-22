import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CardSectionHeader = ({ data }) => {
  const section = data?.[0];
  if (!section) return null;

  return (
    <div className="flex items-center justify-between  mt-10">
      <div className="flex items-center gap-2">
        <div className="w-[4px] h-[20px] bg-green-600 rounded-full" />
        <h2 className="text-[20px] md:text-[22px] font-semibold text-gray-800">
          {section.title}
        </h2>
      </div>
      {section.link && (
        <Link
          href={section.link}
          className="flex items-center gap-1 text-green-600 text-sm hover:underline"
        >
          View All <FaArrowRight className="text-xs mt-[1px]" />
        </Link>
      )}
    </div>
  );
};

export default CardSectionHeader;
