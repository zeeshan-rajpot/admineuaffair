


import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import SideBar from '../../../Compunents/SideBar';


import { format } from 'date-fns';
const ReportsDetail = () => {
  
    const { heading, date, readTime, category, reportDescription } = useParams();
    const formatDate = (isoString) => {
        return format(new Date(isoString), 'MMMM-dd');
      };
  return (
    <>
      <Toaster />

      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <SideBar />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8 ">
        



        <div>
      {/* <h1>{heading}</h1>
      <p>Date: {formatDate(date)}</p>
      <p>Read Time: {readTime}</p>
      <p>Category: {category}</p> */}
     
      {/* Additional content */}
    </div>





    <div className="flex items-center justify-between border-b-2 py-8">
        <h2 className="text-2xl md:text-4xl font-semibold text-theme ">
        {heading}
        </h2>
        <div className="flex items-center justify-between">
            <img src="/savegreen.png" alt="" />
            <p className="ms-2">Save</p>
        </div>
    </div>




    <div className="py-8">
    <p className="text-xl md:text-2xl"> {reportDescription}</p>
    </div>
        </div>
      </div>





  
    </>
  );
};

export default ReportsDetail;
