import { React, useState, useEffect } from "react";
// import AdminSidebar from "../../../Compunents/AdminSidebar";
import LineChart from "./LineChart";
// import {user}
import NewUserTable from "./NewUserTable";

import Card from "../../../Compunents/Card";
import SideBar from "../../../Compunents/SideBar";
import { userApi } from '../../../../api';
const Overview = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

 


  const [activeButton, setActiveButton] = useState('30 days');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleButtonClick = async (period) => {
    setActiveButton(period);
    await fetchData(period);
  };

  const [intrestsdata, setIntrestsdata] = useState('');
  const [usersData, setUsersData] = useState([]);
  const [periodLabels, setPeriodLabels] = useState([]);
  const [periodValues, setPeriodValues] = useState([]);
 
  const fetchData = async () => {
    try {
      // Fetch data for the current page
      const intrest = await userApi.getDashBoardIntrest(activeButton);
      console.log(activeButton + intrest);
      setIntrestsdata(intrest);
      
      // Fetch dashboard users
      const users = await userApi.getDashBoardusers(activeButton);
      console.log('Users:', users.periodValues);
      setUsersData(users); // Assuming you have a setUsersData function/state to store users data
      setPeriodLabels(users?.periodLabels)
      setPeriodValues(users?.periodValues)
    } catch (error) {
      console.error('Detailed error:', error);
    }
  };

// console.log(periodValues)
    useEffect(() => {
    fetchData();
  }, [activeButton]);



  const getButtonClass = (period) => {
    return activeButton === period ? 'bg-theme text-white' : 'bg-gray-100';
  };


  const cardsData = [
    { imageSrc: "/healthcare.svg", text: "Healthcare", number: intrestsdata?.Healthcare },
    {
      imageSrc: "/sustainability.svg",
      text: "Sustainability",
      number: intrestsdata?.Sustainability,
    },
    { imageSrc: "/economy.svg", text: "Economy", number: intrestsdata?.Economy },
    { imageSrc: "/politics.svg", text: "Politics", number: intrestsdata?.Politics  },
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
            <h1 className="font-bold text-2xl md:text-4xl">Statistic</h1>
            <div className="relative">
              <button
                className="bg-secColor text-white rounded-3xl py-1 px-4 sm:hidden"
                onClick={toggleDropdown}
              >
                Filter
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-44 bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    {['30 days', '90 days', '6 months', '12 months'].map((period) => (
                      <button
                        key={period}
                        className={`block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 ${getButtonClass(period)}`}
                        onClick={() => handleButtonClick(period)}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="sm:block hidden space-x-8 mx-6">
                {['30 days', '90 days', '6 months', '12 months'].map((period) => (
                  <button
                    key={period}
                    className={`rounded-3xl py-3 px-4 ${getButtonClass(period)}`}
                    onClick={() => handleButtonClick(period)}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:mr-6">
            <div className="mt-0 md:mt-2 mx-2">
            <LineChart periodLabels={periodLabels} period={periodValues} />
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
          <NewUserTable />
        </div>
      </div>
    </>
  );
};

export default Overview;
