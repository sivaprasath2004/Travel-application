import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Book from './Book'
import Login from './Login'
import './App.css'
const App = () => {
  return (
    <>
    <nav
    style={{
      background: "rgba(217, 217, 217, 0.01)",
      boxShadow: "2px 4px 20px 0px rgba(125, 110, 235, 0.5)",
      backdropFilter: "blur(10px)",
    }}
    >
      <div className='header_name'>
      <h1>Mazario</h1></div>
      <div className='navigations' id='navigation'>
      <Link to='/' className='a'>Home</Link>
      <Link to='/about' className='a'>About</Link>
      <Link to='/contact' className='a'>Contact</Link>
      <Link to='/book' className='a'>Book</Link>
      <Link to='/login' className='a'>Login</Link>
      </div>
    </nav>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/book' element={<Book />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </>
  )
}

export default App