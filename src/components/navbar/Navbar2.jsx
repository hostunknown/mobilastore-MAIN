import React, { Component } from 'react'
import "./Navbar2.css"
import { Link } from "react-router-dom"
import { ShoppingCart, User } from "phosphor-react";


const ScrollToTop =() => {
    window.scrollTo(0, 0);
}

class Navbar2 extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
  return (
    <div className='Navbar2'>
        <div className='logo2'>
      <Link to="home">LOGO</Link>
      </div>

      <div id="navbar2" className={this.state.clicked ? '#navbar2 active' : '#navbar2'}>
        <Link id="link2" to="/home" onClick={ScrollToTop}><p>Principala</p></Link>
        <Link id="link2" to="/about" onClick={ScrollToTop}><p>Despre noi</p></Link>
        <Link id="link2" to="/contact" onClick={ScrollToTop}><p>Contacte</p></Link>
        <Link id="link2" to="/shop" onClick={ScrollToTop}><p>Magazin</p></Link>
        <Link id="link2" to="/shop" onClick={ScrollToTop}><p>Categorii</p></Link>

        <div className='iconsnav2'>
            <Link to="/cart" onClick={ScrollToTop}><ShoppingCart size={32} className='icon2'/></Link>
            <Link to="/profile" onClick={ScrollToTop}><User size={32} className='icon2'/></Link>

            <Link to="/cart" onClick={ScrollToTop}><ShoppingCart size={42} className='icon2-mobile'/></Link>
            <Link to="/profile" onClick={ScrollToTop}><User size={42} className='icon2-mobile'/></Link>
        </div>
      </div>

      <div id="mobile2" onClick={this.handleClick}>
      <i id="bar" className={this.state.clicked ? 
      "fas fa-times" : "fas fa-bars" }></i>
      </div>
    </div>
  )
}
}

export default Navbar2
