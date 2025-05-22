import React from "react";
import CardSectionHeader from "./cardSectionHeader";
import CardSections from "./CardSections";
import cardSectionsData from "../../data/cardSectionsData";

const Cards = () => {
  const cardsData = Array.isArray(cardSectionsData) ? cardSectionsData : [];

  return (
    <div className="main_width">
      <div className="">
        <span className="text-[25px] border-b-4 rounded-[4px] border-green-700 font-bold">
          Featured Stories
        </span>
      </div>

      {cardsData.map((section, index) => (
        <div key={index} className="mb-6">
          <CardSectionHeader data={[section]} />

          <div className="">
            <CardSections cards={section.cards} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
