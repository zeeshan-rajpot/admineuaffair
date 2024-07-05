import React, { useState } from "react";
import clsx from "clsx";

const categories = [
  { name: "Economy", icon: "/economy.svg" },
  { name: "Politics", icon: "/politics.svg" },
  { name: "Healthcare", icon: "/healthcare.svg" },
  { name: "Sustainability", icon: "/sustainability.svg" },
];

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("Economy");

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-5 ">
      {categories.map((category) => (
        <div className="flex flex-col ">
          <div
            key={category.name}
            onClick={() => handleClick(category.name)}
            className={clsx(" p-4 cursor-pointer rounded-lg", {
              "bg-secColor ": selectedCategory === category.name,
              "bg-[#BFC1C3] ": selectedCategory !== category.name,
            })}
          >
            <img
              src={category.icon}
              alt={`${category.name} icon`}
              className={clsx(" w-18 2xl:w-22 mb-2", {
                "fill-current text-blue-900":
                  selectedCategory === category.name,
                "fill-current text-gray-600":
                  selectedCategory !== category.name,
              })}
            />
          </div>
          <div
            className={clsx("flex justify-center font-semibold ", {
              "text-blue-900": selectedCategory === category.name,
              "text-gray-600": selectedCategory !== category.name,
            })}
          >
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
