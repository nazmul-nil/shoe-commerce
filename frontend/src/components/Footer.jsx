
const Footer = () => {
  return (
    <section className="w-full min-h-[100vh] lg:min-h-[40vh]  bg-[#f3f1f1]">
        <div className="max-w-[1280px] mx-auto px-4 ">
            <div className="flex flex-col md:flex-wrap lg:flex-row lg:justify-around">
                {/* contact */}
                <div>
                    <h3 className="text-[25px] text-[#1c0080] lg:my-[25px] my-[18px] font-bold">
                        Contact
                    </h3>
                    <div className="flex items-center my-[9px]">
                        <i className="fa-solid fa-house pr-[10px] hover:text-[#c72092] cursor-pointer transition-[0.3s]"></i>
                        <p className="cursor-pointer">
                        123/Colombo/Sri Lanka
                        </p>
                    </div>
                    <div className="flex items-center my-[9px]">
                        <i className="fa-solid fa-phone pr-[10px] hover:text-[#c72092] cursor-pointer transition-[0.3s]"></i>
                        <p className="cursor-pointer">
                        +94 12 345 6789
                        </p>
                    </div>
                    <div className="flex items-center my-[9px]">
                        <i className="fa-solid fa-envelope pr-[10px] hover:text-[#c72092] cursor-pointer transition-[0.3s]"></i>
                        <p className="cursor-pointer">
                        contact@gmail.com
                        </p>
                    </div>
                </div>
                {/* get help */}
                <div>
                    <h3 className="text-[25px] text-[#1c0080] lg:my-[25px] my-[18px] font-bold">
                        Get Help
                    </h3>
                    <div className="flex items-center my-[9px]">
                       
                        <p className="cursor-pointer">
                        FAQ
                        </p>
                    </div>
                    <div className="flex items-center my-[9px]">
                       
                        <p className="cursor-pointer">
                        Shipping
                        </p>
                    </div>
                    <div className="flex items-center my-[9px]">
                        
                        <p className="cursor-pointer">
                        Returns
                        </p>
                    </div>
                    <div className="flex items-center my-[9px]">
                        
                        <p className="cursor-pointer">
                        Payment Options
                        </p>
                    </div>
                </div>
                {/* our stories */}
                <div>
                    <h3 className="text-[25px] text-[#1c0080] lg:my-[25px] my-[18px] font-bold">
                        Our Stories
                    </h3>
                    <div className="flex items-center my-[9px]">
                       
                        <p className="cursor-pointer">
                        Sri Lanka
                        </p>
                    </div>
                    <div className="flex items-center my-[9px]">
                       
                        <p className="cursor-pointer">
                        USA
                        </p>
                    </div>
                    <div className="flex items-center my-[9px]">
                        
                        <p className="cursor-pointer">
                        India
                        </p>
                    </div>
                    <div className="flex items-center my-[9px]">
                        
                        <p className="cursor-pointer">
                        Japan
                        </p>
                    </div>
                </div>
                {/* follow us */}
                <div>
                <h3 className="text-[25px] text-[#1c0080] lg:my-[25px] my-[18px] font-bold">
                        Follow Us
                    </h3>
                    <div className="flex items-center ">
                        <div className="social-link z-10 overflow-hidden relative w-[30px] h-[30px] rounded-full text-black mx-[5px] shadow-footerIconShad flex items-center justify-center cursor-pointer text-[15px] transition-[0.5s] ">
                             <i className="fa-brands fa-facebook-f "></i>
                        </div>
                        <div className="social-link z-10 overflow-hidden relative w-[30px] h-[30px] rounded-full text-black mx-[5px] shadow-footerIconShad flex items-center justify-center cursor-pointer text-[15px] transition-[0.5s] ">
                             <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="social-link z-10 overflow-hidden relative w-[30px] h-[30px] rounded-full text-black mx-[5px] shadow-footerIconShad flex items-center justify-center cursor-pointer text-[15px] transition-[0.5s] ">
                             <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className="social-link z-10 overflow-hidden relative w-[30px] h-[30px] rounded-full text-black mx-[5px] shadow-footerIconShad flex items-center justify-center cursor-pointer text-[15px] transition-[0.5s] ">
                             <i className="fa-brands fa-linkedin-in "></i>
                        </div>
                    </div>
                </div>
                {/* news letter */}
                <div>
                    <h3 className="text-[25px] text-[#1c0080] lg:my-[25px] my-[18px] font-bold">
                        News Letter
                    </h3>
                    <div className="w-[230px] h-[30px] bg-gray-300 rounded-[25px]">
                        <input type="text" placeholder="Your email id here" className="w-[200px] py-[2px] border-none outline-none bg-transparent rounded-[25px] px-4"/>
                        <button type="submit" className="px-[15px] py-[7px] bg-gradient-to-r from-[#c72092] to-[#6c14d0] border-none mt-[15px] rounded-[25px] text-white cursor-pointer" >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer