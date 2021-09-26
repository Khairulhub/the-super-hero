import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    // const name = props.cart.name
    // console.log(name);
    const {cart} = props;
    
    console.log(cart);
    console.log(cart.name);
    let total = 0;
    for(const book of cart){
        total =total + book.price ;
        
    }
    // const name = {cart.name};
    return (
        <div className="cart">
             <h3>Cart</h3>
                <br />
                <h4>Items Ordered : {props.cart.length}</h4>
                <h4>Total : $  {total}</h4>
                {
                    cart.map(book =>  <h5>Book Name : {book.name}</h5>)
                }
               
        </div>
    );
};

export default Cart;