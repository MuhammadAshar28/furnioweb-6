import Image from "next/image";

export default function First() {
  return (
    <section className="w-full py-10 bg-white mt-66">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black">Browse The Range</h2>
        <p className="text-black mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Cards */}
      <div className="mt-8 flex justify-center gap-6 flex-wrap font-extrabold">
        {/* Dining Card */}
        <div className="relative group w-64">
          <Image
            src="/dining.png" // Replace with your dining image path
            alt="Dining"
            width={300}
            height={400}
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <p className="text-center mt-2 font-medium text-black">Dining</p>
        </div>

        {/* Living Card */}
        <div className="relative group w-64">
          <Image
            src="/Living.png" 
            alt="Living"
            width={300}
            height={400}
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <p className="text-center mt-2 font-medium text-black">Living</p>
        </div>

        {/* Bedroom Card */}
        <div className="relative group w-64">
          <Image
            src="/Bedroom.png" 
            alt="Bedroom"
            width={300}
            height={400}
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <p className="text-center mt-2 font-medium text-black">Bedroom</p>
        </div>
      </div>

      {/* Our Product Section */}
      <div className="text-center mt-8">
        <h3 className="text-4xl font-bold text-black">Our Product</h3>
      </div>
    </section>
  );
}
