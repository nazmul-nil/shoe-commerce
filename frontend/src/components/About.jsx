import { useState } from "react"

const About = () => {
    const [src, setSrc] = useState("/image/red_shoes1.png")

  return (
    <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
            <div>
                <h2 className="text-center uppercase custom-gradient font-bold lg:text-[60px] text-[40px]">
                    ABout
                </h2>
                <div className="flex items-center flex-col lg:flex-row mt-4">

                    {/* shoe display */}
                    <div className="flex items-center">
                        {/* shoe pictures angle */}
                        <div>
                            <div className="my-[5px]">
                                <img src="/image/red_shoes1.png" onClick={() => setSrc("/image/red_shoes1.png")} alt="" className="h-[70px] md:h-[80px] lg:h-[92px] bg-gradient-to-r from-[#c72092] to-[#6c14d0] p-5 rounded-[6px] shadow-aboutSmallImg opacity-[0.8] cursor-pointer hover:opacity-[1]"/>
                            </div>
                            <div className="my-[5px]">
                                <img src="/image/red_shoes2.png" onClick={() => setSrc("/image/red_shoes2.png")} alt="" className="h-[70px] md:h-[80px] lg:h-[92px] bg-gradient-to-r from-[#c72092] to-[#6c14d0] p-5 rounded-[6px] shadow-aboutSmallImg opacity-[0.8] cursor-pointer hover:opacity-[1]"/>
                            </div>
                            <div className="my-[5px]">
                                <img src="/image/red_shoes3.png" onClick={() => setSrc("/image/red_shoes3.png")} alt="" className="h-[70px] md:h-[80px] lg:h-[92px] bg-gradient-to-r from-[#c72092] to-[#6c14d0] p-5 rounded-[6px] shadow-aboutSmallImg opacity-[0.8] cursor-pointer hover:opacity-[1]"/>
                            </div>
                            <div className="my-[5px]">
                                <img src="/image/red_shoes4.png" onClick={() => setSrc("/image/red_shoes4.png")} alt="" className="h-[70px] md:h-[80px] lg:h-[92px] bg-gradient-to-r from-[#c72092] to-[#6c14d0] p-5 rounded-[6px] shadow-aboutSmallImg opacity-[0.8] cursor-pointer hover:opacity-[1]"/>
                            </div>
                        </div>
                        {/* shoe picture */}
                        <div className="p-[10px] flex items-center justify-center">
                            <img src={src} alt="" className=" h-[220px] md:h-[400px] lg:h-[430px] border-[3px] border-solid border-[#6c14d0] rounded-[20px] p-[30px] shadow-aboutLargeImg"/>
                        </div>
                    </div>

                    {/* about text */}
                    <div className="my-4 lg:my-2">
                        <p className="custom-gradient leading-[20px] md:leading-[22px] lg:w-[600px] text-justify px-[30px] py-[25px] border-[2px] border-solid border-[#c72092] rounded-[20px] shadow-aboutTextShad">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </div>
                </div>

                {/* shop now btn */}
                <div className="flex items-center justify-center my-4">
                    <button className="text-black border-[2px] border-solid border-[#c72092] shadow-aboutButtonShad hover:bg-[#c72092] hover:border-transparent hover:text-white transition-[0.5s] px-[25px] py-[10px]" >
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About