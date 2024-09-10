import React, { useState, useEffect } from "react";
// import AdminSidebar from "../../../Compunents/AdminSidebar";
import SideBar from "../../../Compunents/SideBar";
import { userApi } from "../../../../api";
import ModalPrice from "./ModalPrice";


const Plans = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [plans, setPlans] = useState([]);




    const fetchPlans = async () => {
        setLoading(true);
        try {
          const data = await userApi.getplans(); // Fetch data for current page

          console.log(data)
          setPlans(data)
          setLoading(false);
        } catch (error) {
          console.error("Detailed error:", error);
          setError("Failed to load data error");
          setLoading(false);
        }
      };
      
      
      useEffect(() => {
        fetchPlans();
      }, []);


    const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const openModal = (plans) => {
    console.log("Opening modal with plan:", plans);  // Check the structure
    setSelectedPlan(plans);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);


  return (
    <>
    

<div className="grid grid-cols-1 lg:grid-cols-10">
      <div className="col-span-2 lg:col-span-2">
        <SideBar />
      </div>
      <div className="col-span-8 lg:col-span-8  p-8">
      <div className="text-3xl font-semibold mb-4">Plans</div>
 
      <div className="flex justify-center space-x-4 mt-10">
      {plans.map(plan => (
        <div key={plan.name} className="w-[300px]  rounded-xl flex flex-col items-center justify-center h-[200px] border  shadow-lg bg-white cursor-pointer" onClick={() => openModal(plan)}>
          <h2 className="text-3xl font-semibold  border-b-2 border-secColor">{plan.name}</h2>
          <p className="text-xl text-theme font-semibold mt-5">{plan.amount}</p>
        </div>
      ))}
      {modalOpen && (
        <>
        <ModalPrice plan={selectedPlan} closeModal={closeModal} fetchPlans={fetchPlans} />
        </>
      )}
    </div>
 
 
 
 
      </div>
    </div>
      
    </>
  )
}

export default Plans
