import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './style.css';
import { useState } from 'react';

export default function Navbar() {
 
const [color, setColor] = useState(false);
const changeColor = () =>{
    if(window.scrollY >=90){
        setColor(true)
    }else{
        setColor(false)
    }
}
window.addEventListener('scroll',changeColor)

  return (
    
    <header className={color ? 'header active' : 'header'} >

      <Link to="/" className="logo"> <i className="fas fa-hiking"></i> Trek Buddy </Link>

      <nav className="navbar">
        <div id="nav-close" className="fas fa-times"></div>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/about">fasd</CustomLink>
          <a href="/packages">packages</a>
          <a href="#reviews">reviews</a>
          <a href="#blogs">blogs</a>
      </nav>
      <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          {/* <CustomLink to="#" className="fas fa-shopping-cart"></CustomLink> */}
          <CustomLink to="#" className="fas fa-edit"></CustomLink>
          <CustomLink to="/" className="fas fa-sign-out-alt"></CustomLink>
      </div>
      </header>
    
    
    
    
    
    
    // <nav className="navbar">
    //   <Link to="/" className="site-title">
    //     Site Name
    //   </Link>
    //   <ul>
    //     <CustomLink to="/pricing">Pricing</CustomLink>
    //     <CustomLink to="/about">About</CustomLink>
    //   </ul>
    // </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
      <Link to={to} {...props}>
        {children}
      </Link>
  )
}
