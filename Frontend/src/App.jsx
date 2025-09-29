import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';
import CompetitiveCoding from './Pages/CompetitiveCoding';
import Resume from './Pages/Resume';

function App() {
  return (
    <>
    <Navbar/>
    <main className="main-content" >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
         <Route path="/technologies" element={<Technologies/>}/>
          <Route path="/competitive-coding" element={<CompetitiveCoding/>}/>
           <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </main>
    </>
   
  )
}

export default App
