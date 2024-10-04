import React from 'react'
import StickyExplore from './StickyExplore'
import StickyExploreSearch from './StickyExploreSearch'

function WrapExplore() {
  return (
    <div className='h-[120px] flex flex-col gap-0 sticky top-0 bg-black/70 backdrop-blur-lg'>
        <StickyExploreSearch/>
        <StickyExplore/>
    </div>
  )
}

export default WrapExplore
