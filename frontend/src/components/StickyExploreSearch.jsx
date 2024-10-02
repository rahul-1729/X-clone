import React from 'react'

function StickyExploreSearch() {
  return (
    <div className='w-full h-[60px] bg-black/70 shrink-0 sticky top-0 text-white backdrop-blur-lg flex justify-evenly items-center '>
        
        <div className={` w-full h-4/5  rounded-full bg-gray-400/20 flex p-4 items-center gap-5`}>
        <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"  stroke='white' className="text-gray-white size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
        </div>

        <input type="text" className='bg-transparent focus:outline-none placeholder-gray-500 text-white w-full ' placeholder='Search '/>
        
    </div>



   </div>
  )
}

export default StickyExploreSearch
