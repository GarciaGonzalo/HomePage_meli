import React from 'react';
import '../styles/sass/card.scss';

export default function Card(props){
    
    return(
    <div className="card">
        <span className="card-fav">
            <i className="fi-rr-heart"></i>
        </span>

        <img src={props.imagen} alt={props.title} />

        <div className="description-card">
            <span className="last-price">
                <span className="last-price-symbol">$</span>
                <span className="last-price-value">{props.lastPriceValue}</span>
                <span className="last-price-cent">{props.lastPriceCent}</span>
            </span>

            <div className="price">
                <span className="price-symbol">$</span>
                <span className="price-value">{props.actualPriceValue}</span>
                <span className="price-discount">{props.actualPriceDiscount}% OFF</span>
            </div>

            {props.shippingFree && <p className="shipping-free">Envío gratis</p>}

            <p className="description">{props.description}</p>
        </div>

    </div>
    )
}