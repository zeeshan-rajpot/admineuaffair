import React from "react";

const Bar = ({heading}) => {
  return (
    <>
      <div className="bg-theme py-2 px-6 w-full flex justify-between items-center rounded-lg py-5">
        <p className="text-white text-md ">{heading}</p>
        {/* <form class="max-w-sm ">
          <select
            id="countries"
            class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>All</option>
            <option value="US">Economy</option>
            <option value="CA">Politics</option>
            <option value="FR">HealthCare</option>
            <option value="DE">Sustainability</option>
          </select>
        </form> */}
      </div>
    </>
  );
};

export default Bar;
