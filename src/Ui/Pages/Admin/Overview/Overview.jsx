import { React, useState } from "react";
// import AdminSidebar from "../../../Compunents/AdminSidebar";
import LineChart from "./LineChart";

import NewUserTable from "./NewUserTable";

import Card from "../../../Compunents/Card";
import SideBar from "../../../Compunents/SideBar";

const Overview = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const cardsData = [
    { imageSrc: "/healthcare.svg", text: "Healthcare", number: "42,43" },
    {
      imageSrc: "/sustainability.svg",
      text: "Sustainability",
      number: "42,348",
    },
    { imageSrc: "/economy.svg", text: "Economy", number: "326.60K" },
    { imageSrc: "/politics.svg", text: "Politics", number: "126.60K" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <SideBar />
        </div>
        <div className="col-span-8 p-8">
          <div className=" mt-1 lg:mt-8 mx-4 ">
            <img
              src="Ellipse 806.png"
              alt="admin_profile"
              className="float-right w-14 "
            />
            <hr className="mt-2 w-full border-red-100" />
          </div>
          <div className="flex justify-between mt-2 lg:mt-6 mx-4">
            <h1 className="font-bold text-2xl md:text-4xl "> Statistic</h1>
            <div className="relative">
              <button
                className="bg-secColor text-white rounded-3xl py-1 px-4 sm:hidden "
                onClick={toggleDropdown}
              >
                Filter
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-44 bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      30 days
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      90 days
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      6 months
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      12 months
                    </button>
                  </div>
                </div>
              )}
              <div className="sm:block hidden space-x-8 mx-6">
                <button className="bg-secColor  rounded-3xl py-3 px-4">
                  30 days
                </button>
                <button className="bg-gray-100  rounded-3xl py-3 px-4">
                  90 days
                </button>
                <button className="bg-gray-100  rounded-3xl py-3 px-4">
                  6 months
                </button>
                <button className="bg-gray-100  rounded-3xl py-3 px-4">
                  12 months
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:mr-6">
            <div className="mt-0 md:mt-2 mx-2">
              <LineChart />
            </div>
            <div>
              <div className="grid grid-cols-2 mt-4 sm:mt-10 mx-2 gap-2">
                {cardsData.map((card, index) => (
                  <div key={index}>
                    <Card
                      imageSrc={card.imageSrc}
                      text={card.text}
                      number={card.number}
                      isSelected={selectedCard === index}
                      onClick={() => handleCardClick(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <NewUserTable/>
        </div>
      </div>
    </>
  );
};

export default Overview;
