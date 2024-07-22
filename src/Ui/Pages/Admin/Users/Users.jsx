import React, { useState, useEffect } from "react";
// import AdminSidebar from "../../../Compunents/AdminSidebar";
import SideBar from "../../../Compunents/SideBar";
import { userApi } from "../../../../api";

const Users = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [intrest, setIntrest] = useState('');

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? -1 : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await userApi.getuser(currentPage, 10); // Fetch data for current page
        setUserData(data.users);
        setIntrest(data.users.interest);
        console.log(data)
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Detailed error:", error);
        setError("Failed to load data error");
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const renderTableRows = () => {
    if (loading) {
      return Array.from({ length: 5 }).map((_, index) => (
        <tr key={index} className={`${index % 2 === 1 ? "bg-[#FCFCFC]" : ""}`}>
          <th scope="row" className="px-4 py-3">
            <div className="shimmer shimmer-placeholder"></div>
          </th>
          <td className="px-4 py-3">
            <div className="shimmer shimmer-placeholder"></div>
          </td>
          <td className="px-4 py-3">
            <div className="shimmer shimmer-placeholder"></div>
          </td>
          <td className="px-4 py-3">
            <div className="shimmer shimmer-placeholder"></div>
          </td>
          <td className="px-4 py-3"></td>
        </tr>
      ));
    }

    if (error) {
      return (
        <tr>
          <td colSpan="5" className="text-center text-red-500">
            Error: {error}
          </td>
        </tr>
      );
    }

    return userData.map((user, index) => (
      <tr key={user.id} className={`${index % 2 === 1 ? "bg-[#FCFCFC]" : ""}`}>
        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
          {user.id}
        </th>
        <td className="px-4 py-3 text-nowrap">
          <div className="flex">
            {user.interests.map((interest, idx) => (
              <div key={idx} className="flex items-center text-nowrap">
                <span className="mr-1">{interest.category}</span>
              </div>
            ))}
          </div>
        </td>
        <td className="px-4 py-3">{user.email}</td>
        <td className="px-4 py-3">{user.plan}</td>
        <td className="px-4 py-3 flex items-center justify-end">
          <button
            className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none"
            type="button"
            onClick={() => toggleDropdown(index)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
          {index === openDropdownIndex && (
            <div className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <a className="block py-2 px-4 hover:bg-gray-100" onClick={() => toggleDropdown(-1)}>
                    Delete
                  </a>
                </li>
                <li>
                  <a className="block py-2 px-4 hover:bg-gray-100" onClick={() => toggleDropdown(-1)}>
                    Block
                  </a>
                </li>
              </ul>
            </div>
          )}
        </td>
      </tr>
    ));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10">
      <div className="col-span-2 lg:col-span-2">
        <SideBar />
      </div>
      <div className="col-span-8 lg:col-span-8  p-8">
        <section className="p-3 sm:p-5">
          <div className="text-3xl font-semibold mb-4">Users</div>
          <div className="mx-auto max-w-screen-xl">
            <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left ">
                  <thead className="text-xs text-white bg-[#00FFB2] uppercase">
                    <tr>
                      <th scope="col" className="px-4 py-3 flex items-center text-theme">
                        User ID
                        <span>
                          <img src="fa-solid_sort-up.png" alt="sort_icon" className="w-6" />
                        </span>
                      </th>
                      <th scope="col" className="px-4 py-3 text-theme">Interest</th>
                      <th scope="col" className="px-4 py-3 text-theme">Email</th>
                      <th scope="col" className="px-4 py-3 text-theme">Plan</th>
                      <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{renderTableRows()}</tbody>
                </table>
              </div>
            </div>
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
              <span className="text-sm font-normal text-gray-500">
                Showing
                <span className="font-semibold text-gray-900"> {currentPage} </span>
                of
                <span className="font-semibold text-gray-900"> {totalPages} </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`flex items-center justify-center text-sm py-2 px-3 leading-tight border ${currentPage === index + 1 ? "text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700" : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"}`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Users;
