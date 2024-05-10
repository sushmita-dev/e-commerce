import React from 'react'
import { Link } from 'react-router-dom'
import cart_icon from './Assets/cart_icon.png'

export const Login = (props) => {
  return (
    <>
       <div className='nav-login-cart' style={{background:props.rong}}>
                <Link to='/login'><button>login {props.number} </button></Link>
      </div>
    </>
  
  )
}
