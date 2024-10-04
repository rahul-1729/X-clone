import React from 'react'
import { NavLink } from 'react-router-dom'


const pages=[
   
    {
        name:"Posts",
        weblink:"/posts"
    },
    {
        name:"Replies",
        weblink:"/replies"
    },
    {
        name:"Highlights",
        weblink:"/highlights"
    },
    {
        name:"Articles",
        weblink:"/articles"
    },
    {
        name:"Media",
        weblink:"/media"
    },
    {
        name:"Likes",
        weblink:"/likes"
    },
    
     
]

function Explore() {
  return (
    <div className='w-full h-[60px] shrink-0 bg-transparent border-b border-gray-800 flex justify-evenly '>
        
        {
            pages.map((values,index)=>
                <div key ={index}  className={`cursor-pointer flex items-center flex-grow justify-center hover:bg-white/10`}>
                
                   <NavLink to={values.weblink} className={({isActive})=>
                    `text-zinc-500 text-sans w-full h-full flex justify-center items-center`
                   }>
                    {
                        ({isActive})=>(
                            <div className={`h-full flex justify-center items-center ${isActive?"text-white font-medium border-b-4 border-sky-500":""}`}>{values.name}</div>
                        )
                    }
                    
                   </NavLink>
                
              </div>
            )
        }
   
    
    

</div>
  )
}

export default Explore
