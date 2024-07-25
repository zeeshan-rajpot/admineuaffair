import React, { useEffect, useState } from "react";
import SideBar from '../../../Compunents/SideBar';
import { userApi } from '../../../../api';
import toast, { Toaster } from 'react-hot-toast';
import { format } from 'date-fns';

const AdminRequest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [requests, setRequests] = useState([]);
    const [data, setData] = useState({ heading: '', details: '' });
    const [requestId, setRequestId] = useState(null);

    const formatDate = (isoString) => format(new Date(isoString), 'MMMM-dd');

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setRequestId(card._id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
        setRequestId(null);
    };

    const handleOpenUploadModal = () => {
        setIsModalOpen(false);
        setIsUploadModalOpen(true);
    };

    const handleCloseUploadModal = () => {
        setIsUploadModalOpen(false);
    };

    const getRequests = async () => {
        try {
            const response = await userApi.getRequests();
            setRequests(response?.requests || []);
        } catch (err) {
            setError(err.message);
            console.error("Error fetching requests:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRequests();
    }, []);

    const handleAddRequest = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        console.log(data)

        try {
            if (!requestId) {
                throw new Error('No request ID selected.');
            }

            await userApi.uploadRequests(data, requestId);
            setIsUploadModalOpen(false);
        } catch (err) {
            toast.error(err.response.data.message);
            console.error("Error uploading request:", err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <Toaster />
            <div className="grid grid-cols-1 lg:grid-cols-10">
                <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
                    <SideBar />
                </div>
                <div className="col-span-8 lg:col-span-8 p-8">
                    <div className="text-3xl font-semibold mb-4">Request</div>
                    <div className="container mx-auto p-4">
                        <div className="flex flex-col space-y-4">
                            {requests.map((card, index) => (
                                <div
                                    className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 p-6"
                                    key={index}
                                    onClick={() => handleCardClick(card)}
                                >
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                        <span>{formatDate(card.createdAt)}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-theme">{card.subject}</h3>
                                    <p className="text-gray-600 mb-4">{card.description}</p>
                                </div>
                            ))}

                            {isModalOpen && (
                                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center mx-auto z-50">
                                    <div className="bg-white p-8 shadow-lg relative w-[100%] md:w-[50%] rounded-3xl">
                                        <button
                                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2"
                                            onClick={handleCloseModal}
                                        >
                                            <img src="/cancle.png" alt="Cancel" />
                                        </button>
                                        <h2 className='font-semibold text-3xl text-center py-5'>
                                            {selectedCard.requestedBy ? selectedCard.requestedBy.email : 'No email'}
                                        </h2>
                                        <h3 className="text-2xl font-bold mb-4 border-b-2 py-3">{selectedCard.subject}</h3>
                                        <p className="text-gray-700 mb-4">{selectedCard.description}</p>
                                        <div className='text-center mt-6'>
                                            <button
                                                onClick={handleOpenUploadModal}
                                                className='px-[40px] py-2 bg-secColor text-theme hover:bg-transparent border border-secColor hover:text-theme duration-200 font-semibold rounded-full'>
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
                                            <img src="/cancle.png" alt="Cancel" />
                                        </button>
                                        <h2 className="font-semibold text-theme text-3xl text-center py-5">Upload Report</h2>
                                        <form onSubmit={handleAddRequest}>
                                            <div>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Heading Name"
                                                        className="p-2 ps-5 w-full rounded-full shadow-lg"
                                                        name="heading"
                                                        value={data.heading}
                                                        onChange={handleChange}
                                                    />
                                                    <small className="text-gray-500">Please inform us of any specific details or information you would like to see in your customized reports</small>
                                                </div>
                                                <textarea
                                                    className="my-5 shadow-xl w-full rounded-2xl ps-5 p-2"
                                                    placeholder="Report details"
                                                    name="details"
                                                    cols="30"
                                                    rows="10"
                                                    value={data.details}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    className="px-[100px] py-2 bg-secColor text-theme hover:bg-transparent border border-secColor hover:text-theme duration-200 font-semibold rounded-full"
                                                >
                                                    Send
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminRequest;
