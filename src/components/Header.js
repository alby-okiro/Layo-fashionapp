import React from "react";
import { useState } from "react";
import LayoLogo from '../app/assets/images/layo.png'
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink

  } from 'reactstrap'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color='primary' sticky='top' expand='md' className="navbar navbar-expand-lg navbar-light bg-light">
       <NavbarBrand className='ms-4' href='/'>
          <img src={LayoLogo} alt='Layo Logo' className='float-start' />
          <h1>Welcome to Our Store</h1>
          <p class="centered" className='ms-auto'>Explore our amazing products!</p>
      </NavbarBrand>  
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
          <Collapse isOpen={menuOpen} navbar>
          <Nav className='ms-auto' navbar>

            <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
            </NavItem>
          
          <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Features
                        </NavLink>
          </NavItem>
          <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Pricing
                        </NavLink>
          </NavItem >
          <NavItem>
          <div className="dropdown">
                            <NavLink className ="dropbtn">Other Products</NavLink>
                            <div class="dropdown-content">
                              <a href="#">Spiritual Oils</a>
                              <a href="#">Spiritual Soaps</a>
                              <a href="#">More Jewellery</a>
              </div>               
              </div>
          </NavItem>
      <NavItem>
        <div class="navbar-cart">
            <a href="#" class="cart-icon">🛒</a>
          </div>
    </NavItem>
    <NavItem>
              <div class="search_bar">
              <input type="text" name="search" value="Search.." className="fa-search" />
              </div>
           </NavItem>
        </Nav>
    </Collapse>   
</Navbar>

  );
};

export default Header;