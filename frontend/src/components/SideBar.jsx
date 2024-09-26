import React from "react"
import SideCards from "./SideCards"
import Icons from "../HeroIcons/Icons"
import check from '../assets/IMG-20240124-WA0000-removebg.png'

function SideBar()
{
    return (
       <div className="h-full w-full bch:w-3/5 flex flex-col justify-between pb-3">
        <div className="w-full flex flex-col gap-2 p-1 pt-2">
            {/* X logo */}
           <div className="w-full h-[50px] flex justify-end bch:justify-start
            items-center"> 
              <div className="hover:bg-gray-600/30  flex justify-center items-center p-[15px] hover:rounded-full">
                   <svg viewBox="0 0 24 24" height={31} width={31} aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk text-white"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"></path></g></svg>
              </div>
               
            </div>
            {/* navigation options */}
            {
                Icons.map((value,index)=> <SideCards name={value.name} key={index} path={value.path}/>)
            }
            {/* post options */}
            <div className="w-full h-[50px] flex justify-end bch:justify-start pr-[6px] bch:pr-10 rounded-full">
                    
                    <div className="bch:hidden flex justify-center items-center bg-sky-500 rounded-full h-[55px] w-[55px]">
                        <svg viewBox="0 0 24 24" height={28} width={28} aria-hidden="true" ><g><path d="M 23 3 c -6.62 -0.1 -10.38 2.421 -13.05 6.03 C 7.29 12.61 6 17.331 6 22 h 2 c 0 -1.007 0.07 -2.012 0.19 -3 H 12 c 4.1 0 7.48 -3.082 7.94 -7.054 C 22.79 10.147 23.17 6.359 23 3 Z m -7 8 h -1.5 v 2 H 16 c 0.63 -0.016 1.2 -0.08 1.72 -0.188 C 16.95 15.24 14.68 17 12 17 H 8.55 c 0.57 -2.512 1.57 -4.851 3 -6.78 c 2.16 -2.912 5.29 -4.911 9.45 -5.187 C 20.95 8.079 19.9 11 16 11 Z M 4 9 V 6 H 1 V 4 h 3 V 1 h 2 v 3 h 3 v 2 H 6 v 3 H 4 Z" fill="white" ></path></g></svg>
                    </div>
                        <div className="text-white  hidden bch:flex justify-center items-center bch:w-full rounded-full bg-sky-500">
                         <h2 className="text font-medium">POST</h2>
                        </div>
                        
                    
             </div>
            
         
       
        </div>
        {/* User logged */}
        <div className="w-full h-[45px]   flex gap-2 justify-end bch:justify-between pr-[15px]">
            <div className="flex gap-2 h-full items-center ">
                <div className="h-[45px] w-[45px] rounded-full bg-yellow-300">
                 {/* USER IMAGE */}
                 <img className="h-full w-full rounded-full object-cover"src={check} alt="" />
                </div>
                <div className=" h-full flex-col  hidden bch:flex justify-center ">
                    <h2 className="text-white font-medium">User Name</h2>
                    <h2 className="text-white text-gray-500">@user_id</h2>
                </div>
            </div>

            <div className="hidden bch:flex justify-center items-center h-full">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
               </svg>


            </div>    

        </div>

       </div>
    )
}

export default SideBar
