import React from 'react'

function Hashtrend() {
  return (
    <div className='w-full h-[80px] shrink-0 flex hover:bg-zinc-900/40 justify-between pl-4 pr-4'>
          <div className='flex flex-col justify-center'>
              <h2 className='text-sm text-gray-500 font-snas '>Zonra . Trending</h2>
              <h2 className='text-md text-white font-snas font-semibold'>#HashTrending</h2>
              <h2 className='text-sm text-gray-500 font-snas '>x,xxx posts</h2>
          </div>
          <div className='p-2'>
               <div className='hover:bg-sky-500/20 p-1 rounded-full text-gray-500 hover:text-sky-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
               </div>
              

          </div>
    </div>
  )
}

export default Hashtrend
