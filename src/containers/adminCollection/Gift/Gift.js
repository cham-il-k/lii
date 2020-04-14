import React from 'react';
import './gift.scss';      

const Gift =(props) => {
  
        return(
            
            <div className='gift-container'>
                <img
                alt='gifts_image'
                src={props.gift.img}
                />
                <h2> {props.gift.name} </h2>
                <p> {props.gift.description.edition} </p>
                <p className="price"> {props.gift.price} </p>
            </div>)
    }
  
export default Gift;