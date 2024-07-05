import React, { useState } from 'react';
import { userApi } from '../../../api';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const credentials = { email, password };
   
  console.log(credentials)

  
  const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      try {
     
          const userData = await userApi.login(credentials);
          // console.log('User data:', userData);
          navigate("/overview");
          localStorage.setItem("Token", userData.token);
      } catch (err) {
          setError(err.message);
          // console.log( err.response.data.message);
          toast.error( err.response.data.message);
    
          
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
            //   onClick={toggle}
              className="text-gray-400 hover:text-gray-600"
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

          <div className="p-6 pt-1 space-y-4 text-center">
            <h3 className="text-xl md:text-3xl font-semibold">EU AFFAIRS</h3>
            <p className="text-lg text-gray-500 font-semibold">Admin Login</p>
            <div className="input-container shadow mt-3 rounded-3xl bg-[#fafafa] flex items-center p-2"
             
             >
              <img src="/Frame 33.png" className="w-6" alt="Email Icon" />
              <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   name='email' 
                   placeholder="Email" 
                className="bg-[#fafafa] flex-1 p-2 outline-none"
              />
            </div>
            <div className="input-container shadow mt-3 rounded-3xl bg-[#fafafa] flex items-center p-2">
              <img src="/Frame 34.png" className="w-6" alt="Password Icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                 placeholder="Password" 
                className="bg-[#fafafa] flex-1 p-2 outline-none"
              />
            </div>

            <div className="mt-20">
              <button
                // to="/overview"
                onClick={handleLogin}
                type="submit"
                className="px-32 text-theme bg-secColor font-medium rounded-3xl text-lg py-2.5 text-center hover:bg-transparent hover:text-login duration-200 border border-secColor"
                disabled={loading}
                >
              {loading ? 'Login...' : 'Login'}
              </button>
            </div>
            <br />
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
