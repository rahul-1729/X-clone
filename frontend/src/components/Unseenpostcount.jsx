import React, { useEffect, useState } from 'react'

function Unseenpostcount({count}) {
    const [dec,setDec]=useState("")
   
    useEffect(()=>{
        if(count===0)
            {
               setDec("hidden")
            }
            else{
                setDec("")
            }
        
    },[count])
    
  return (
    <div className={`border-b border-gray-700 flex justify-center items-center py-3 cursor-pointer text-sky-600 text font-sans gap-1 ${dec}` }>
       <span>Show</span>
       <span>{count}</span>
       <span>posts</span>
    </div>
  )
}

export default Unseenpostcount
