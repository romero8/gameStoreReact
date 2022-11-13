import React,{ useState } from "react";
import {cartState} from './Products'
import './Products.css'

export let updateCart = []


export function Cart(){

    const [cart,setCart]=useState(cartState)

    
    function addQuantity(item){

      let index = cart.indexOf(item)
      let newQuantity = cart[index].quantity +1;
      let newArr = [...cart]
      newArr[index].quantity = newQuantity

      setCart(newArr)    
      updateCart = newArr
    }


    function decQuantity(item){
      let index = cart.indexOf(item)
      
      if(cart[index].quantity>1){
        let newQuantity = cart[index].quantity -1;
        let newArr = [...cart]
        newArr[index].quantity = newQuantity
  
        setCart(newArr)    
        updateCart = newArr
      }   
    }


    function deleteItem(item){
      let index = cart.indexOf(item)
      let newArr = [...cart]
      newArr.splice(index,1)

      setCart(newArr)
      updateCart = newArr
    }



    let sum = 0   
    
    for(let i = 0;i<cart.length;i++){
      sum += cart[i].quantity*cart[i].price
    }

   
   
        return(
          <>
          <h1>Total Cost: {sum}$</h1>
            <div className="cards">

                    {cart.map(item=>(
                    
                       <div>
                       <div class="card__content">
                  <h4>{item.title}</h4>
                  <div>
                    <p>Price: {item.price*item.quantity}$</p>
                  </div>
                  <div>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div class="card__info">
                 
                 
                  <div>
                    <button onClick={()=>addQuantity(item)}>+</button>
                  </div>

                  <div>
                  <button onClick={()=>decQuantity(item)}>-</button>
                  </div>
                  <div>
                  <button onClick={()=>deleteItem(item)}>Delete</button>
                  </div>

                  

                </div>

              </div>
              
                    ))}
                
            </div>
            </>
        )
}