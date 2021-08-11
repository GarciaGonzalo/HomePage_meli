import React from 'react';
import '../styles/sass/descubri.scss';
import advertising1 from '../Imagenes/advertising/advertising1.webp';
import advertising3 from '../Imagenes/advertising/advertising3.webp';

export default function Descubri(){
    return(
    <article className="descubri row-container">

        <div className="row-header">
            <h2>Descubrí</h2>
        </div>

        <div className="row-body">

            <div className="advertising">
            
                <div className="description-advertising">
                    <span className="description-advertising-text">CALEFACCIÓN</span>
                    <div className="description-advertising-title">
                        <span>EQUIPATE</span>
                        <span>PARA EL FRIO</span>
                    </div>
                    <button className="description-advertising-button">Ver más</button>
                </div>

                <img src={advertising1} alt="Advertising - Calefaccion" />
            
            </div>

            <div className="advertising">
            
                <div className="description-advertising">
                    <span className="description-advertising-text">DISFRUTÁ DEL FÚTBOL</span>
                    <div className="description-advertising-title">
                        <span>OFERTAS</span>
                        <span>GANADORAS</span>
                    </div>
                    <button className="description-advertising-button">Descubrí</button>
                </div>

                <img src={advertising3} alt="Advertising - FÚTBOL" />
            
            </div>

        </div>

    </article>
    )
}