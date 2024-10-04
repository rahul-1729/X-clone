import React from 'react'
import Stickynotification from './Stickynotification'
import Stickynotificationtop from './Stickynotificationtop'

function WrapNotification() {
  return (
    <div className='h-[120px] flex flex-col gap-0 sticky top-0 bg-black/70 backdrop-blur-lg'>
    <Stickynotificationtop/>
    <Stickynotification/>
</div>
  )
}

export default WrapNotification
