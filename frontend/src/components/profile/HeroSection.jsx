import React from 'react'
import wallpaper from "../../assets/poster0.jpeg"
import wallpaper2 from "../../assets/shankarachaya.jpg"
import profile from "../../assets/IMG-20240124-WA0000-removebg.png"

function HeroSection() {
  return (
    <div className='w-full'>
      
      <div className='w-full aspect-[3/1] relative'>
        {/* insert wallpaper image from database */}
        <img className="object-cover w-full h-full"src={wallpaper} alt="" />
        <div className='absolute left-0 bottom-0 h-3/4 aspect-[1/1] rounded-full bg-yellow-300 center-origin translate-y-[45%]  translate-x-[10%]  border-4 border-black flex justify-center items-center'>
        {/* insert user image from database */}
        <img className=" object-cover w-full h-full rounded-full"src={profile} alt="" />
        </div>
      </div>

      {/* edit profile */}
      <div className='w-full h-2/5 bg-white/30 flex justify-end'>
        
          <button className='text-white font-medium p-2'>
               Edit profile
          </button>
        
      </div>

    </div>
  )
}

export default HeroSection
