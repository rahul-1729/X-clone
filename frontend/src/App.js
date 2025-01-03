import './App.css';
import SideBar from './components/SideBar';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import { BrowserRouter as Router } from 'react-router-dom';
import Editprofile from './components/profile/profileEdit/Editprofile';
function App() {
  return (
    <>
    {/* add state to opacity value on clicking edit profile */}
      <div className='h-screen w-screen bg-black  grid grid-cols-7 z-20 opacity-75'>
      {/* SideBar */}
       <div className=' hidden sm:flex col-span-1 bch:col-span-2   justify-end'>
        <Router>
           <SideBar/>
        </Router>
       </div>
       {/*Post + recommendation */}
       <div className='col-span-7 sm:col-span-6 bch:col-span-5 flex h-screen '>
             {/* Post */}
             <div className='w-full sm:w-[600px] h-full    border-r border-l border-zinc-700 flex-col flex overflow-y-auto'>
              
               <Section2/>
               
                
               
               
             </div>
             {/* Recommendation */}
             <div className=' hidden gx:flex w-[370px] h-full pl-[20px] overflow-y-auto  gap-3 gx:flex-col'>
               <Section3/>
               
             </div>
       </div>
       
    </div>
    <Router>
    <Editprofile/>
    </Router>
    
    </>
  
  );
}

export default App;
