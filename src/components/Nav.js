import React,{useEffect, useState} from 'react'
import { Cart } from './Cart'
import { Products } from './Products'
import './Nav.css'

export function Nav(){

    const[nav,setNav] = useState(<Products></Products>)

    

    return (
        <>
        {console.log()}
        <nav className="navBar">
        <ul className="navBarLinks">
            <li onClick={()=>setNav(<Products></Products>)} className="products">Products</li>
            <li onClick={()=>setNav(<Cart></Cart>)} className="cart">Cart</li>
            <li onClick={()=>setNav("payment")} className="payment">Payment</li>
        </ul>
    </nav>
    <div>{nav}</div>
    </>
    )
}