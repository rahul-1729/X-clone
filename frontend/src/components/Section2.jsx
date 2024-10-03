import React from 'react'
import Stickyhome from './Stickyhome'
import Post from './Post'
import Inputpost from './Inputpost'
import Unseenpostcount from './Unseenpostcount'
import StickyExplore from './StickyExplore'
import { BrowserRouter as Router} from 'react-router-dom'
import StickyExploreSearch from './StickyExploreSearch'
import WrapExplore from './WrapExplore'
function Section2() {
  return (
    <>
      {/* Home section----------*/}
      {/* <Router>
        <Stickyhome/>
      </Router> */}
       {/* explore section---------- */}
       <Router> 
       <WrapExplore/>
      </Router>
     
      <Inputpost/>
      <Unseenpostcount count ={69}/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>

     
     

    </>
    
    
  )
}

export default Section2
