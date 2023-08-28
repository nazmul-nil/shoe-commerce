import {AiOutlineStar} from 'react-icons/ai'



const ReviewCard = ({image, name, reviewText}) => {
  return (
    <div className="w-[350px] lg:w-[400px] bg-[#f3f1f1] px-[25px] py-[20px]  rounded-[5px] shadow-reviewCardShad">
                <div className=" ">
                  {/* card top part including img, name, review */}
                  <div className="flex items-center gap-4">
                    {/* rounded img */}
                    <div className="w-[60px] h-[60px] rounded-full shadow-reviewImgShad cursor-pointer transition-[0.3s] my-[5px] hover:scale-[1.2]">
                      <img src={image} alt="" className="w-full h-full object-cover object-center rounded-full"/>
                    </div>

                    {/* name and review */}
                    <div>
                      <strong className="text-[20px] leading-[22px]">{name}</strong>
                     
                     {/* review */}
                      <div className="flex items-center gap-2"> 
                      <AiOutlineStar className="cursor-pointer  bg-clip-text  text-orange-400"/>
                      <AiOutlineStar className="cursor-pointer  bg-clip-text  text-orange-400"/>
                      <AiOutlineStar className="cursor-pointer  bg-clip-text  text-orange-400"/>
                      <AiOutlineStar className="cursor-pointer  bg-clip-text  text-orange-400"/>
                      <AiOutlineStar className="cursor-pointer  bg-clip-text  text-orange-400"/>
                      </div>
                    </div>

                  </div>

                  {/* review text */}
                  <div className='mt-4'>
                    <p className='text-justify leading-[22px]'>
                      {reviewText}
                    </p>
                  </div>
                </div>
              </div>
  )
}

export default ReviewCard