import React from 'react';
// import Book from '../Book/Book';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    
    let total = 0;
    for(const book of cart){
        total =total + book.price ;
        
    }
    return (
        <div className="cart">
             <h3>Cart</h3>
                <br />
                <h4>Items Ordered : {props.cart.length}</h4>
                <h4>Total : $  {total}</h4>
                {
                    cart.map((book,bookid) =>  <div key={bookid}>
                        <h5 key={book._id}>Book Name : {book.name}</h5>
                    </div>)
                }
               
        </div>
    );
};

export default Cart;