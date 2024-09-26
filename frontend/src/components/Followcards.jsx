import React from 'react'
import check2 from '../assets/IMG-20240124-WA0000-removebg.png'

function Followcards() {
  return (
    <div className='w-full p-4 h-[60px] flex justify-between items-center'>
         <div className='gap-2 flex items-center'>
           <div className='flex items-center justify-center h-[45px] w-[45px]  bg-gray-600 shrink-0 rounded-full' >
                     {/* img */}
                     <img className="rounded-full w-full h-full object-cover" src={check2} alt="" />
           </div>
           <div className='flex flex-col'>
              <h2 className='font-medium font-sans'>User Name</h2>
              <h2 className='font-thin text-gray-300'>@userId</h2>
           </div>
         </div>
         <div className='flex items-center bg-white  pl-4 pr-4 pt-1 pb-1 rounded-full hover:bg-white/80 '>
                <h2 className='text-black font-medium font-sans'>Follow</h2> 
         </div>
    </div>
  )
}

export default Followcards
