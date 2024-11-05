

import React, { useEffect, useState } from 'react'
import { Cart, Search } from 'react-bootstrap-icons'
import { FaHeart, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom';





function Header({onLoginClick }) {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    
  return (
    <div>
        <section>
            <nav className={`navbar ${isScrolled ? 'navbar-fixed' : ''}`}>
                <div className="navbar-logo"> 
                    <div>E-Com Store</div>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/">
                            <i><FaHome /></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/footer">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/footer">Contact</Link>
                    </li>
                    <li className='nav-btn'>
                        <Link to ='/login'>
                            <button className='btnLogin-popup' onClick={onLoginClick} >Login</button>
                        </Link>
                    </li>
                        
                    
                    
                </ul>

                <div>
                    <form className="form-inline ">
                        <input className="nav-search form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn" type="submit"><i><Search/></i></button>
                    </form>
                </div>
                <div className='nav-wishlist'>
                <a href="/wishlist">
                        <i>< FaHeart /></i>
                        <span className="wishlist-item-count">0</span>
                    </a>
                </div>
                

                <div className="navbar-cart">
                    <a href="/cart">
                        <i>< Cart /></i>
                        <span className="cart-item-count">0</span>
                    </a>
                </div>
            </nav>
            
        </section>
    </div>
  )
}

export default Header
