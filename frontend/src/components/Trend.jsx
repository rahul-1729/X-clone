import React from 'react'
import Newstrend from './Newstrend'
import Hashtrend from './Hashtrend'

function Trend() {
  return (
    <div className='text-white border border-gray-800 rounded-2xl flex flex-col '>
       <h1 className='font-bold text-xl font-sans pl-4 pr-4 pt-4'>What's happening</h1>
       <Newstrend/>
       <Hashtrend/>
       <Hashtrend/>
       <Hashtrend/>
       <div className=' p-4 text-sky-600 hover:bg-gray-900/40'>
           Show More dummy
       </div>
    </div>
  )
}

export default Trend
