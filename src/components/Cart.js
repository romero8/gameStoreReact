import React,{useEffect, useState} from "react";
// import { AddBtn } from "./AddBtn";

// import './Cards.css'

export function Cart(){
    const [cart,setCart]=useState([])

    let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
    
        
    useEffect(()=>{
        fetch(url).then(response => response.json()).then(responseJson => {
          setCart(responseJson)
        },[])
    })
    
    

        return(
            <div className="cards">
                
                    {cart.map(cart=>(
                    <>
                       <div>
                       <div class="card__content">
                  <h4>Game Name: ${cart.title}</h4>
                </div>
                <div class="card__info">
                  <div>
                    <p>Price: ${cart.price*cart.quantity}$</p>
                  </div>
                 
                  <div>
                    <p>Quantity: ${cart.quantity}</p>
                  </div>
                  
                </div>

              </div>
              </>
                    ))}
                
            </div>
        )
}