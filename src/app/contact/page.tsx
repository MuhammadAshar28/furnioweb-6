import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled, TbClockHour4Filled } from "react-icons/tb";
import Wrapper from "@/components/gadgets/Wrapper";

export default function ContactPage() {
  return (
  
    <Wrapper>

      {/* Hero Section */}
      <div className="relative w-full bg-[#FAF3EA]">
        <Image src="/shophero.png" alt="Hero Image" width={1440} height={270} />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h3 className="font-bold text-3xl">Contact</h3>
          <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Contact</h3>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="text-center mt-10 px-4">
        <h2 className="font-extrabold text-2xl md:text-3xl">Get In Touch With Us</h2>
        <p className="text-gray-600 mt-4">
          For More Information About Our Product & Services, Please Feel Free To Drop Us
          <br />
          An Email. Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col sm:flex-row justify-between items-start mt-10 px-4 space-y-6 md:space-y-0 md:space-x-6">
        {/* Address */}
        <div className="flex items-start space-x-4 w-full md:w-1/3">
          <FaLocationDot className="text-2xl text-[#B88E2F]" />
          <div>
            <h2 className="font-bold text-lg">Address</h2>
            <p className="text-gray-600 text-sm">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-start space-x-4 w-full md:w-1/3">
          <TbPhoneFilled className="text-2xl text-[#B88E2F]" />
          <div>
            <h2 className="font-bold text-lg">Phone</h2>
            <p className="text-gray-600 text-sm">Mobile: +(84) 546-6789</p>
            <p className="text-gray-600 text-sm">Hotline: +(84) 456-6789</p>
          </div>
        </div>
        {/* Working Time */}
        <div className="flex items-start space-x-4 w-full md:w-1/3">
          <TbClockHour4Filled className="text-2xl text-[#B88E2F]" />
          <div>
            <h2 className="font-bold text-lg">Working Time</h2>
            <p className="text-gray-600 text-sm">Monday-Friday: 9:00 - 22:00</p>
            <p className="text-gray-600 text-sm">Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-10 flex justify-center px-4">
        <form className="bg-white shadow-md p-6 rounded-md w-full max-w-lg space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 p-2 rounded-md w-full"
              placeholder="Your name"
              />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 rounded-md w-full"
              placeholder="Your email"
              />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="border border-gray-300 p-2 rounded-md w-full"
              placeholder="This is an optional"
              />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="border border-gray-300 p-2 rounded-md w-full"
              placeholder="Hi! I’d like to ask about..."
              ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#B88E2F] text-white py-2 px-6 rounded-md hover:bg-[#a47d29]"
            >
            Submit
          </button>
        </form>
      </div>

      {/* Banner Section */}
      <div className="mt-12 mb-8 flex justify-center">
        <Image src="/contactbanner.png" alt="Contact Banner" width={1440} height={270} />
      </div>
    
            </Wrapper>
  );
}

