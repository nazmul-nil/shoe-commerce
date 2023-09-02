
const Login = () => {
  return (
    <section className="w-full bg-[url('/image/loging_bg.png')] bg-cover bg-center my-4">
        <div className="max-w-[1280px] mx-auto px-4">
            <div className="flex lg:flex-row items-center gap-2">
                {/* login section image */}
                <div>
                    <img src="/image/logshoes.png" alt="" className="w-[650px]"/>
                </div>

                {/* login fields */}
                <div className="flex items-center justify-center">
                    <div className="lg:px-[80px] px-[20px] lg:py-[80px]">
                        <h1 className="text-[30px] lg:text-[45px] text-center lg:text-start mb-[40px] font-bold font-heroFont">
                            Welcome Back!
                        </h1>
                        <form action="">
                            {/* user name */}
                            <div className="my-2">
                                <label htmlFor="" className="mb-[5px]">
                                    User Name
                                </label>
                                <div className="w-[300px] md:w-[350px] h-[40px] flex items-center gap-4 px-4 border-[2px] border-solid border-[#6c14d0] rounded-[5px]">
                                    <i className="fa-solid fa-user text-[#c72092]"></i>
                                    <input type="text" name="user" placeholder="User Name" className="w-[295px] bg-transparent outline-none border-none text-[15px]"/>
                                </div>
                            </div>

                            {/* password */}
                            <div className="my-2">
                                <label htmlFor="" className="mb-[5px]">
                                    Password
                                </label>
                                <div className="w-[300px] md:w-[350px]  h-[40px] flex items-center gap-4 px-4 border-[2px] border-solid border-[#6c14d0] rounded-[5px]">
                                    <i className="fa-solid fa-lock text-[#c72092]"></i>
                                    <input type="password" name="password" placeholder="Password" className="w-[295px] bg-transparent outline-none border-none text-[15px]"/>
                                </div>
                            </div>

                            {/* forget password */}
                            {/* this will be wrapped by a LINK tag which will go to a forget password page */}
                            <p className="text-end cursor-pointer">
                                Forget Password ?
                            </p>

                            {/* login button */}
                            <button className="w-[300px] md:w-[350px]  text-white px-[20px] py-[7px] border-none rounded-[5px] cursor-pointer text-[20px] bg-gradient-to-r from-[#c72092] to-[#6c14d0] mt-2" type="submit">
                                Login
                            </button>

                            {/* social media icons */}
                            <div className="flex items-center justify-center gap-2 mt-6">
                                <div className="w-[30px] h-[30px] mx-[2px] rounded-full bg-[#f3f3f3] shadow-loginShad">
                                    {/* these icons are not just icon. they will also be wrapped by LINK tag and REDIRECT the user to google authentication page, so that the user can log in through google, facebook or twitter account. */}
                                    <img src="/image/google.png" alt="" className="cursor-pointer w-[20px] m-[5px]"/>
                                </div>
                                <div className="w-[30px] h-[30px] mx-[2px] rounded-full bg-[#f3f3f3] shadow-loginShad">
                                    <img src="/image/facebook.png" alt="" className="cursor-pointer w-[20px] m-[5px]"/>
                                </div>
                                <div className="w-[30px] h-[30px] mx-[2px] rounded-full bg-[#f3f3f3] shadow-loginShad">
                                    <img src="/image/twitter.png" alt="" className="cursor-pointer w-[20px] m-[5px]"/>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}

export default Login