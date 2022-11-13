import React,{useEffect, useState} from "react";
import { updateCart } from "./Cart";
import './Products.css'


export let cartState = []


export function Products(){

  cartState = updateCart

  const [cards,setCards]=useState([])
  
  
useEffect(()=>{
  

  let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
          
          fetch(url).then(response => response.json()).then(responseJson => {
              console.log(responseJson)
              for(let i = 0;i<responseJson.length;i++){
                responseJson[i].status='Available'

                cartState.forEach((item)=>{
                  if(item.title===responseJson[i].title && item.status==="Added"){
                    responseJson[i].status='Added'
                  }
                })
  
              }
              
              setCards(responseJson)                
          })
}, [])



    
function addToState(card){
  
  let index = cards.indexOf(card)
  if(cards[index].status==='Available'){
    cards[index].status='Added'

    cartState.push({
      status:cards[index].status,
      title:cards[index].title,
      price:parseInt(cards[index].normalPrice),
      quantity:1
    })

  }

  console.log(cartState)
  

  setCards(prevCards=>prevCards.map(item=>
    item.status === "Added"
    ? {...item, status:'Added'}
    : item
  ))
  
  
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