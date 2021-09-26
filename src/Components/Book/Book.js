import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' 
import './Book.css'
import Rating from 'react-rating';

const Book = props => {
    // console.log(props.book);
    
    const {name,img,Author,price,read,star} = props.book;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="bookCss">
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <h3>Author : {Author}</h3>
            <h4>Type : {read}</h4>
            <p><Rating 
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            initialRating={star}
            readonly></Rating></p>
            <h3>Price :   $ {price}</h3>
            <button onClick={() => props.handelAddtoCard(props.book)}>{element}  Add to Cart</button>
        </div>
    );
};

export default Book;