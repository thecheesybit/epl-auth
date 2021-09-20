import React from 'react'
// const Hero =({handleLogOut})=>{
//     return(
//         <section className="hero">
//             <nav>
//                 <h2>welcome</h2>
//                 <button onClick={handleLogOut}>Log Out</button>
//             </nav>
//         </section>
//     );
// };

// export default Hero;


import './AppBody.css';
import Navbar from './components/Navbar';
import Land from './components/Land';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Course from './components/Course';




function Hero() {
  return (
   <>
   <Navbar/>
    <Router>
     <div className="container my-3">
     <Switch>
          <Route path='/profile'>
            <Profile/>
          </Route>
           <Route path="/course">
            <Course/>
          </Route> 
          <Route path='/main'>
             <Land/>
          </Route>
        </Switch>
        </div>
    </Router>
   </>
  );
}

export default Hero;
