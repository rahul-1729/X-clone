import React, { useEffect, useRef, useState } from 'react'
import check2 from "../assets/IMG-20240124-WA0000-removebg.png"


function Inputpost() {
    // refering text area
    const textareaRef = useRef(null)
    // text area values
    const [val,setVal]=useState("")
    // Post button decoration
    const [dec,setDec]=useState("bg-sky-700/90 text-gray-400 cursor-default")
    // Boundry of any visuals
    const [boundry,setBoundry]=useState("")
    // to remove by default video
    const [videodec,setVideodec]=useState("hidden")
    // At right top the cross button
    const [cross,setCross]=useState("hidden")
    // style post button in case of visuals are there
    const [visual,setVisual]=useState({})

    const RemoveVisuals=()=>{
        document.getElementById('postVideo').src=""
        document.getElementById('post').src=""
        setVideodec("hidden")
        setCross("hidden")
        setBoundry("")
        setVisual({})

    }

    const handleVisuals= ()=>{
        const inputFiles = document.getElementById("visuals")

        if(inputFiles&&inputFiles.files&&inputFiles.files[0])
        {
              
            const File = inputFiles.files[0];
            setVisual(inputFiles.files)
            console.log(visual.length)
            console.log(inputFiles.files)
            const fileType = File.type
    
            if(fileType.startsWith('image/'))
            {   
                document.getElementById('postVideo').src=""
                document.getElementById('post').src= URL.createObjectURL(File)
                setBoundry("border border-gray-700")
                setVideodec("hidden")
                setCross("")
                 
            }
            else if(fileType.startsWith('video/'))
            {   
                document.getElementById('post').src=""
                document.getElementById('postVideo').src= URL.createObjectURL(File)
                setBoundry("border border-gray-700")
                setVideodec("")
                setCross("")
               
            }
                
            
        }
       
        
       
        
            
       
    }
    
    const handleText =(e)=>{
        setVal(e.target.value)
       
            
          
    }
    
    useEffect(()=>{
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
        // if ther is no text don't allow the user to post
        if(val.trim().length>0||visual.length>0)
            { 
                setDec("bg-sky-500 text-white cursor-pointer")
            }
            else
            {
              
                setDec("bg-sky-700/90 text-gray-400 cursor-default")
                
            }
    },[val,visual])

  return (
    <div className='w-full border-b border-gray-700 p-3 pr-6 flex  '>
          <div className='h-[45px] w-[45px] flex bg-yellow-300 justify-center  rounded-full flex  shrink-0'>
               {/* user image */}
               <img className=" cursor-pointer rounded-full w-full h-full object-cover" src={check2} alt="" />
          </div>
          <div className='text-white flex flex-col w-full gap-1 pl-3'>
                <div className='w-full border-b border-gray-700 '>
                     <textarea className="w-full text-white bg-transparent focus:outline-none resize-none text-xl placeholder-gray-200/50 font-sans mb-2 " value={val} ref={textareaRef}  onChange={handleText} type="text" rows="1" placeholder='What is happening?!' />
                       
                       <div className={`w-full flex justify-center items-center ${boundry} rounded-xl relative`}>
                        {/* input image for post by user */}
                           <img className="rounded-xl w-full object-cover" alt="" id="post"/>
                           <video id='postVideo' className={`w-full object-cover rounded-xl ${videodec}`} controls></video>
                           <div onClick={RemoveVisuals} className={`absolute w-[32px] h-[32px] right-2 top-2 rounded-full z-10 bg-gray-800 hover:bg-gray-700 flex justify-center items-center ${cross} cursor-pointer`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                           </div>
                       </div>

                     <div className='text-sky-500 font-medium py-3 flex items-center'>
                        {/* add options here */}
                        <div className='px-2 hover:bg-sky-500/10 flex gap-1 items-center rounded-full hover:cursor-pointer'>
                        <svg viewBox="0 0 24 24" height={17} width={17} aria-hidden="true" fill="#0ea5e9"   ><g><path d= "M 12 1.75 C 6.34 1.75 1.75 6.34 1.75 12 S 6.34 22.25 12 22.25 S 22.25 17.66 22.25 12 S 17.66 1.75 12 1.75 Z m -0.25 10.48 L 10.5 17.5 l -2 -1.5 v -3.5 L 7.5 9 L 5.03 7.59 c 1.42 -2.24 3.89 -3.75 6.72 -3.84 L 11 6 l -2 0.5 L 8.5 9 l 5 1.5 l -1.75 1.73 Z M 17 14 v -3 l -1.5 -3 l 2.88 -1.23 c 1.17 1.42 1.87 3.24 1.87 5.23 c 0 1.3 -0.3 2.52 -0.83 3.61 L 17 14 Z"></path></g></svg>
                           
                            <span>Everyone can reply</span>
                        </div>
                        
                     </div>
                </div>
                <div className='py-3 h-[50px]  flex justify-between items-center'>
                    <div className='flex gap-2 px-1 flex items-center'>
                        {/* image input */}
                         <div  className='flex items-center justify-center rounded-full hover:bg-sky-500/15 p-[6px] hover:cursor-pointer'>
                              <label htmlFor="visuals" className='cursor-pointer'>
                                     <svg viewBox="0 0 24 24" height={21} width={21} aria-hidden="true" fill="#0ea5e9"   ><g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path></g></svg>

                              </label>
                             <input type="file" id='visuals' onChange={handleVisuals} className='hidden' />
                         </div>
                         {/* GIF input */}
                         <div className='flex items-center justify-center rounded-full hover:bg-sky-500/15 p-[6px] hover:cursor-pointer'>
                             <svg viewBox="0 0 24 24" height={21} width={21} aria-hidden="true" fill="#0ea5e9"   ><g><path d="M 3 5.5 C 3 4.119 4.12 3 5.5 3 h 13 C 19.88 3 21 4.119 21 5.5 v 13 c 0 1.381 -1.12 2.5 -2.5 2.5 h -13 C 4.12 21 3 19.881 3 18.5 v -13 Z M 5.5 5 c -0.28 0 -0.5 0.224 -0.5 0.5 v 13 c 0 0.276 0.22 0.5 0.5 0.5 h 13 c 0.28 0 0.5 -0.224 0.5 -0.5 v -13 c 0 -0.276 -0.22 -0.5 -0.5 -0.5 h -13 Z M 18 10.711 V 9.25 h -3.74 v 5.5 h 1.44 v -1.719 h 1.7 V 11.57 h -1.7 v -0.859 H 18 Z M 11.79 9.25 h 1.44 v 5.5 h -1.44 v -5.5 Z m -3.07 1.375 c 0.34 0 0.77 0.172 1.02 0.43 l 1.03 -0.86 c -0.51 -0.601 -1.28 -0.945 -2.05 -0.945 C 7.19 9.25 6 10.453 6 12 s 1.19 2.75 2.72 2.75 c 0.85 0 1.54 -0.344 2.05 -0.945 v -2.149 H 8.38 v 1.032 H 9.4 v 0.515 c -0.17 0.086 -0.42 0.172 -0.68 0.172 c -0.76 0 -1.36 -0.602 -1.36 -1.375 c 0 -0.688 0.6 -1.375 1.36 -1.375 Z"></path></g></svg>
                         </div>
                         <div className='flex items-center justify-center rounded-full hover:bg-sky-500/15 p-[6px] hover:cursor-pointer'>
                         {/* create poll */}
                             <svg viewBox="0 0 24 24" height={21} width={21} aria-hidden="true" fill="#0ea5e9"   ><g><path d="M 6 5 c -1.1 0 -2 0.895 -2 2 s 0.9 2 2 2 s 2 -0.895 2 -2 s -0.9 -2 -2 -2 Z M 2 7 c 0 -2.209 1.79 -4 4 -4 s 4 1.791 4 4 s -1.79 4 -4 4 s -4 -1.791 -4 -4 Z m 20 1 H 12 V 6 h 10 v 2 Z M 6 15 c -1.1 0 -2 0.895 -2 2 s 0.9 2 2 2 s 2 -0.895 2 -2 s -0.9 -2 -2 -2 Z m -4 2 c 0 -2.209 1.79 -4 4 -4 s 4 1.791 4 4 s -1.79 4 -4 4 s -4 -1.791 -4 -4 Z m 20 1 H 12 v -2 h 10 v 2 Z M 7 7 c 0 0.552 -0.45 1 -1 1 s -1 -0.448 -1 -1 s 0.45 -1 1 -1 s 1 0.448 1 1 Z"></path></g></svg>
                         </div>
                         <div className='flex items-center justify-center rounded-full hover:bg-sky-500/15 p-[6px] hover:cursor-pointer'>
                         {/* emoji */}
                             <svg viewBox="0 0 24 24" height={21} width={21} aria-hidden="true" fill="#0ea5e9"   ><g><path d="M 8 9.5 C 8 8.119 8.672 7 9.5 7 S 11 8.119 11 9.5 S 10.328 12 9.5 12 S 8 10.881 8 9.5 Z m 6.5 2.5 c 0.828 0 1.5 -1.119 1.5 -2.5 S 15.328 7 14.5 7 S 13 8.119 13 9.5 s 0.672 2.5 1.5 2.5 Z M 12 16 c -2.224 0 -3.021 -2.227 -3.051 -2.316 l -1.897 0.633 c 0.05 0.15 1.271 3.684 4.949 3.684 s 4.898 -3.533 4.949 -3.684 l -1.896 -0.638 c -0.033 0.095 -0.83 2.322 -3.053 2.322 Z m 10.25 -4.001 c 0 5.652 -4.598 10.25 -10.25 10.25 S 1.75 17.652 1.75 12 S 6.348 1.75 12 1.75 S 22.25 6.348 22.25 12 Z m -2 0 c 0 -4.549 -3.701 -8.25 -8.25 -8.25 S 3.75 7.451 3.75 12 s 3.701 8.25 8.25 8.25 s 8.25 -3.701 8.25 -8.25 Z"></path></g></svg>
                         </div>
                         <div className='flex items-center justify-center rounded-full hover:bg-sky-500/15 p-[6px] hover:cursor-pointer'>
                         {/* scheduler */}
                             <svg viewBox="0 0 24 24" height={21} width={21} aria-hidden="true" fill="#0ea5e9"   ><g><path d="M 6 3 V 2 h 2 v 1 h 6 V 2 h 2 v 1 h 1.5 C 18.88 3 20 4.119 20 5.5 v 2 h -2 v -2 c 0 -0.276 -0.22 -0.5 -0.5 -0.5 H 16 v 1 h -2 V 5 H 8 v 1 H 6 V 5 H 4.5 c -0.28 0 -0.5 0.224 -0.5 0.5 v 12 c 0 0.276 0.22 0.5 0.5 0.5 h 3 v 2 h -3 C 3.12 20 2 18.881 2 17.5 v -12 C 2 4.119 3.12 3 4.5 3 H 6 Z m 9.5 8 c -2.49 0 -4.5 2.015 -4.5 4.5 s 2.01 4.5 4.5 4.5 s 4.5 -2.015 4.5 -4.5 s -2.01 -4.5 -4.5 -4.5 Z M 9 15.5 C 9 11.91 11.91 9 15.5 9 s 6.5 2.91 6.5 6.5 s -2.91 6.5 -6.5 6.5 S 9 19.09 9 15.5 Z m 5.5 -2.5 h 2 v 2.086 l 1.71 1.707 l -1.42 1.414 l -2.29 -2.293 V 13 Z"></path></g></svg>
                         </div>
                         <div className='flex items-center justify-center rounded-full p-[6px] text-sky-900'>
                            {/* location */}
                             <svg viewBox="0 0 24 24" height={21} width={21} aria-hidden="true" fill="currentColor"   ><g><path d="M 12 7 c -1.93 0 -3.5 1.57 -3.5 3.5 S 10.07 14 12 14 s 3.5 -1.57 3.5 -3.5 S 13.93 7 12 7 Z m 0 5 c -0.827 0 -1.5 -0.673 -1.5 -1.5 S 11.173 9 12 9 s 1.5 0.673 1.5 1.5 S 12.827 12 12 12 Z m 0 -10 c -4.687 0 -8.5 3.813 -8.5 8.5 c 0 5.967 7.621 11.116 7.945 11.332 l 0.555 0.37 l 0.555 -0.37 c 0.324 -0.216 7.945 -5.365 7.945 -11.332 C 20.5 5.813 16.687 2 12 2 Z m 0 17.77 c -1.665 -1.241 -6.5 -5.196 -6.5 -9.27 C 5.5 6.916 8.416 4 12 4 s 6.5 2.916 6.5 6.5 c 0 4.073 -4.835 8.028 -6.5 9.27 Z"></path></g></svg>
                         </div>
                    </div>
                    {/* post */}
                    <div className={`flex justify-center items-center ${dec} py-2 px-5 font-medium rounded-full`}>
                        Post
                        
                    </div>
                </div>
                
          </div>
      
    </div>
  )
}

export default Inputpost
