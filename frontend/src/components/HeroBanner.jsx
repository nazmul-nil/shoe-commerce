// importing react icons
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin} from "react-icons/bi"
import {AiOutlineRight } from "react-icons/ai"


const HeroBanner = () => {
  return (
    <section className="w-full min-h-[100vh] lg:bg-[url('/image/bg1.png')] bg-cover bg-center bg-no-repeat  mt-6">
        <div className="max-w-[1280px] mx-auto px-4 py-4">
            <div className="lg:flex flex-row-reverse justify-between items-center">
                {/* hero image */}
                <div className="lg:w-[50%] flex justify-between items-center px-4 my-4">
                    <img src="/image/shoes.png" alt="" className="mr-0 lg:mr-10 lg:w-[500px]"/>
                    {/* Social media icon */}
                    <div>
                        <BiLogoFacebook className="mb-4 hover:text-[#c72092] text-[19px] hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer  transition-all"/>
                        <BiLogoTwitter className="mb-4 hover:text-[#c72092] text-[19px] hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer  transition-all"/>
                        <BiLogoInstagram className="mb-4 hover:text-[#c72092] text-[19px] hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer  transition-all"/>
                        <BiLogoLinkedin className="mb-4 hover:text-[#c72092] text-[19px] hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer  transition-all"/>

                    </div>
                </div>

                {/* Nike collection */}
                <div className="lg:w-[50%] mt-10">
                    <h1 className="lg:text-[90px]  text-[50px] md:text-[70px] text-center lg:text-left font-heroFont custom-gradient font-bold ">NIKE</h1>
                    <h2 className="lg:text-[70px] text-[30px] md:text-[40px] text-center lg:text-left font-default custom-gradient font-semibold">Collection</h2>
                    <p className="mt-4 lg:w-[600px] text-justify leading-[21px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    {/* Button */}
                    <div className="mt-10 flex items-center justify-center lg:justify-start">
                        <button className="custom-hover flex items-center gap-4 text-white px-[20px] py-[10px] border rounded-[30px] bg-gradient-to-r from-[#c72092] to-[#6c14d0]">
                            Shop Now
                                <span>
                                 <AiOutlineRight className=""/>
                                
                                </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroBanner