import React from "react";
import {Route,Routes} from 'react-router-dom';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Login from  "./components/Login.jsx"
import SignUp from './components/SignUp.jsx'

function App() {
  return (
   <div>
    <Header/>
   {/* <Login/> */}
  {/* < SignUp/> */}
    <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/signup" element={ <SignUp/>}/>
        <Route path="/login" element={<Login/> }/>
    </Routes>
     
   </div>
  );
}

export default App;
