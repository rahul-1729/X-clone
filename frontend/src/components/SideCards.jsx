import React from"react"
import {NavLink} from "react-router-dom"

function SideCards({name,path1,path2,address}){
    return (
        <div className="w-full h-[50px]">
            <NavLink to={address} className="w-full h-full flex justify-end bch:justify-start"
            >
                 {
                    ({isActive})=>(
                        <div className="bch:hover:bg-gray-600/45  flex items-center rounded-full cursor-pointer">
                        <div className="hover:bg-gray-600/45 hover:rounded-full p-[15px] bch:hover:bg-transparent items-center">
                            <svg viewBox="0 0 24 24" height={28} width={28} aria-hidden="true" ><g><path d={(isActive?path2:path1)} fill="white" ></path></g></svg>
                        </div>
                        
                        
                        <div className=" hidden bch:block text-white pr-[15px] ">
                            <h2 className={`text-xl ${isActive?"font-medium":"font-light"}`}>{name}</h2>
                        </div>
                       </div>
                    )
                 }
            </NavLink> 
        </div>
    )
}

export default SideCards