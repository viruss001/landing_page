import React,{useState} from "react";
import { FaCheckCircle, FaStar, FaShieldAlt, FaLaptopCode, FaUserCheck } from "react-icons/fa";
import TestimonialSlider from "./TestimonialSlider";
import RefundStatus from "./RefundStatus ";
import TaxServices from "./TaxServices";
import Home from "./Component/Home";
import FilingCategories from "./Component/FilingCategories";
import Footer from "./Component/Footer";
import { FaBars, FaTimes } from "react-icons/fa";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);  
  return (
    <div className="font-sans text-gray-800">
        <div className="bg-[#f0fcf8] font-sans text-gray-800">
        {/* Top notice */}
        <div className="bg-[#dbeafe] text-base text-3xl font-bold  text-center py-1 px-4 flex justify-center items-center gap-4">
          <p>Received a Tax Notice? Respond and Resolve with our Tax Experts.</p>
          <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition text-sm">
            Connect Today
          </button>
        </div>
      {/* Navbar */}
      <nav className="bg-[#f0fcf8] p-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#1e40af]">Taxgro</div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden text-[#1e40af] text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-base font-medium text-[#1e40af]">
          <span className="cursor-pointer hover:underline">Products</span>
          <span className="cursor-pointer hover:underline">Tools</span>
          <span className="cursor-pointer hover:underline">Knowledge Center</span>
          <span className="cursor-pointer hover:underline">Guides</span>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Log In</a>
          <a href="#" className="bg-[#1e40af] text-white px-3 py-1 rounded-sm hover:bg-[#1e3a8a]">
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6 flex flex-col gap-4 text-[#1e40af] text-base font-medium">
          <span className="cursor-pointer hover:underline">Products</span>
          <span className="cursor-pointer hover:underline">Tools</span>
          <span className="cursor-pointer hover:underline">Knowledge Center</span>
          <span className="cursor-pointer hover:underline">Guides</span>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Log In</a>
          <a href="#" className="bg-[#1e40af] text-white px-3 py-2 rounded-sm text-center hover:bg-[#1e3a8a]">
            Sign Up
          </a>
        </div>
      )}
    </nav>

    

        {/* Main content */}
        {}
       <Home/>

      </div>
 {/* <span className="bg-green-100 text-green-600  text-base rounded-full font-semibold">
      ITR Filing
    </span> */}

      {/* 5 Simple Steps */}
      <FilingCategories/>

      {/* Stats Section */}
    <section className=" bg-white text-center ">
  <div className=" mx-auto px-4 bg-[#f0fcf8] w-full h-full">
    <h1 className="text-3xl font-bold text-gray-800 mb-4 py-2">
      Best income tax e-filing website in India
    </h1>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
      We have changed the way people do tax filing in India. We don't just get your tax return filed within minutes but get you maximum refunds in shortest time.
    </p>

    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      {/* India Map Image */}
      <div className="flex-1 max-w-md">
        <img 
          src="/map-india-with-tricolor.png" 
          alt="India Map" 
          className="w-full h-auto"
        />
      </div>

      {/* Stats Grid */}
      <div className="flex-1 grid grid-cols-2 gap-8 max-w-md">
        <div className="p-4">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">4.8</h3>
          <p className="text-gray-600">Star Service Rating</p>
        </div>
        <div className="p-4">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">Top 25</h3>
          <p className="text-gray-600">Emerging Startup of Asia</p>
        </div>
        <div className="p-4">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">1+ Million</h3>
          <p className="text-gray-600">Trusted Users</p>
        </div>
        <div className="p-4">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">Authorized</h3>
          <p className="text-gray-600">by Income Tax Department</p>
        </div>
      </div>
    </div>

    {/* Read More Button */}
    <div >
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">
        Read More
      </button>
    </div>
  </div>
</section>

      {/* Services */}
     <TaxServices/>

      {/* Testimonials */}
      
      <TestimonialSlider/>
      <RefundStatus/>
      


      {/* Footer */}
      <Footer/>
    </div>
  );
}
