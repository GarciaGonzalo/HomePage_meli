import React from 'react';
import '../styles/sass/TePuedeInteresar.scss';
import advertising2 from '../Imagenes/advertising/advertising5.webp';
import advertising4 from '../Imagenes/advertising/advertising4.webp';

export default function tePuedeInteresar(){
    return(
    <article className="tePuedeInteresar row-container">

        <div className="row-header">
            <h2>Te puede interesar</h2>
        </div>
        
        <div className="row-body">

            <div className="advertising">
            
                <div className="description-advertising">
                    <span className="description-advertising-text">MERCADO PAGO POINT + QR</span>
                    <div className="description-advertising-title">
                        <span>EMPEZÁ A COBRAR</span>
                        <span>CON TARJETAS</span>
                    </div>
                    <button className="description-advertising-button">Ver más</button>
                </div>

                <img src={advertising2} alt="Advertising - Mercado pago point" />
            
            </div>

            <div className="advertising">
            
                <div className="description-advertising">
                    <span className="description-advertising-text">¡APROVECHÁ!</span>
                    <div className="description-advertising-title">
                        <span>ABRIGOS</span>
                        <span>DE MODA</span>
                    </div>
                    <button className="description-advertising-button">Descubrí</button>
                </div>

                <img src={advertising4} alt="Advertising - Calefaccion" />
            
            </div>

        </div>

    </article>
    )
}