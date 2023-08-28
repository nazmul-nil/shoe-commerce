// importing react icon
import { AiFillHeart } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"


const Nav = () => {
  return (
    <nav className="w-full shadow-nav fixed top-0 z-50 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
            <div className="flex items-center  justify-between">
               {/* icon */}
                <div className="flex items-center justify-center">
                    <h2 className="md:text-[35px] text-[30px] text-[#c72092] font-bold mx-0">Shoe<span className="text-[#6c14d0] underline">s</span></h2>
                </div>

                {/* links and pages */}
                <div className="hidden md:flex items-center ">
                  <span className="mx-[15px]  hover:text-[#c72092] transition-[0.2s] cursor-pointer">Home</span>
                  <span className="mx-[15px]  hover:text-[#c72092] transition-[0.2s] cursor-pointer">Products</span>
                  <span className="mx-[15px]  hover:text-[#c72092] transition-[0.2s] cursor-pointer">About</span>
                  <span className="mx-[15px]  hover:text-[#c72092] transition-[0.2s] cursor-pointer">Review</span>
                  <span className="mx-[15px]  hover:text-[#c72092] transition-[0.2s] cursor-pointer">Services</span>
                  
                </div>

                {/* carts */}
                <div className="flex items-center ">
                  <AiFillHeart className="text-[18px] mx-[4px] cursor-pointer hover:text-[#c72092] transition-[0.5s]"/>
                  <FaShoppingCart className="text-[18px] mx-[4px] cursor-pointer hover:text-[#c72092] transition-[0.5s]"/>
                  <BsFillPersonFill className="text-[18px] mx-[4px] cursor-pointer hover:text-[#c72092] transition-[0.5s]"/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav