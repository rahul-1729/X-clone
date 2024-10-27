import React from 'react'
import {Link} from "react-router-dom"
import wallpaper from "../../assets/basketball.jpeg"
import profile from "../../assets/profile_pic.jpeg"

function HeroSection() {
  const bio=["Unemployed Software Developer","Fitness Enthusiast","Love Capturing Moments"]
  return (
    <div className='w-full'>
      
      <div className='w-full aspect-[3/1] relative'>
        {/* insert wallpaper image from database */}
        <img className="object-cover w-full h-full"src={wallpaper} alt="" />
        <div className='absolute left-0 bottom-0 h-3/4 aspect-[1/1] rounded-full bg-yellow-300 center-origin translate-y-[50%]  translate-x-[10%]  border-4 border-black flex justify-center items-center'>
        {/* insert user image from database */}
        <img className=" object-cover w-full h-full rounded-full"src={profile} alt="" />
        </div>
      </div>

      {/* edit profile */}
      <div className='w-full aspect-[6/1] flex justify-end'>
         <div className='rounded-full mt-3 mr-3'>
         <button className='rounded-full  text-black font-semibold hover: border border-gray-500 text-gray-200 p-2 px-4 text-sm cursor-pointer'>
               Edit profile
          </button>
         </div> 
      </div>
      {/* -----------------------------------end of pictures and edit button */}

      {/* BIO section---------------------------- */}

      <div className='w-full flex gap-2 px-4'>
        <div className='flex flex-col'>
          {/* get user name from the user */}
           <span className='text-gray-200 text-[22px] font-bold'>Rahul Kumar</span>
           {/* get user id */}
           <span className='text-gray-300 font-thin text-[15px] font-bold'>@rk9763981</span>
        </div>
        <div className='p-2 text-gray-200 text-sm font-semibold'>
          {/* add onclick event to payment gateway */}
          <div className='rounded-full border border-zinc-500 py-[1px] px-3 flex gap-1 items-center justify-center cursor-pointer'>
          <svg viewBox="0 0 22 22" aria-hidden="true"  height={18} fill='#0ea5e9'><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>
            Get verified</div>
          
        </div>
      </div>

      <div className='flex flex-col text-white px-4 pt-4 pb-2'>
        {
          bio.map((values,index)=><span key={index} className='text-gray-200'>{values}</span>)
        }
      </div>

      <div className='flex text-zinc-500 text-sm gap-3 px-4'>
        <div className='flex gap-1'>
          <svg viewBox="0 0 24 24" fill="currentcolor" height={19}
          aria-hidden="true" ><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path></g></svg>
          {/* Enter location of user */}
          India
        </div>
        <div className='cursor-pointer hover:underline'>
          {/* User website Link in to as well as in the text*/}
          <Link to="" className='text-sky-500 flex gap-1 '>
          <svg viewBox="0 0 24 24" fill="#71717a" height={19}
          aria-hidden="true" ><g><path d="M 18.36 5.64 c -1.95 -1.96 -5.11 -1.96 -7.07 0 L 9.88 7.05 L 8.46 5.64 l 1.42 -1.42 c 2.73 -2.73 7.16 -2.73 9.9 0 c 2.73 2.74 2.73 7.17 0 9.9 l -1.42 1.42 l -1.41 -1.42 l 1.41 -1.41 c 1.96 -1.96 1.96 -5.12 0 -7.07 Z m -2.12 3.53 l -7.07 7.07 l -1.41 -1.41 l 7.07 -7.07 l 1.41 1.41 Z m -12.02 0.71 l 1.42 -1.42 l 1.41 1.42 l -1.41 1.41 c -1.96 1.96 -1.96 5.12 0 7.07 c 1.95 1.96 5.11 1.96 7.07 0 l 1.41 -1.41 l 1.42 1.41 l -1.42 1.42 c -2.73 2.73 -7.16 2.73 -9.9 0 c -2.73 -2.74 -2.73 -7.17 0 -9.9 Z"></path></g></svg>
          github.com/rahul-1729
          </Link>
        </div>
        <div className='flex gap-1'>
          <svg viewBox="0 0 24 24" fill="currentcolor" height={19}
          aria-hidden="true" ><g><path d="M 8 10 c 0 -2.21 1.79 -4 4 -4 v 2 c -1.1 0 -2 0.9 -2 2 H 8 Z m 12 1 c 0 4.27 -2.69 8.01 -6.44 8.83 L 15 22 H 9 l 1.45 -2.17 C 6.7 19.01 4 15.27 4 11 c 0 -4.84 3.46 -9 8 -9 s 8 4.16 8 9 Z m -8 7 c 3.19 0 6 -3 6 -7 s -2.81 -7 -6 -7 s -6 3 -6 7 s 2.81 7 6 7 Z"></path></g></svg>
          {/* Enter User Birthday */}
          Born January 30,2003
        </div>

      </div>
      
      <div className='flex text-zinc-500 text-sm gap-3 px-4'>
        <div className='flex gap-1'>
            <svg viewBox="0 0 24 24" fill="currentcolor" height={19}
            aria-hidden="true" ><g><path d="M 7 4 V 3 h 2 v 1 h 6 V 3 h 2 v 1 h 1.5 C 19.89 4 21 5.12 21 6.5 v 12 c 0 1.38 -1.11 2.5 -2.5 2.5 h -13 C 4.12 21 3 19.88 3 18.5 v -12 C 3 5.12 4.12 4 5.5 4 H 7 Z m 0 2 H 5.5 c -0.27 0 -0.5 0.22 -0.5 0.5 v 12 c 0 0.28 0.23 0.5 0.5 0.5 h 13 c 0.28 0 0.5 -0.22 0.5 -0.5 v -12 c 0 -0.28 -0.22 -0.5 -0.5 -0.5 H 17 v 1 h -2 V 6 H 9 v 1 H 7 V 6 Z m 0 6 h 2 v -2 H 7 v 2 Z m 0 4 h 2 v -2 H 7 v 2 Z m 4 -4 h 2 v -2 h -2 v 2 Z m 0 4 h 2 v -2 h -2 v 2 Z m 4 -4 h 2 v -2 h -2 v 2 Z"></path></g></svg>
            {/* User creation date*/}
            Joined October 2021
          </div>
      </div>
      {/* ---------------------------Ended user minor dtails */}
      {/* Starting Following and Followed Datails of users--------------- */}

      <div className='p-4 flex gap-4 items-center '>
         <div className='flex gap-1 items-center justify-center'>
          {/* Pick the Following count from  */}
            <span className='text-gray-200 font-bold text-[16px] '>218</span>
            <span className='text-zinc-500  text-[16px] font-light '>Following</span>
            
         </div>
         <div className='flex gap-1 items-center justify-center'>
          {/* Pick the Follower count from  */}
            <span className='text-gray-200 font-bold text-[16px] '>49</span>
            <span className='text-zinc-500 font-light text-[16px] '>Followers</span>
            
         </div>
      </div>
      



    </div>
  )
}

export default HeroSection
