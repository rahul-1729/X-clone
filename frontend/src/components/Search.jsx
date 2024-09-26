import React, { useState } from 'react'

function Search() {
    const [search,setSearch]=useState("")
    // add blue border to search
    const [deco,setDeco]=useState("")
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
        setDeco("") ;
        setDecoicon("gray")
    }
  return (
      <div className='w-full h-[105px] p-1 flex items-center bg-black  sticky top-0'>
            <div className={` w-full h-4/5  rounded-full bg-gray-400/20 flex p-4 items-center gap-5 ${deco}`}>
        <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"  stroke={decoicon} className="text-gray-white size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
        </div>

        <input type="text" className='bg-transparent focus:outline-none placeholder-gray-500 text-white w-full ' placeholder='Search ' onFocus={handleFocus} onBlur={ handleBlur } onChange={handleSearch}  />
        
    </div>

      </div>
  )
}

export default Search
