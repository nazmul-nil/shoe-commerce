

const Services = () => {
  return (
    <section className="w-full my-4">
       <div className="max-w-[1280px] mx-auto px-4">
            <div>
                <h3 className="text-center uppercase  font-bold lg:text-[60px] text-[40px] my-[30px]">
                    OUr <span className="review-gradient">Services</span>
                </h3>

                {/* Services */}
                <div className="flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        {/* each service */}
                        <div className="w-[250px]">
                                {/* font awesome fast delivery truck */}
                                <div className="flex items-center justify-center">
                                     <i className="fa-solid fa-truck-fast text-[60px] text-orange-400 cursor-pointer my-[20px]"></i>
                                </div>
                                <h3 className="text-[19px] mb-[12px] font-semibold text-center">
                                Fast Delivery
                                </h3>
                                <p className="text-center text-[#919191] lg:mb-[60px]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                            
                        </div>
                        <div className="w-[250px]">
                                {/* font awesome rotate left  */}
                                <div className="flex items-center justify-center">
                                    <i className="fa-solid fa-rotate-left text-[60px] text-orange-400 cursor-pointer my-[20px]"></i>
                                </div>
                                
                                <h3 className="text-[19px] mb-[12px] font-semibold text-center">
                                
                                    10 Days Replacement
                                </h3>
                                <p className="text-center text-[#919191] lg:mb-[60px]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                            
                        </div>
                        <div className="w-[250px]">
                                {/* font awesome support  */}
                                <div className="flex items-center justify-center">
                                     <i className="fa-solid fa-headset text-[60px] text-orange-400 cursor-pointer my-[20px]"></i>
                                </div>
                                
                                <h3 className="text-[19px] mb-[12px] font-semibold text-center">
                                24 x 7 Support
                                </h3>
                                <p className="text-center text-[#919191] lg:mb-[60px]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                            
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services