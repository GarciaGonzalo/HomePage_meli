import React from 'react';
import '../styles/sass/cardsContainer.scss';

export default function CardsButton(props){
    return(
        <div>
            <div className="slide-cards">
                {props.card}
            </div>

            {props.button &&
            <div className="cards-button">
                
                <button className="button-left-slide">
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 19L1 10L10 1" stroke="#3483FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>                                                                               
                </button>
                
                <button className="button-right-slide">
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L10 10L1 1" stroke="#3483FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>                            
                </button>
            
            </div>
            }
        </div>
    )
}