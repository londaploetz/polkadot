import React from 'react';
import './navbar.css';

const Navbar = () => {
return (
   <div className="topnav">
    <p className='call_nav'> 
     Hair designs to make you smile <br />
     ...it all starts by calling
     01869 226 522 
    </p>
     <a href="#find">Email Us</a>
     <a href="#book">Book Online</a>
     <a href="#home">Home</a>
     <a href="#amika">Amika</a>  
     <p className='sale_nav' href="#sale">G H D Sale!</p>
  </div>


 );
};
export default Navbar;