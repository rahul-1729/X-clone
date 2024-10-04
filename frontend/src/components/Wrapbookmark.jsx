import React from 'react'
import Stickybookmarksearch from './Stickybookmarksearch'
import Stickybookmarktop from './Stickybookmarktop'

function Wrapbookmark() {
  return (
    <div className='backdrop-blur-lg h-[120px] flex flex-col gap-0 sticky top-0 bg-black/70'>
    <Stickybookmarktop/>
    <Stickybookmarksearch/>
</div>
  )
}

export default Wrapbookmark
