// src/components/Card.js

import React from "react";
import clsx from "clsx";

const Card = ({ imageSrc, text, isSelected, onClick, number }) => {
  return (
    <div
      className={clsx(
        "p-2 sm:p-6 rounded-3xl cursor-pointer",
        isSelected ? "bg-secColor" : "bg-[#F6F6FB]"
      )}
      onClick={onClick}
    >
      <div
        className={clsx(
          "w-14 rounded-full p-3",
          isSelected ? "bg-white" : "bg-secColor"
        )}
      >
        <img src={imageSrc} alt={`${text}_icon`} />
      </div>
      <div
        className={clsx(
          "mt-2 sm:mt-4 text-2xl  font-semibold",
          isSelected ? "text-white" : "text-gray-800"
        )}
      >
        {number}
      </div>
      <div
        className={clsx(
          "mt-2 sm:mt-2 text-xl ",
          isSelected ? "text-white" : "text-[#2B2F42]"
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default Card;
