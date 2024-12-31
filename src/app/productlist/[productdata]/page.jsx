import React from "react";
import Image from "next/image";
import Link from "next/link";

const productItems = [
  { title: "Syltherine", imageSrc: "/Syltherine.png", price: "Rp 2.500.000", alt: "Leviosa Product", redirectUrl: "/productlist/syltherine", subheading: "Stylish cafe chair" },
  { title: "Leviosa", imageSrc: "/Leviosa.png", price: "Rp 2.500.000", alt: "Leviosa Product", redirectUrl: "/productlist/leviosa", subheading: "Stylish cafe chair" },
  { title: "Lolito", imageSrc: "/Lolito.png", price: "Rp 7.000.000", alt: "Lolito Product", redirectUrl: "/productlist/lolito", subheading: "Luxury big sofa" },
  { title: "Respira", imageSrc: "/Respira.png", price: "Rp 5.000.000", alt: "Dining Product", redirectUrl: "/productlist/respira", subheading: "Outdoor bar table and stool" },
  { title: "Grifo", imageSrc: "/Grifo.png", price: "Rp 15.000.000", alt: "Dining Product", redirectUrl: "/productlist/grifo", subheading: "Night lamp" },
  { title: "Muggo", imageSrc: "/Muggo.png", price: "Rp 150.000.000", alt: "Dining Product", redirectUrl: "/productlist/muggo", subheading: "Small mug" },
  { title: "Pingky", imageSrc: "/Pingky.png", price: "Rp 5.000.000", alt: "Dining Product", redirectUrl: "/productlist/pingky", subheading: "Cute bed set" },
  { title: "Potty", imageSrc: "/Potty.png", price: "Rp 7.000.000", alt: "Dining Product", redirectUrl: "/productlist/potty", subheading: "Minimalist flower pot" },
];

export default function Page({ params }) {
  const productData = params.productdata.toLowerCase();

  const product = productItems.find(
    (item) => item.title.toLowerCase() === productData
  );

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-4/5 flex">
        <div className="w-1/2 h-full bg-gray-200 flex items-center justify-center">
          <Image
            src={product.imageSrc}
            alt={product.alt}
            width={600}
            height={1000}
            className="object-contain max-h-full"
          />
        </div>
        <div className="w-1/2 p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-2">{product.subheading}</p>
            <p className="text-2xl text-gray-700 mb-6">
              Price: <span className="font-semibold">{product.price}</span>
            </p>
            <p className="text-lg text-gray-600">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
              diam.
            </p>
          </div>
          <div>
            <Link href="/cart">
          
                <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow hover:bg-blue-600">
                  Add to Cart
                </button>
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}




// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// type ProductItem = {
//   title: string;
//   imageSrc: string;
//   price: string;
//   alt: string;
//   redirectUrl: string;
//   subheading: string;
// };

// const productItems: ProductItem[] = [
//   { title: "Syltherine", imageSrc: "/Syltherine.png", price: "Rp 2.500.000", alt: "Leviosa Product", redirectUrl: "/productlist/Syltherine", subheading: "Stylish cafe chair" },
//   { title: "Leviosa", imageSrc: "/Leviosa.png", price: "Rp 2.500.000", alt: "Leviosa Product", redirectUrl: "/productlist/leviosa", subheading: "Stylish cafe chair" },
//   { title: "Lolito", imageSrc: "/Lolito.png", price: "Rp 7.000.000", alt: "Lolito Product", redirectUrl: "/productlist/lolito", subheading: "Luxury big sofa" },
//   { title: "Respira", imageSrc: "/Respira.png", price: "Rp 5.000.000", alt: "Dining Product", redirectUrl: "/productlist/Respira", subheading: "Outdoor bar table and stool" },
//   { title: "Grifo", imageSrc: "/Grifo.png", price: "Rp 15.000.000", alt: "Dining Product", redirectUrl: "/productlist/Grifo", subheading: "Night lamp" },
//   { title: "Muggo", imageSrc: "/Muggo.png", price: "Rp 150.000.000", alt: "Dining Product", redirectUrl: "/productlist/Muggo", subheading: "Small mug" },
//   { title: "Pingky", imageSrc: "/Pingky.png", price: "Rp 5.000.000", alt: "Dining Product", redirectUrl: "/productlist/Pingky", subheading: "Cute bed set" },
//   { title: "Potty", imageSrc: "/Potty.png", price: "Rp 7.000.000", alt: "Dining Product", redirectUrl: "/productlist/Potty", subheading: "Minimalist flower pot" },
// ];

// export default function Page({ params }: { params: { productdata: any } }) {
//   const product = productItems.find((item) => item.title.toLowerCase() === params.productdata.toLowerCase());


//   if (!product) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-2xl font-bold">Product not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden w-4/5  flex">
//         {/* Left side: Image */}
//         <div className="w-1/2 h-full bg-gray-200 flex items-center justify-center">
//           <Image src={product.imageSrc}
//             alt={product.alt}
//             width={600}
//             height={1000}
//             className="object-contain max-h-full"
//           />
//         </div>
//         {/* Right side: Details */}
//         <div className="w-1/2 p-10 flex flex-col justify-between">
//           <div>
//             <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
//             <p className="text-lg text-gray-600 mb-2">{product.subheading}</p>
//             <p className="text-2xl text-gray-700 mb-6">Price: <span className="font-semibold">{product.price}</span></p>
//             <p className="text-lg text-gray-600">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
//           </div>
//           <div>
//             <Link href="/cart">

//             <button className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow hover:bg-blue-600">
//               Add to Cart
//             </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



