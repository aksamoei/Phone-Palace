import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function CartItems(){
    const{itemCartId} = useOutletContext();
    const [cartItemsArray, setCartItemsArray] = useState([])

    console.log(itemCartId)
    
    
    // const phoneInCart = phones.find((phone)=>phone.id === itemCartId)
    // console.log(phoneInCart)
    
    // setCartItemsArray((current)=>[...current, phoneInCart])
    // console.log(cartItemsArray)
    return(
        <>
            <h2>Cart</h2>
            <div>
                <img />
                <h3></h3>
            </div>
        </>
    );
}

export default CartItems;