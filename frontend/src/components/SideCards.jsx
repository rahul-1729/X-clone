import React from"react"

function SideCards({name,path}){
    return (
        <div className="w-full h-[50px] flex justify-end bch:justify-start     ">
            <div className="bch:hover:bg-gray-600/45  flex items-center rounded-full">
                <div className="hover:bg-gray-600/45 hover:rounded-full p-[15px] bch:hover:bg-transparent items-center">
                    <svg viewBox="0 0 24 24" height={28} width={28} aria-hidden="true" ><g><path d={path} fill="white" ></path></g></svg>
                </div>
                
                
                <div className=" hidden bch:block text-white pr-[15px] ">
                    <h2 className="text-xl font-light">{name}</h2>
                </div>
            </div>
          
        </div>
    )
}

export default SideCards