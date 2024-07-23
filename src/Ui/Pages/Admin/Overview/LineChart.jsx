import React from "react";
import Chart from "react-apexcharts";
import "./style.css";

const LineChart = ({ periodLabels, period }) => {
 console.log(period)

 const sum = period.reduce((a, b) => a + b, 0);
  const data = {
    series: [
      {
        name: "Users",
        data: period, // Use the period prop here
      },
    ],
    options: {
      chart: {
        width: 200,
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: periodLabels,
      },
      legend: {
        position: "bottom",
      },
      colors: ["#00FFB2"],
    },
  };

  return (
    <>
      <div className="w-full max-w-screen-lg mx-auto mt-8  bg-gray-100 rounded-3xl p-6">
        <div className="flex justify-between ">
          <p className="text-base md:text-2xl font-medium">Total Users</p>
          <h1 className="text-base md:text-3xl font-semibold text-theme">
          {sum}
          </h1>
        </div>
        <hr className="w-[90%] m-auto my-2" />
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          width="98%"
        />
      </div>
    </>
  );
};

export default LineChart;
