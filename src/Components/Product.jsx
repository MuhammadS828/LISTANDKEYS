import React from 'react';

const Product = (props) => {
    return (
        <div className='cardProduct'>
            <img className='imageProduct' src={props.image} alt="scdf" />
            <span className='nameProduct'>{props.name}</span>
            <span className='priceProduct'>{props.price}</span>
            <span className='leftProduct'>{props.left}</span>
            <button className='btn'>Купить</button>
        </div>
    );
};

export default Product;