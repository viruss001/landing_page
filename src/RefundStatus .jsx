import React from 'react';

const RefundStatus = () => {
  const handleCheckStatus = () => {
    console.log('Checking refund status...');
  };

  return (
    <div className="w-full bg-[#f0fdf4]  py-10 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl overflow-hidden w-full max-w-7xl mx-auto">
        
        {/* Left: Image (40%) */}
        <div className="w-full md:w-[40%] flex items-center justify-center bg-blue-50 p-6">
          <img 
            src="https://tax2win.in/assets-new/img/new-theme/refund-element.svg" 
            alt="Tax Refund Illustration"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Right: Content (60%) */}
        <div className="w-full md:w-[60%] p-6 md:p-10 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Check Your Latest</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Income Tax Refund Status</h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Check the status of your most recent income tax refund updated in the Income Tax Department systems.
          </p>
          
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 self-center md:self-start"
            onClick={handleCheckStatus}
          >
            Check Refund Status 😊
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefundStatus;
