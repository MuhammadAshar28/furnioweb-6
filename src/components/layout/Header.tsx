import Image from "next/image";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {



  return (

    <header className="flex h-28  space-x-8 space-y-8 w-full mb-50 fixed top-0 z-50  justify-between  bg-background/95 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60  sm:mb-12 md:mb-16 xs:mb-12">
<div className="flex xs:text-lg font-bold">
  <Link href="/">
    <div
      className="relative ml-2  md:ml-3 md:mt-3"
      style={{ width: '230px', height: '120px' }} // Set aspect ratio here
    >
      <Image
        src="/logo.png"
        alt="logo"
        fill
        sizes="(max-width: 768px) 100vw, 230px"
        className="object-contain"
      />
    </div>
  </Link>
</div>





{/* 
      <div className="flex  xs:text-lg font-bold">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            layout="responsive" 
            width={230}
            height={150}
            className="ml-2 mt-5  md:ml-3 md:mt-3 max-w-full h-auto"
          ></Image>
        </Link>
      </div> */}



      <div className="flex gap-5 justify-center space-x-8">

        {/* Hamburger Icon for Mobile */}
        <Sheet>
          <SheetTrigger className="lg:hidden text-2xl  focus:outline-none">
            ☰
          </SheetTrigger>

          {/* Navigation Links for Desktop */}
          <div className="flex justify-between md:text-xl lg:text-xl">

            <nav className=" items-center hidden lg:flex space-x-8 font-semibold text-xl list-none    ">
              <ul className="flex  text-2xl font-bold space-x-9 ">
                <Link href={"/"}>
                  <li>Home</li>
                </Link>
                <Link href={"/shop"}>
                  <li>Shop</li>
                </Link>
                <Link href={"/blog"}>
                  <li>Blog</li>
                </Link>
                <Link href={"/contact"}>
                  <li>Contact</li>
                </Link>
              </ul>


            </nav>
            <div className="items-center hidden lg:flex space-x-8 font-semibold text-xl list-none  ml-20 ">

              <ul className="flex items-center  space-x-5  text-4xl ml-20 mr-10 ">
                <MdPersonOutline />
                <CiSearch />
                <GoHeart />
                <AiOutlineShoppingCart />
              </ul>


            </div>
          </div>




          <SheetContent>
            <SheetHeader>
              <SheetTitle className="font-bold text-2xl">Zollex</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col list-none gap-6">
                  <Link href="/">
                    <li className="hover:text-blue-400 cursor-pointer">Home</li>
                  </Link>
                  <Link href="/About">
                    <li className="hover:text-blue-400 cursor-pointer">About</li>
                  </Link>
                  <Link href="/Contact">
                    <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                  </Link>
                  <Link href="/Blog">
                    <li className="hover:text-blue-400 cursor-pointer">Blog</li>
                  </Link>
                  <div className="flex items-center mt-6 space-x-5 mr-6 text-2xl">
                    <MdPersonOutline />
                    <CiSearch />
                    <GoHeart />
                    <AiOutlineShoppingCart />
                  </div>

                </div>

              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header >




  );
};

export default Header;



