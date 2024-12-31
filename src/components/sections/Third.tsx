

import Image from "next/image";
import Carousel from "../gadgets/Carousel";
import Wrapper from "../gadgets/Wrapper";

const images = [
  "/slider1.png",
  "/Living.png",
  "/Dining.png",
  "/Potty.png",
  "/Grifo.png",
  "/Syltherine.png",
  "/Leviosa.png",
];

export default function Third() {
  return (
    <Wrapper>

    <section className="flex flex-1 bg-orange-100 mb-10 flex-col md:flex-row h-full md:justify-center md:space-x-12 md:space-y-0 space-y-6 items-center">
      <div className="ml-10 mt-10 md:mt-32 text-center md:text-left space-y-6">
        <h1 className="font-extrabold text-4xl">50+ Beautiful rooms <br />inspiration</h1>
        <p>Our designer already made a lot of <br /> beautiful prototype of rooms that inspire you</p>

        <div className="flex items-center justify-center md:justify-start mt-6 mb-20">
          <button className="relative px-12 md:px-20 overflow-hidden border-2 border-orange-700 text-white inline-block text-[15px] leading-[15px] py-[18px] no-underline cursor-pointer bg-orange-600 select-none hover:text-white">
            <span className="relative transition-colors duration-[600ms] ease-[cubic-bezier(0.48,0,0.12,1)] z-10">Explore More</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center md:ml-12 mt-6">
        <Image src="/Thirdsection1.png" alt="sweet home" width={400} height={200} />
      </div>

      <div className="py-10 w-full">
        <Carousel images={images} />
      </div>
    </section>
    </Wrapper>
  );
}
