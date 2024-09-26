import React from 'react'
import check from '../assets/shankarachaya.jpg'

function Newstrend() {
  return (
    <div className='w-full h-[110px] gap-2 flex items-center p-4 hover:bg-gray-900/40 '>
          <div className='w-[80px] h-[80px] bg-gray-700 shrink-0 rounded-xl flex items-center justify-center'>
            {/* insert image */}
                <img className="h-full w-full rounded-xl object-cover"src={check} alt="" />
          </div>
          <div className='h-full p-1 flex flex-col gap-2'>
            <h2 className='font-sans font-bold text-md'>
                Search in the database post with most retweets
            </h2>
            <h2 className='text-sm text-gray-500 font-snas'>
              Tag of NEWS
            </h2>
          </div>
          
    </div>
  )
}

export default Newstrend
