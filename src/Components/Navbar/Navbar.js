import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import  {Login}  from '../login'

function Navbar() {
    const [menu, setMenu] = useState("shop")
    const changeMenu = (item) => {
        console.log(item)
        setMenu(item)
    }
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPPER</p>

            </div>
            <ul className='nav-menu'>
                <li onClick={() => { changeMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { changeMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { changeMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { changeMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
           
            


            <div className='nav-login-cart'>
                <Link to='/login'><button>login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='' /></Link >
                <div className='nav-cart-count'>0</div>
            </div>
        </div>

    )
}


export default Navbar