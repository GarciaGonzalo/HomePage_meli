import React from 'react';
import '../styles/sass/carrousel.scss';
import imgCarousel1 from '../Imagenes/carousel/carousel1.webp';
import imgCarousel2 from '../Imagenes/carousel/carousel2.webp';
import imgCarousel3 from '../Imagenes/carousel/carousel3.webp';
import imgCarousel4 from '../Imagenes/carousel/carousel4.webp';

export default function Carrousel(){
    return(
        <article className="carousel">

        <div className="slides">

            <input type="radio" name="radio-boton" className="radio1" />
            <input type="radio" name="radio-boton" className="radio2" />
            <input type="radio" name="radio-boton" className="radio3" />
            <input type="radio" name="radio-boton" className="radio4" />
            

            <div className="slide first"><img src={imgCarousel1} alt="Ofertas dia del padre" /></div>
            <div className="slide"><img src={imgCarousel2} alt="Ofertas futbol" /></div>
            <div className="slide"><img src={imgCarousel3} alt="Ofertas hogar" /></div>
            <div className="slide"><img src={imgCarousel4} alt="Mercado credito" /></div>


            <div className="slides-auto">
                <div className="boton-auto1"></div>
                <div className="boton-auto2"></div>
                <div className="boton-auto3"></div>
                <div className="boton-auto4"></div>
            </div>

            <div className="slides-manual">
                <label htmlFor="radio1" className="boton-manual"></label>
                <label htmlFor="radio2" className="boton-manual"></label>
                <label htmlFor="radio3" className="boton-manual"></label>
                <label htmlFor="radio4" className="boton-manual"></label>
            </div>

            
            <div className="carousel-buttons">

                <button className="carousel-buttons-before">
                    <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 25L1 13L13 1" stroke="#3483FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>                                                       
                </button>

                <button className="carousel-buttons-after">
                    <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 25L13 13L1 1" stroke="#3483FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>                            
                </button>

            </div>
            
        </div>

    </article>
    )
}