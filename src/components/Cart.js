import React,{useEffect, useState} from "react";
import {cartState} from './Products'


import './Products.css'

export function Cart(){
    const [cart,setCart]=useState(cartState)

    
    
    

        return(
            <div className="cards">
                
                    {cart.map(cart=>(
                    <>
                       <div>
                       <div class="card__content">
                  <h4>{cart.title}</h4>
                  <div>
                    <p>Price: {cart.price*cart.quantity}$</p>
                  </div>
                  <div>
                    <p>Quantity: {cart.quantity}</p>
                  </div>
                </div>
                <div class="card__info">
                 
                 
                  <div>
                    <button>+</button>
                  </div>

                  <div>
                  <button>-</button>
                  </div>
                  <div>
                  <button>Delete</button>
                  </div>

                  

                </div>

              </div>
              </>
                    ))}
                
            </div>
        )
}