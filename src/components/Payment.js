import { cartState } from "./Products"
import './Payment.css'

export function Payment(){

    

    let total=0

    for(let i = 0;i < cartState.length;i++){
        total+=cartState[i].quantity*cartState[i].price
    }


    return(
    <>
        <div class="container">

<form action="">

    <div class="row">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="john deo"></input>
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com"></input>
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality"></input>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input type="text" placeholder="ramat-gan"></input>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>state :</span>
                    <input type="text" placeholder="israel"></input>
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456"></input>
                </div>
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo"></input>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"></input>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january"></input>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="2022"></input>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="1234"></input>
                </div>
            </div>

            <div class="totalCost">
            <span>Total Cost :</span>
            <h3 >{total}$</h3>
        </div>

        </div>

    </div>

    <input type="button" value="proceed to checkout" class="submit-btn"></input>

</form>

</div>
</>
    )
}