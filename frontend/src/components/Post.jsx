import React, { useState } from 'react'
import check from '../assets/celluloid-shot0001.jpg'
import check2 from '../assets/IMG-20240124-WA0000-removebg.png'

function Post() {
    const [bookmark ,setBookmark]=useState("none")
    const [borderbookmark,setBorderbookmark]=useState("text-gray-500")
    const [bookflag , setBookflag]=useState(false)

    const [heart,setHeart]=useState("none")
    const [borderheart,setBorderheart]=useState("text-gray-500")
    const [heartflag , setHeartflag]=useState(false)
    const handleHeart=()=>{
        if(!heartflag)
        {
          setHeart("#ec4899")
          setBorderheart("text-pink-500")
          setHeartflag(!heartflag)
        }
        else
        {
          setHeart("none")
          setBorderheart("text-gray-500")
          setHeartflag(!heartflag)
        }
       
  }
    const handleBookmark=()=>{
          if(!bookflag)
          {
            setBookmark("#0ea5e9")
            setBorderbookmark("text-sky-500")
            setBookflag(!bookflag)
          }
          else
          {
            setBookmark("none")
            setBorderbookmark("text-gray-500")
            setBookflag(!bookflag)
          }
         
    }
  return (
    <div className='w-full min-h-[90px] p-3 shrink-0 border-b border-gray-800 text-white flex gap-2'>
          <div className='h-[45px] w-[45px] flex bg-gray-700 justify-center  rounded-full flex  shrink-0'>
               {/* user image */}
               <img className="rounded-full w-full h-full object-cover" src={check2} alt="" />
          </div>
          <div className='flex flex-col'>
            <div className='flex gap-1 items-center justify-between'>
                <div>
                    <span className='font-medium'>User Name</span>
                    <span className=' font-light text-gray-500'>@username</span>
                    <span className=' text-gray-500'>.</span>
                    <span className=' font-light text-gray-500'>mm/dd</span>
                </div>
                <div className='p-2'>
                    <div className='hover:bg-sky-500/20 p-1 rounded-full text-gray-500 hover:text-sky-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                    </div>
              

               </div>
                
              
              

          
                
            </div>
            <div className='font-light'>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem atque hic veritatis laboriosam ducimus? Ipsum cumque animi voluptates tempora repudiandae, temporibus id enim dolorum laboriosam facilis sint blanditiis esse quidem incidunt cupiditate aliquam voluptatem reiciendis quia voluptatum obcaecati harum assumenda?  
                    <br />
                    <br />
                    Note: If a word starts with # or @ mark it sky-600

                </p>
            </div>
            <div className='w-full flex items-center justify-center rounded-xl py-4'>
                {/* actual image here in case any in pace of check */}
              <img className="border border-gray-700 rounded-xl"src={check} alt="" />
            </div>
            {/* interaction section */}
            <div className='w-full h-[25px] flex justify-between items-center'>
                    <div className='flex items-center hover:text-sky-500 text-gray-500 '>
                        <div className='hover:bg-sky-500/20 p-2 rounded-full flex'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                            </svg>

                        </div>
                        {/* size of comment array */}
                       <h2 >3</h2>

                    </div>
                    <div className='flex items-center hover:text-green-500 text-gray-500 '>
                        <div className='hover:bg-green-500/20 p-2 rounded-full flex'>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                            </svg>


                        </div>
                        {/* size of reshares */}
                       <h2 >0</h2>

                    </div>
                    <div className={`flex items-center hover:text-pink-500 ${borderheart}`} onClick={handleHeart}>
                        <div className='hover:bg-pink-500/20 p-2 rounded-full flex'>
                        
                            <svg xmlns="http://www.w3.org/2000/svg" fill={heart} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>


                        </div>
                        {/* size of likes */}
                       <h2 >1</h2>

                    </div>
                    <div className='flex items-center hover:text-sky-500 text-gray-500 '>
                        <div className='hover:bg-sky-500/20 p-2 rounded-full flex'>
                        
                        <svg viewBox="0 0 24 24" aria-hidden="true" height={19} width={19} fill="currentColor" ><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>

                        </div>
                        {/* number pf biews */}
                       <h2 >8</h2>

                    </div>
                    <div className={`flex items-center hover:text-sky-500 ${borderbookmark}`}>
                        <div className='hover:bg-sky-500/20 p-2 rounded-full flex'>
                        
                        <svg onClick={handleBookmark} xmlns="http://www.w3.org/2000/svg" fill={bookmark} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>


                        </div>
                       

                    </div>
                  
                   
                

            </div>
             
             
          </div>
     
    </div>
  )
}

export default Post
