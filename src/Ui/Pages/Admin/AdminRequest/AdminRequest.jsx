import React, { useState } from 'react';
import SideBar from '../../../Compunents/SideBar';
// import AdminSidebar from '../../../Compunents/AdminSidebar'
// import SavedReportsCard from '../../Custmer/SavedReportsCard';

const AdminRequest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    const handleOpenUploadModal = () => {
        setIsModalOpen(false);
        setIsUploadModalOpen(true);
    };

    const handleCloseUploadModal = () => {
        setIsUploadModalOpen(false);
    };

    const data = [
        {
            title: 'How to Beat the Heat: See It Coming (More than a Week Ahead!)',
            date: 'Jun 19',
            readTime: '7 min read',
            category: 'WEATHER',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'Ten fastest-growing apps in 2022 (including some you don’t know)',
            date: 'May 11',
            readTime: '7 min read',
            category: 'APP',
            description: 'Lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
    ];
    return (
        <>

            <div className="grid grid-cols-1 lg:grid-cols-10">
                <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
                    <SideBar />
                </div>
                <div className="col-span-8 lg:col-span-8 p-8 ">
                    <div className="text-3xl font-semibold mb-4">Request</div>




                    <div className="container mx-auto p-4">
                        <div className="flex flex-col space-y-4">
                            {data.map((card, index) => (

                                <div
                                    className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 p-6"
                                    key={index}
                                    onClick={() => handleCardClick(card)}
                                >
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                        <span>{card.date}</span>
                                        <span className="ml-4 text-secColor">{card.category}</span>
                                        <span className="ml-auto">{card.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-theme" >{card.title}</h3>
                                    <p className="text-gray-600 mb-4">{card.description}</p>

                                </div>
                            ))}


                            {isModalOpen && (
                                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center  mx-auto z-50 ">
                                    <div className="bg-white  p-8 shadow-lg relative w-[100%] md:w-[50%] rounded-3xl">
                                        <button
                                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700  p-2"
                                            onClick={handleCloseModal}
                                        >
                                            <img src="/cancle.png" alt="" />
                                        </button>
                                        <h2 className='font-semibold text-3xl text-center py-5'>
                                            Mohsin
                                        </h2>
                                        <h3 className="text-2xl font-bold mb-4 border-b-2 py-3">{selectedCard.title}</h3>
                                        <p className="text-gray-700 mb-4">{selectedCard.description}</p>
                                        <div className='text-center mt-6'>
                                            <button
                                             onClick={handleOpenUploadModal}
                                             className='px-[40px] py-2 bg-secColor text-theme hover:bg-transparent border border-secColor hover:text-theme duration-200  font-semibold rounded-full'>
                                            
                                                Upload Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isUploadModalOpen && (
                                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center mx-auto z-50">
                                    <div className="bg-white p-8 shadow-lg relative w-[100%] md:w-[50%] rounded-3xl">
                                        <button
                                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2"
                                            onClick={handleCloseUploadModal}
                                        >
                                            <img src="/cancle.png" alt="" />
                                        </button>
                                        <h2 className="font-semibold text-theme text-3xl text-center py-5">Upload Report</h2>
                                     
                                     <div>
                                        <input type="text" placeholder='Heading Name' className='p-2 ps-5 w-full  rounded-full shadow-lg ' name="" id="" />
                                  <textarea className='my-5 shadow-xl w-full rounded-2xl  ps-5 p-2' placeholder='Report Detail' id="" cols="30" rows="10"></textarea>
                                  
                                     </div>
                                     <div className='text-center '>

                                     <button
                                              onClick={handleCloseUploadModal}
                                             className='px-[100px] py-2 bg-secColor text-theme hover:bg-transparent border border-secColor hover:text-theme duration-200  font-semibold rounded-full'>
                                            
                                               Send
                                            </button>
                                     </div>
                                        {/* Add your upload form or functionality here */}
                                    </div>
                                </div>
                            )}



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminRequest
