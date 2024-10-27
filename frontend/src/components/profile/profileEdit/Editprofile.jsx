import React, { useState} from 'react'
import Input from './Input'
import wall from '../../../assets/basketball.jpeg'
import pro from '../../../assets/profile_pic.jpeg'
import { Link } from 'react-router-dom'
 


function Editprofile() {
  
  // ----------------Wallpaper---------
  // wallpaper
   const [wallpaper,setWallpaper]=useState(wall)
  //  profile
   const [profile,setProfile]=useState(pro)
  //  cross
  const [cross,setCross]=useState("")
  // white hover on camera
  const [cam,setCam]=useState("")

  // ----Name------------------

 

  // ------------------BIO-----------
  
   //Bio variable
   const[bio,setBio]=useState("")
   // count bio string
   const [varbio,setVarbio]=useState(0)
   //visibility of count
   const [visbio,setVisbio]=useState("hidden")
   // border of name
   const [bioborder,setBioborder]=useState("border border-zinc-700")
   // name color
   const [biocolor,setBiocolor]=useState("text-zinc-400")

   // -------------------Profile Fuctions---------- 
  const handleProfile= (e)=>
    {
       const File = e.target.files[0]
       if(File)
       {
         const preview = URL.createObjectURL(File)
         setProfile(preview)
       }
    }
    const handleWallpaper= (event)=>
      {    
        
        const File = event.target.files[0]
         
         if(File)
         {
          
          const preview = URL.createObjectURL(File)
          setWallpaper(preview)
          
         
         setCross("")
         setCam("")
         }
       
      }


    const handleCross =()=>{
        setCross("hidden")
        setCam("hover:bg-white/10")
        setWallpaper("")
    }
 
const handleBio=(e)=>{
  
  setBio(e.target.value)
  setVarbio(e.target.value.length)
  if(e.target.value.length<=160)
    setVisbio("text-zinc-400")
    else
    setVisbio("text-red-500")
   

}
const BioFocus=()=>{
 setBioborder("border border-sky-500")
 setBiocolor("text-sky-500")
 if(bio.length<=160)
 setVisbio("text-zinc-400")
 else
 setVisbio("text-red-500")


}
const BioBlur=()=>{
 
setBioborder("border border-zinc-700")
setBiocolor("text-zinc-400")
setVisbio("hidden")
}

 

//  --------------------------Functions Location----------

 
 
  
  return (
    <div className='fixed w-full h-full sm:w-[600px] sm:h-[620px] z-30 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-y-auto bg-black pb-20'>
      {/*----------------- Edit profile and save--------- */}
      <div className='w-full h-[60px] flex items-center justify-between p-4 sticky top-0 z-30 backdrop-blur-md bg-black/60'>
        <div className='h-full items-center gap-10 flex '>
          <div className='hover:bg-white/15 p-[6px] rounded-full'>
            <svg viewBox="0 0 24 24" height={22} width={22}aria-hidden="true"  className='cursor-pointer'  fill="#e5e7eb"><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>

          </div>
           <span className='text-gray-200 text-xl font-semibold '>Edit profile</span>
        </div>
        <button className='bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-full font-medium text-sm '>Save</button>

      </div>
      {/* --------------Add wallpaper------------------ */}
      <div className='w-full aspect-[3/1] relative mb-[75px] px-1'>
          <div className='flex gap-8 absolute origin-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20'>
          
          <label htmlFor="wallpaper">
          <div className={`bg-black/45 hover:bg-black/30 p-3 rounded-full cursor-pointer ${cam}`} >
           <svg viewBox="0 0 24 24" height={24} width={24} aria-hidden="true"   fill="#e5e7eb"><g><path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z"></path></g></svg>
         </div >
          </label>
         {/* hide it on clicking  */}
         <div className={`bg-black/45 p-3 rounded-full hover:bg-black/30 cursor-pointer ${cross}`} onClick={handleCross}>
          <svg viewBox="0 0 24 24" height={24} width={24} aria-hidden="true"   fill="#e5e7eb"><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
        </div>
          </div>
         <input className="hidden "type="file"id="wallpaper" onChange={handleWallpaper} />
         <div className='absolute w-full aspect-[3/1] bg-black/30 z-10'></div>
         {/* palce empty string on walppaper on clicking X(cross)  */}
         <img id="wallpaper_image"src={wallpaper} className="w-full h-full object-cover "alt="" />

          {/* ----------------add profile pic------------- */}
       
        <div className='absolute left-0 bottom-0 w-1/5 aspect-[1/1] rounded-full bg-yellow-300 center-origin translate-y-[50%]  translate-x-[15%]  border-4 border-black flex justify-center items-center z-20'>
        {/* insert user image from database */}
          <div className='absolute rounded-full h-full w-full aspect-[3/1] bg-black/25 z-30'></div>
         
           <img className=" object-cover w-full h-full rounded-full"src={profile} alt="" />
           <input type="file" id="profile" className='hidden' onChange={handleProfile} />
           <label htmlFor="profile" className='absolute  cursor-pointer z-40'>
             <div className='bg-black/45 hover:bg-black/35 p-3 rounded-full' >
           <svg viewBox="0 0 24 24" height={24} width={24} aria-hidden="true"   fill="#e5e7eb"><g><path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z"></path></g></svg>
         </div >
           </label>
        </div>

      </div>
      
    <div className='w-full px-4 flex flex-col gap-7'>
      {/* -------------------------Name Input------ */}
       
        <Input heading={"Name"} constraint={50}/>
      

      {/* ---------------------------BIO----------------*/}

         <div className={`w-full rounded flex flex-col p-2 ${bioborder}` }>
              <div className='text-sm flex justify-between'>
                <div className={`${biocolor}`}>Bio</div>
                <div className={`${visbio}`}>{varbio}/160</div>
                </div>
              <textarea type="text" className={`focus:outline-none text-gray-200 bg-transparent resize-none`} onChange={handleBio} onFocus={BioFocus} onBlur={BioBlur} />

            </div>

         {/* -------------------------Location------ */}

         <Input heading={"Location"} constraint={30}/>

         {/* -------------------------Website--- */}
         <Input heading={"website"} constraint={100}/>


         {/* date of Birth */}

         <div className={`w-full rounded flex flex-col p-2 ` }>
              <div className='text-sm flex flex-col'>
                    <div>
                      <span className='text-zinc-500 text-[15px]'>Birth date . </span>
                      <span className='text-sky-500 cursor-pointer'><Link to="" className='text-[16px] hover:underline'>Edit</Link></span>
                    </div>
                    <div className='text-white text-[22px]'>January 30, 2003</div>
                </div>
              

          </div>

      
         
        
    </div>
     
     

      
    </div>
  )
}

export default Editprofile
