import React from 'react';
import { FaStar, FaShieldAlt, FaLaptopCode, FaUserCheck } from "react-icons/fa";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center text-center">
      
      {/* Top Section */}
      <div className="w-full max-w-3xl">
        <span className="bg-green-100 text-green-600 px-4 py-1.5 text-base rounded-full font-semibold inline-block">
          ITR Filing
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Easiest Way of <br />
          Income Tax efiling in <span className="text-green-600">India</span>
        </h1>

        <div className="mt-8 flex flex-wrap gap-6 justify-center text-lg font-medium">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400 text-2xl" />
            4.8 Google Rating
          </div>
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-green-600 text-2xl" />
            1+ Million Trusted Users
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full mt-14 flex flex-wrap justify-center items-start gap-6">
        {/* Card 1 */}
        <div className="w-[90%] sm:w-[360px] min-h-[380px] bg-[#1f7bf2] text-white rounded-2xl p-8 flex flex-col justify-between shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_#88b8e8,0_0_60px_#88b8e8] hover:brightness-110">
          <div>
            <FaLaptopCode className="text-4xl mb-4" />
            <h2 className="text-xl font-bold mb-2">File ITR yourself</h2>
            <p className="text-base mb-5">
              It's quick, easy, and takes only 4 minutes to file your income tax return.
              ITR filing plans start at just ₹49.
            </p>
          </div>
          <button className="bg-white text-blue-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-all self-center">
            File ITR Now →
          </button>
        </div>

        {/* Card 2 */}
        <div className="w-[90%] sm:w-[360px] min-h-[380px] bg-[#197e37] text-white rounded-2xl p-8 relative flex flex-col justify-between shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_#4aff89,0_0_60px_#4aff89] hover:brightness-110">
          <div className="absolute top-4 right-4">
            <img
              src="https://tax2win.in/assets-new/img/new-theme/15off-2025.svg"
              alt="15% OFF"
              className="w-16"
            />
          </div>
          <div>
            <FaUserCheck className="text-4xl mb-4" />
            <h2 className="text-xl font-bold mb-2">Get eCA for ITR Filing</h2>
            <p className="text-base mb-5">
              Hire personal eCA to do Income Tax Filing for you.
              It is convenient & fast with maximum refund calculated for you.
            </p>
          </div>
          <button className="bg-white text-[#197e37] font-semibold py-2 px-5 rounded-full hover:bg-gray-100 transition-all self-center">
            Book eCA Now →
          </button>
        </div>

        {/* Card 3 */}
        <div className="w-[90%] sm:w-[360px] min-h-[380px] bg-[#FF5C00] text-white rounded-2xl p-8 flex flex-col justify-between shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_#ffd9a0,0_0_60px_#ffd9a0] hover:brightness-110">
          <div>
            <FaShieldAlt className="text-4xl mb-4" />
            <h2 className="text-xl font-bold mb-2">Tax Expert Consultation</h2>
            <p className="text-base mb-5">
              Talk to a tax expert to clarify your doubts, optimize savings, and ensure compliance.
              First consultation free!
            </p>
          </div>
          <button className="bg-white text-[#ff9248] font-semibold py-2 px-5 rounded-full hover:bg-gray-100 transition-all self-center">
            Consult Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
