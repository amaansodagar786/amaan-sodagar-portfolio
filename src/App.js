import { useEffect, useState } from 'react';
import './App.css';
// import HashLoader from "react-spinners/HashLoader";

import RingLoader from "react-spinners/RingLoader";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Resume from './Components/Resume/Resume';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Gototop from './Components/Gototop/Gototop';
import Mycontextprovider from './Components/Context/Mycontextprovider';


function App() {
  const[Loading,SetLoading]=useState(true);
  

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  return (

    <>
      {Loading ? (
      <div className="loader">
      <RingLoader
        color={'#9067C6'}
        loading={true}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
      ):(
      <div>
        <BrowserRouter>
        <Mycontextprovider>
        <Gototop/>
        <Navbar/>

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        

        
        </Routes>

        <Footer/>
        </Mycontextprovider>
        </BrowserRouter>
      
      
      </div>
       ) 
      }   
    </>
  );
}

export default App;
