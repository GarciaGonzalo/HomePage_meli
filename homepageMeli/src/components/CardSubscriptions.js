import React from 'react';
import '../styles/sass/subcriptions.scss';

export default function CardSubscriptions(props){
    return(
        <div className="card-subscriptions">

        <img src={props.imagen} alt={props.title} />

        <div className="description-subscription">

            <div className="description-subscription-image">
                <img src={props.partner} alt="partner" />
            </div>

            <div className="description-subscription-text">
                <span className="description-subscription-daysFree">{props.daysFree}</span>
                <span className="description-subscription-title">{props.offer}</span>
                <span className="description-subscription-mark">{props.title}</span>
            </div>
            
        </div>

    </div>
    )
}

