import React from 'react'
import { NavLink } from 'react-router-dom'


const pages=[
   
    {
        name:"All",
        weblink:"/all"
    },
    {
        name:"Verified",
        weblink:"/verified"
    },
    {
        name:"Mentions",
        weblink:"/mentions"
    },
   
    
     
]

function Stickynotification() {
  return (
    <div className='w-full h-[60px] shrink-0 text-white bg-transparent border-b border-gray-800 flex justify-evenly '>
        
        {
            pages.map((values,index)=>
                <div key ={index}  className={`cursor-pointer flex items-center flex-grow justify-center hover:bg-white/10`}>
                
                   <NavLink to={values.weblink} className={({isActive})=>
                    `text-gray-500 text-sans w-full h-full flex justify-center items-center`
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

export default Stickynotification
