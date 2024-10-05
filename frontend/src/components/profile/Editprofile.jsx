import React from 'react'
import wallpaper from '../../assets/basketball.jpeg'

function Editprofile() {
  return (
    <div className='fixed w-full h-full sm:w-[600px] sm:h-[620px] z-30 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-y-auto bg-black px-1'>
      {/* Edit profile and save */}
      <div className='w-full h-[60px] flex items-center justify-between p-4'>
        <div className='h-full items-center gap-10 flex '>
          <div className='hover:bg-white/15 p-[6px] rounded-full'>
            <svg viewBox="0 0 24 24" height={22} width={22}aria-hidden="true"  className='cursor-pointer'  fill="#e5e7eb"><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>

          </div>
           <span className='text-gray-200 text-xl font-semibold'>Edit profile</span>
        </div>
        <button className='bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-full font-medium text-sm'>Save</button>

      </div>
      {/* Add wallpaper */}
      <div className='w-full aspect-[3/1] relative'>
          <div className='flex gap-8 absolute origin-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20'>
            <div className='bg-black/45 hover:bg-black/30 p-3 rounded-full '>
           <svg viewBox="0 0 24 24" height={24} width={24} aria-hidden="true"   fill="#e5e7eb"><g><path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z"></path></g></svg>
         </div >
         {/* hide it on clicking  */}
         <div className='bg-black/45 p-3 rounded-full hover:bg-black/30'>
          <svg viewBox="0 0 24 24" height={24} width={24} aria-hidden="true"   fill="#e5e7eb"><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
        </div>
          </div>
         <input className="hidden "type="file"id="wallpaper" />
         <div className='absolute w-full aspect-[3/1] bg-black/30 z-10'></div>
         {/* palce empty string on walppaper on clicking X(cross)  */}
         <img src={wallpaper} className="object-covern "alt="" />

      </div>


      
    </div>
  )
}

export default Editprofile
