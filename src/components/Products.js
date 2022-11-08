import { render } from "@testing-library/react";
import React,{useEffect, useState} from "react";
import { AddToCartBtn } from "./AddToCartBtn";

import './Products.css'

export let cartState = [{
  title:'Tumblestone',
  price:33,
  quentity:1,
},
{
  title:'daaaa',
  price:5555,
  quentity:1
}]

export function Products(){

  

  const [cards,setCards]=useState([])
  
  

useEffect(()=>{
  

  let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
          
          fetch(url).then(response => response.json()).then(responseJson => {
              console.log(responseJson)
              for(let i = 0;i<responseJson.length;i++){
                responseJson[i].status='Available'
              }
              setCards(responseJson)                
          })
}, [])



    
function addToState(card){
  let index = cards.indexOf(card)
  
  let updateCards = cards[index].status='Added'
  

  setCards(updateCards)
  
}


  return(
    <div className="cards">
        
            {cards.map(card=>(
            <>
               <div>
                <div className="card__content">
        <h4>Game Name: {card.title}</h4>
      </div>
      <div className="card__info">
        <div>
          <p>Price: {parseInt(card.normalPrice)}$</p>
        </div>
        <button onClick={()=>{addToState(card)}}>Add</button>
        <div>
          <p>Status: {card.status}</p>
        </div>
        
      </div>

      </div>
      </>
            ))}
        
    </div>
    
)

        
                  

        
}