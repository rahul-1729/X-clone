import React, { useState } from 'react'

function StickyExploreSearch() {
    
    // color search box
    const [deco,setDeco]=useState("bg-zinc-800")
    // color search icon
    const[col,setCol]=useState("rgba(156, 163, 175, 0.7)")
    // onFocus
    const[foc,setFoc]=useState("hidden")

    const handleFocus=()=>{
          setDeco("border border-sky-500 bg-transparent")
          setCol("#0ea5e9")
          setFoc("")

    }

    const handleBlur =()=>{
        setDeco("bg-zinc-800")
        setCol("rgba(156, 163, 175, 0.7)")
        setFoc("hidden")

    }

  return ( 
    <div className='w-full h-[60px] shrink-0 text-white bg-transparent flex justify-between items-center px-4 gap-14'>

        <div className={`${foc} hover:bg-white/10 p-2 rounded-full`}>
        <svg viewBox="0 0 24 24" aria-hidden="true" height="20" width="20"  fill="white"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
        
        </div>


        <div className={` w-full h-4/5  rounded-full flex p-4 items-center gap-5 ${deco}`}>
        <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"  stroke={col} className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
        </div>

        <input type="text" className={`bg-transparent focus:outline-none placeholder-gray-500 text-white w-full `} placeholder='Search '
        onFocus={handleFocus} onBlur={handleBlur}
        />
        
    </div>
    <div className='p-2 hover:bg-white/10 rounded-full'>
         <svg viewBox="0 0 24 24" height="22" width="22" aria-hidden="true" fill="white" className='block'><g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></g></svg>

    </div>



   </div>
  )
}

export default StickyExploreSearch
