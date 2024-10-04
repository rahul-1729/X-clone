import React from 'react'
import { Link } from 'react-router-dom'

function Stickyprofile() {
  return (
    <div className='w-full h-[60px] sticky top-0 shrink-0 bg-black/50 border-b border-gray-800 flex items-center gap-10 px-2 sticky top-0 backdrop-blur-lg z-10'>
        
    
        <div className="hover:bg-white/10 p-2 rounded-full flex justify-content items-center">
        {/* addd link of home page in to */}
        <Link to="/">
        <svg viewBox="0 0 24 24" aria-hidden="true" height="20" width="20"  fill="#e5e7eb"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
        </Link>  
        </div>

        <div className='flex flex-col'>
            {/*Bring username from backend  */}
            <span className='font-semibold text-xl text-gray-200'>Username</span>
            {/* Bring total number of post by the user from backend */}
            <span className='text-sm text-zinc-500'>10 posts</span>
        </div>
        
    




</div>
  )
}

export default Stickyprofile
