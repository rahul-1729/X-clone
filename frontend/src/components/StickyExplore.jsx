import React from 'react'
import { NavLink } from 'react-router-dom'


const pages=[
   
    {
        name:"For you",
        weblink:"/for_you"
    },
    {
        name:"Trending",
        weblink:"/trending"
    },
    {
        name:"News",
        weblink:"/news"
    },
    {
        name:"Sports",
        weblink:"/sports"
    },
    {
        name:"Entertainment",
        weblink:"/entertainment"
    },
    
     
]

function StickyExplore() {
  return (
    <div className='w-full h-[60px] shrink-0 bg-transparent border-b border-zinc-500 flex justify-evenly '>
        
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

export default StickyExplore
