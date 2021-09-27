import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css'

const Books = () => {
    const [books,setBooks] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('./Book.jSON')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    const handelAddtoCard = (book) => {
        // console.log(book.name);
        // console.log('clicked');
        const newCart = [...cart,book];
        setCart(newCart);
    }
    return (
        <div className="books-container">
            <div className="product-container">
                <h3>Boocks {books.length}</h3>
               <div className="gridBooks">
               {
                    books.map(book => <Book 
                        key={book._id}                    
                        book={book}
                        handelAddtoCard={handelAddtoCard}
                        >   
                        </Book>)
                       
                }
                 
               </div>
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Books;