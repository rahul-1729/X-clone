import React, { useState } from 'react'

function Stickyhome() {
  const[flag ,setFlag]=useState(1);
  const[one,setOne]=useState("border-b-4 font-medium border-sky-500 ");
  const[two,setTwo]=useState("text-gray-500");

  const handleOne =()=>{
       if(flag!=1)
       {
          setFlag(1)
          setOne("border-b-4 font-medium border-sky-500 ")
          setTwo("text-gray-500")
          
       }
       
  }

  const handleTwo =()=>{
     
    if(flag===1)
    {
      setFlag(2)
      setOne("text-gray-500")
      setTwo("border-b-4 font-medium border-sky-500 ")
      
    }
    
}
  
  return (
    <div className='w-full h-[60px] bg-black/70 shrink-0 sticky top-0 text-white backdrop-blur-lg border-b border-gray-800 flex justify-between '>
        
         <div onClick={handleOne} className={`cursor-pointer flex w-full items-center justify-center hover:bg-white/10`}>
             <div className={`h-full flex  items-center justify-center ${one}`}>
                For you
             </div>
         </div>
         <div  onClick={handleTwo} className={`cursor-pointer flex w-full items-center justify-center hover:bg-white/10`}>
             <div className={`h-full flex  items-center justify-center ${two}`}>
                Following
             </div>
         </div>
         
     
    </div>
  )
}

export default Stickyhome
