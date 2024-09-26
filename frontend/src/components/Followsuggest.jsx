import React from 'react'
import Followcards from './Followcards'
function Followsuggest() {
  return (
    <div className='text-white border border-gray-800 rounded-2xl flex flex-col gap-3 '>
       <h1 className='font-bold text-xl font-sans pl-4 pr-4 pt-4'>Who to follow</h1>
        <Followcards/>
        <Followcards/>
        <Followcards/>
       <div className=' p-4 text-sky-600 hover:bg-gray-900/40'>
           Show More dummy
       </div>
     

    </div>
  )
}

export default Followsuggest
