import React from 'react';
import '../styles/sass/advertising.scss';

export default function CardAdvertising(props){
    return(
        <div className="advertising">
            
            <div className="description-advertising">
                <span className="description-advertising-text">{props.title}</span>
                <div className="description-advertising-title">
                    <span>{props.description1}</span>
                    <span>{props.description2}</span>
                </div>
                <button className="description-advertising-button">{props.textButton}</button>
            </div>

            <img src={props.imagen} alt={props.title} />
    
        </div>
    )
}