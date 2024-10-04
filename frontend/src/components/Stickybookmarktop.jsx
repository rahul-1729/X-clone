import React from 'react'

function Stickybookmarktop() {
  return (
    <div className='w-full h-[60px] shrink-0  bg-transparent flex justify-between items-center pl-4 pr-2 gap-14'>
     <div className='flex flex-col'>
     <span className='text-xl font-sans font-medium text-gray-200'>Bookmarks</span>
     <span className='text-sm font-sans text-zinc-600'>@username</span>

     </div>
    
    <div className='p-2 hover:bg-white/10 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#e5e7eb" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      

 </div>

</div>
  )
}

export default Stickybookmarktop
