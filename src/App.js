import React, { useEffect, useState } from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Book from './Book'
import './App.css'
const App = () => {
  const [screens,setScreens]=useState({height:undefined,width:undefined})
  useEffect(()=>{
    function handleWidth(){
     setScreens({height:window.innerHeight,width:window.innerWidth})
    }
    window.addEventListener('resize',handleWidth)
    return ()=>window.removeEventListener("resize",handleWidth)
  },[])
  const [navigation,setNavigation]=useState(false)
  return (
    <>
    <nav
    style={{
      background:screens.width<501 && navigation?"white":"rgba(217, 217, 217, 0.01)",
      boxShadow:screens.width<501 && navigation?"0 2px 15px 200rem rgba(0,0,0,0.5)":"2px 4px 20px 0px rgba(125, 110, 235, 0.5)",
      backdropFilter: "blur(10px)",
    }}
    >
      {screens.width<501?<div style={{width:50,padding:10}}>
      <div id={navigation?"close_navigation":'navigation_button'} onClick={()=>setNavigation(!navigation)}></div>
      </div>:<></>}
      <div className='header_name'>
      <h1>Mazario</h1></div>
      <div className={screens.width<501?"nav":'navigations'} id={navigation?'navigation':""}>
      <Link to='/' className='a'>Home</Link>
      <Link to='/about' className='a'>About</Link>
      <Link to='/contact' className='a'>Contact</Link>
      <Link to='/book' className='a'>Book</Link>
      </div>
    </nav>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/book' element={<Book />}/>
    </Routes>
    </>
  )
}

export default App