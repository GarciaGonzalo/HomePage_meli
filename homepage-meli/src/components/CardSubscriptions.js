import React from 'react';
import '../styles/sass/subcriptions.scss';
import subscription1 from '../Imagenes/subscription/subscription1.jpg';
import partner1 from '../Imagenes/subscription/partner1.png';

export default function CardSubscriptions(){
    return(
        <div className="card-subscriptions">

        <img src={subscription1} alt="paramount+" />

        <div className="description-subscription">

            <div className="description-subscription-image">
                <img src={partner1} alt="partner" />
            </div>

            <div className="description-subscription-text">
                <span className="description-subscription-daysFree">7 DÍAS GRATIS</span>
                <span className="description-subscription-title">Hasta 40% OFF</span>
                <span className="description-subscription-mark">Paramount+</span>
            </div>
            
        </div>

    </div>
    )
}

// armar el json con los datos de los componentes
// ponerle props a este componente
// llamarlos con un hook y fetch en Subcriptions.js