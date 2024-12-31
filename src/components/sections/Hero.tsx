


import Image from "next/image";
import Wrapper from "../gadgets/Wrapper";
import Link from "next/link";


export default function Hero() {
  return (
    
<Wrapper>

    <div className="relative mb-20">
    {/* Hero Image Section */}
    <div className="relative h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Image
        src="/Hero.png"
        alt="Hero Section"
        fill
        className="object-cover w-full h-full"
      />
    </div>

    {/* Hero Text Section inside a Box */}
    <div className="absolute inset-0 flex flex-col justify-center items-end mt-32 p-6 md:p-12 lg:p-16">
      <div className="bg-green-300 bg-opacity-70 p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h6 className="text-sm md:text-lg font-semibold text-gray-800 mb-2">New Arrival</h6>
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-orange-600 leading-tight mb-4">
          Discover Our <br /> New Collection
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
        </p>
        <Link href="/shop">
        <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded hover:bg-gray-800">
          BUY NOW
        </button>
        </Link>
      </div>
    </div>
  </div>

  </ Wrapper>
)}





























