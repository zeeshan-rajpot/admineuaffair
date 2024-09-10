import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { userApi } from "../../../../api";


const ModalPrice = ({ plan, closeModal , fetchPlans}) => {
    // console.log(plan.amount)
    const [price, setPrice] = useState(plan ? parseInt(plan.amount) : 0); // State to manage price
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handlePriceChange = (e) => {
        setPrice(e.target.value);  // Update price as user types
    };

    const simplifiedName = plan.name.split(' ')[0].toLowerCase();

    const planData = {
         plan: simplifiedName,
          newPrice: price
         };

    console.log(planData)


    const saveChanges = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {

            const newplan = await userApi.uploadplans(planData);
            console.log(newplan)
            toast.success(newplan.message);
            fetchPlans()
            closeModal();

        } catch (err) {
            setError(err.message);
            // console.log( err.response.data.message);
            toast.error(err.response.data.message);


        } finally {
            setLoading(false);
        }
    };


    return (

        <>

            <Toaster />




            <div
                id="default-modal"
                aria-hidden="true"
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
                <div className="relative w-full max-w-md bg-white rounded-lg shadow-md">
                    <div className="flex justify-between items-center p-4 ">
                        <h3></h3>
                        <button
                            className="text-gray-400 hover:text-gray-600"
                            onClick={closeModal}
                        >
                            <span className="sr-only">Close modal</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 9.293l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 9.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="p-6 pt-1 space-y-4">
                        <label htmlFor="planName" className="block text-xl text-theme font-semibold">Plan name</label>
                        <input
                            type="text"
                            id="planName"
                            value={plan.name}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            disabled
                        />

                        <label htmlFor="planPrice" className="block text-xl text-theme font-semibold">Plan price</label>
                        <input
                            type="number"
                            id="planPrice"
                            value={price}
                            onChange={handlePriceChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <div className="text-center">
                            <button onClick={saveChanges} className="mt-4 px-20 py-2 bg-secColor text-theme rounded text-lg font-semibold rounded-full">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ModalPrice;
