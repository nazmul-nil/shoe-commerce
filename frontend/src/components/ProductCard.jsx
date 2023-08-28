// importing react icons
import {AiFillHeart, AiOutlineStar} from "react-icons/ai"
import {RiShareForwardFill} from "react-icons/ri"



const ProductCard = ({image, brand, description, price}) => {
  return (
    <div className="product-card relative lg:w-[290px] w-[320px] h-[440px] shadow-productCard rounded-[5px] text-center px-[20px] py-[10px] bg-[#f6f6f6]">
        
        {/* small cards */}
        <div className="small-card absolute opacity-0 -translate-x-[20px] transition-[0.5s]">
            <div className="mt-2 p-1 rounded-[5px] border border-black w-[45px] h-[45px] text-[18px] flex items-center justify-center hover:text-[#c72092] hover:border-[#c72092] transition-[0.5s]  cursor-pointer ">
                <AiFillHeart/>
            </div>
            <div className="mt-2 p-1 rounded-[5px] border border-black w-[45px] h-[45px] text-[18px] flex items-center justify-center hover:text-[#c72092] hover:border-[#c72092] transition-[0.5s]  cursor-pointer ">
                <RiShareForwardFill/>
            </div>
        </div>

        {/* shoe, review and price */}
        <div>
          <div className="flex justify-center items-center my-[15px]">
            <img src={image} alt="" className="card-shoe w-[150px] transition-[0.5s]"/>
          </div>
          {/* prices */}
          <div>
            <h3 className="text-[30px] font-bold mt-[15px] uppercase">
              {brand}
            </h3>
            <p className="text-[#91919191] leading-[21px] my-[8px]">
            {description}
            </p>
            <span className="my-[7px] font-bold">
              ${price}
            </span>
          </div>

          {/* reviews */}
          <div className="flex items-center justify-center mt-2  mb-4">
            <AiOutlineStar className="cursor-pointer  bg-clip-text  text-orange-400"/>
            <AiOutlineStar className="cursor-pointer  bg-clip-text  text-orange-400"/>
            <AiOutlineStar className="cursor-pointer  bg-clip-text  text-orange-400"/>
            <AiOutlineStar className="cursor-pointer  bg-clip-text  text-orange-400"/>
            <AiOutlineStar className="cursor-pointer  bg-clip-text  text-orange-400"/>
            
          </div>

          {/* button */}
          <div>
            <button className="cursor-pointer px-[20px] py-[10px] text-white bg-gradient-to-r from-[#c72092] to-[#6c14d0]">
              Add To Cart
            </button>
          </div>
        </div>
    </div>
  )
}

export default ProductCard