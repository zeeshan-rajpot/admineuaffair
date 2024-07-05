// src/components/NewUserTable.js

import React from 'react';

const NewUserTable = () => {
  return (
    <div className="max-w-full mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg">
        <div className="py-4 px-6">
          <h2 className="text-xl font-semibold text-gray-800">New User</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-gray-100">
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Plan</th>
                <th className="py-3 px-6 text-left text-sm font-medium text-gray-600">Interest</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-6 text-sm text-gray-700">2 May 2024</td>
                <td className="py-3 px-6 text-sm text-gray-700">Basic</td>
                <td className="py-3 px-6 text-sm text-gray-700">Economy</td>
              </tr>
              <tr>
                <td className="py-3 px-6 text-sm text-gray-700">4 May 2024</td>
                <td className="py-3 px-6 text-sm text-gray-700">Professional</td>
                <td className="py-3 px-6 text-sm text-gray-700">Politics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewUserTable;
