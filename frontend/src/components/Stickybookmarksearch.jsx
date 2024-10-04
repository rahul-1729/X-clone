import React, { useState } from 'react'

function Stickybookmarksearch() {
    const [search,setSearch]=useState("")
    // add blue border to search
    const [deco,setDeco]=useState("border-gray-600")
    //add blue outline to search    
    const [decoicon,setDecoicon]=useState("gray")
    const handleSearch =(e)=>{
        
        setSearch(e.target.value)
        
        

    }
    const handleFocus =()=>{
        setDeco("border border-sky-500") ;
        setDecoicon("#0891b2")
    }

    const handleBlur=()=>{
        setDeco("border-gray-600") ;
        setDecoicon("gray")
    }
  return (
      <div className='w-full h-[105px] p-1 flex items-center sticky top-0 bg-transparent px-4'>
            <div className={` w-full h-4/5  rounded-full bg-black border  flex p-4 items-center gap-2 ${deco} `}>
        <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"  stroke={decoicon} className="text-gray-white size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
        </div>

        <input type="text" className='bg-transparent focus:outline-none placeholder-zinc-500 text-white w-full font-sans text-sm' placeholder='Search Bookmarks ' onFocus={handleFocus} onBlur={ handleBlur } onChange={handleSearch}  />
        
    </div>

      </div>
  )
}

export default Stickybookmarksearch
